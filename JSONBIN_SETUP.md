# JSONBin Setup Instructions

## Initial Setup

1. **Create JSONBin Account**
   - Go to [JSONBin.io](https://jsonbin.io)
   - Sign up for a free account

2. **Get Your API Key**
   - Go to [API Keys](https://jsonbin.io/api-keys)
   - Create a new API key
   - Copy the key (starts with `$2a$10$...`)

3. **Create Your Bin**
   - Go to [Create Bin](https://jsonbin.io/app/bins)
   - Create a new bin with this initial data:
   ```json
   {
     "clicks": 0,
     "leads": [],
     "lastUpdated": "2025-01-01T00:00:00Z"
   }
   ```
   - Copy the Bin ID from the URL (looks like `6xxxxxxxxxxxxxxxxxxxxx`)

## Environment Variables

### Local Development (.env.local)
```bash
JSONBIN_API_KEY=your_actual_api_key_here
JSONBIN_BIN_ID=your_actual_bin_id_here
ADMIN_ACCESS_KEY=casa-elaria-admin-2024
```

### Netlify Deployment
1. Go to your Netlify dashboard
2. Site Settings → Environment Variables
3. Add the same variables:
   - `JSONBIN_API_KEY`
   - `JSONBIN_BIN_ID`
   - `ADMIN_ACCESS_KEY`

## Accessing Your Data

### View Dashboard
Visit: `https://your-site.netlify.app/api/capture-lead?key=casa-elaria-admin-2024`

You'll see:
- Total clicks (button clicks)
- Total leads (emails captured)
- Conversion rate
- List of all captured emails

### Direct JSONBin Access
- Login to JSONBin.io
- Go to your bins
- Click on your bin to view/edit data directly

## Testing Locally

1. Create `.env.local` file with your credentials
2. Run `pnpm dev`
3. Click any "Comprar" button
4. Submit an email
5. Check data at `http://localhost:3000/api/capture-lead?key=casa-elaria-admin-2024`

## Monitoring

- JSONBin free tier: 10,000 requests/month
- Each click = 2 requests (read + write)
- Each email submission = 2 requests (read + write)
- Viewing dashboard = 1 request (read only)

## Troubleshooting

If data isn't saving:
1. Check browser console for errors
2. Verify environment variables are set in Netlify
3. Check JSONBin dashboard for API usage/errors
4. Ensure bin has correct initial structure