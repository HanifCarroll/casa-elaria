import { NextRequest, NextResponse } from 'next/server';

interface Lead {
  email: string;
  productName?: string;
  timestamp: string;
  userAgent?: string;
  referrer?: string;
}

interface StorageData {
  clicks: number;
  leads: Lead[];
  lastUpdated: string;
}

// JSONBin.io configuration
const JSONBIN_API_KEY = process.env.JSONBIN_API_KEY;
const JSONBIN_BIN_ID = process.env.JSONBIN_BIN_ID;
const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`;

async function fetchData(): Promise<StorageData> {
  if (!JSONBIN_API_KEY || !JSONBIN_BIN_ID) {
    // Fallback for local development without JSONBin
    return {
      clicks: 0,
      leads: [],
      lastUpdated: new Date().toISOString()
    };
  }

  try {
    const response = await fetch(JSONBIN_URL, {
      headers: {
        'X-Access-Key': JSONBIN_API_KEY
      }
    });

    if (response.ok) {
      const data = await response.json();
      const record = data.record;
      
      // Fix data structure if leads is not an array
      if (!Array.isArray(record.leads)) {
        console.warn('Fixing leads data structure from object to array');
        record.leads = [];
      }
      
      return record;
    }
  } catch (error) {
    console.error('Error fetching from JSONBin:', error);
  }

  // Return empty data if fetch fails
  return {
    clicks: 0,
    leads: [],
    lastUpdated: new Date().toISOString()
  };
}

async function updateData(data: StorageData): Promise<boolean> {
  if (!JSONBIN_API_KEY || !JSONBIN_BIN_ID) {
    console.log('[LOCAL MODE] Data:', data);
    return true;
  }

  try {
    const response = await fetch(JSONBIN_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Key': JSONBIN_API_KEY
      },
      body: JSON.stringify(data)
    });

    return response.ok;
  } catch (error) {
    console.error('Error updating JSONBin:', error);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, productName, trackClickOnly } = body;
    
    // Fetch current data
    const data = await fetchData();
    
    // Track click
    data.clicks += 1;
    data.lastUpdated = new Date().toISOString();
    
    // If only tracking click (no email submission)
    if (trackClickOnly) {
      await updateData(data);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Click tracked',
        totalClicks: data.clicks 
      });
    }
    
    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // Check if email already exists
    const existingLead = data.leads.find(lead => lead.email === email);
    if (existingLead) {
      return NextResponse.json({ 
        success: true, 
        message: 'Email already registered',
        totalLeads: data.leads.length,
        totalClicks: data.clicks
      });
    }
    
    // Get request metadata
    const userAgent = req.headers.get('user-agent') || undefined;
    const referrer = req.headers.get('referer') || undefined;
    
    // Create lead entry
    const newLead: Lead = {
      email,
      productName,
      timestamp: new Date().toISOString(),
      userAgent,
      referrer
    };
    
    // Add new lead
    data.leads.push(newLead);
    
    // Save to JSONBin
    await updateData(data);
    
    // Log to console for monitoring
    console.log(`[LEAD CAPTURED] Email: ${email}, Product: ${productName || 'N/A'}, Total Leads: ${data.leads.length}, Total Clicks: ${data.clicks}`);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Lead captured successfully',
      totalLeads: data.leads.length,
      totalClicks: data.clicks
    });
    
  } catch (error) {
    console.error('[LEAD CAPTURE ERROR]', error);
    return NextResponse.json(
      { error: 'Failed to capture lead' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    // Simple auth check via query param
    const { searchParams } = new URL(req.url);
    const adminKey = searchParams.get('key');
    
    const expectedKey = process.env.ADMIN_ACCESS_KEY || 'casa-elaria-admin-2024';
    
    if (adminKey !== expectedKey) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const data = await fetchData();
    
    // Calculate conversion rate
    const conversionRate = data.clicks > 0 
      ? ((data.leads.length / data.clicks) * 100).toFixed(2) 
      : '0';
    
    return NextResponse.json({
      summary: {
        totalClicks: data.clicks,
        totalLeads: data.leads.length,
        conversionRate: `${conversionRate}%`,
        lastUpdated: data.lastUpdated
      },
      leads: data.leads.reverse() // Most recent first
    });
    
  } catch (error) {
    console.error('[LEAD RETRIEVAL ERROR]', error);
    return NextResponse.json(
      { error: 'Failed to retrieve leads' },
      { status: 500 }
    );
  }
}