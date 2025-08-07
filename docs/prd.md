### **Context & Reasoning — what matters for the build**

  

We’re shipping a **“fake-door” e-commerce site** for Casa Elaria to validate demand. Only three products, one checkout pop-up, a lead form, Airtable storage, and a thank-you email have to work. Everything else (inventory, payments, account system) is façade. Pages must load fast, feel premium, and match the olive-based, sensorial brand vibe.

---

## **1. Purpose**

  

Launch a believable storefront in **< 3 weeks** to measure interest (email sign-ups) and ad-funnel metrics before committing to a full e-commerce rollout.

We will build the basic functionality in phase 1, and in phase 2 we will handle the lead capture and email.

---

## **2. Success Criteria (go / no-go for real build)**

|**Metric**|**Target**|
|---|---|
|Email capture rate on product pop-up|≥ 1 % of unique visitors|
|Test duration|20 days of paid traffic (@ ARS $5 000 / day, BA-only)|
|Cost per lead|≤ margin targets in conversion doc|

---

## **3. Tech Stack / Runtime**

|**Layer**|**Choice**|**Notes**|
|---|---|---|
|Front-end|**Next.js 14** + **Tailwind CSS**|App Router, static export ok|
|Data store|**Airtable REST API**|Base: CasaElariaLeads, Table: Leads|
|Email|**Resend**|Transactional (thank-you)|
|Hosting|Vercel (preview + prod)||
|Analytics|Plausible or GA4|Basic page + event tracking|

---

## **4. Navigation (ES)**

  

Inicio | Productos | Quiénes Somos | Contacto

---

## **5. Pages & Components**

|**Route**|**Purpose**|**Key Elements**|
|---|---|---|
|/ (Inicio)|Brand hook|Hero, USP bullets, CTA to Productos|
|/productos|Grid of 3 items|Card: photo, name, price, “Comprar” btn|
|/productos/[slug]|Product detail|Carousel, ingredients, benefits, “Comprar”|
|/quienes-somos|Brand story|Copy blocks from brief|
|/contacto|Simple form (name, email, msg) -> Airtable||

**Common UI**

- Header with nav, sticky on scroll
    
- Footer with social placeholders, legal links
    
- Toast system (success / error)
    

---

## **6. Fake-Door Checkout Flow**

1. User clicks **Comprar** (from grid or PDP).
    
2. **Modal** opens:
    
    - Copy: “Muchas gracias por confiar en nosotros. Este producto pronto estará disponible. Dejanos tu e-mail para contarte cuando esté disponible.”
        
    - Fields: email (required).
        
    
3. On submit:
    
    - POST to Airtable (product, email, utm, timestamp).
        
    - Trigger Resend email: **Subject** “¡Gracias por tu interés en Casa Elaria!” Template ID prelaunch-confirm.
        
    - Close modal, show success toast.
        
    
4. Track lead_created event for analytics.
    

---

## **7. Airtable Schema**

|**Field**|**Type**|**Example**|
|---|---|---|
|id|Auto-number|1|
|email|Single line|ana@example.com|
|product|Single select|JABON_LIQUIDO / SHOWER_OIL / JABON_BARRA|
|utm_source|Single line|facebook_ads|
|utm_campaign|Single line|launch_test|
|timestamp|Created time|2025-08-06T17:45-03|

---

## **8. Email (Resend)**

- **API key** in RESEND_API_KEY.
    
- Template variables: product_name, first_name?, waitlist_link.
    
- Rate limit: 1 email / address / 24 h (basic cache OK).
    

---

## **9. Design Guard-rails**

- **Look & feel**: premium, botanical, olive-green accents (final palette to come).
    
- **Fonts**: elegant serif for headings, clean sans for body.
    
- **Imagery**: use supplied product photos + lifestyle placeholders until final shoot.
    
- Responsive: 2-col grid ≥ lg, 1-col stack on mobile.
    
- Accessibility: color contrast ≥ WCAG AA, alt text on all imgs.
    

---

## **10. Core Copy (ready to drop in)**

- Brand story blocks → _Quiénes Somos_ (provided).
    
- Product blurbs → pull from Tienda Nube link.
    
- Gift tagline → “Regalá consciencia, belleza y cuidado.”
    

---

## **11. Events to Track**

|**Event**|**Trigger**|
|---|---|
|view_product|PDP load|
|click_buy|Comprar btn click|
|lead_created|Airtable success|
|nav_click|Header link click|

---

## **12. Environment Vars**

```
AIRTABLE_BASE_ID=
AIRTABLE_API_KEY=
AIRTABLE_TABLE=Leads
RESEND_API_KEY=
RESEND_TEMPLATE_ID=prelaunch-confirm
NEXT_PUBLIC_ANALYTICS_ID=
```

---

## **14. Out of Scope**

- Real payments / inventory.
    
- User accounts / order history.
    
- CMS; copy changes via code this phase.
    

---

## **15. Site Design Inspiration**

**Love**:
1. https://www.lotodelsur.com/cl/es/
2. https://ar.loccitane.com/
3. https://www.ortigiasicilia.com/en?___store=en&___from_store=en

**Avoid**:
1. http://www.ruhnatural.com/
2. https://thecandleshop.com.ar/

### **Handoff Checklist**

- Figma/brand assets in /public
    
- Env vars in Vercel
    
- Airtable base created & keys shared
    
- Resend template live
    
