// Netlify background function — triggered automatically on every form submission
// Docs: https://docs.netlify.com/functions/trigger-on-events/
//
// This function:
// 1. Captures the submitter's IP address
// 2. Enriches the data with IP geolocation (free API)
// 3. Forwards everything to a webhook (Zapier/Make) for Google Sheets + notifications
//
// Set the FORM_WEBHOOK_URL environment variable in Netlify dashboard:
//   Site settings → Environment variables → Add: FORM_WEBHOOK_URL = your Zapier/Make webhook URL

const WEBHOOK_URL = process.env.FORM_WEBHOOK_URL;

exports.handler = async function (event) {
  try {
    const payload = JSON.parse(event.body).payload;

    // Extract IP from Netlify's submission event
    const ip = payload.data && payload.data.ip
      ? payload.data.ip
      : (event.headers['x-forwarded-for'] || event.headers['client-ip'] || 'unknown');

    // Attempt IP geolocation (free, no API key needed)
    let geo = {};
    try {
      const geoRes = await fetch('https://ipapi.co/' + ip + '/json/');
      if (geoRes.ok) {
        const geoData = await geoRes.json();
        geo = {
          city: geoData.city || '',
          region: geoData.region || '',
          country: geoData.country_name || '',
          org: geoData.org || '',
          latitude: geoData.latitude || '',
          longitude: geoData.longitude || '',
        };
      }
    } catch (e) {
      // Geo lookup failed — continue without it
      console.log('Geo lookup failed:', e.message);
    }

    // Build enriched record
    const record = {
      // Form fields
      name: payload.data.name || '',
      email: payload.data.email || '',
      company: payload.data.company || '',
      stage: payload.data.stage || '',
      pain_point: payload.data.pain_point || '',
      blind_date_mode: payload.data.blind_date_mode || '',

      // Enrichment from hidden fields
      submitted_at: payload.data.submitted_at || payload.created_at || '',
      page_url: payload.data.page_url || '',
      referrer: payload.data.referrer || '',
      utm_source: payload.data.utm_source || '',
      utm_medium: payload.data.utm_medium || '',
      utm_campaign: payload.data.utm_campaign || '',
      utm_term: payload.data.utm_term || '',
      utm_content: payload.data.utm_content || '',
      user_agent: payload.data.user_agent || '',
      screen_resolution: payload.data.screen_resolution || '',
      timezone: payload.data.timezone || '',
      language: payload.data.language || '',

      // IP + Geo enrichment (server-side)
      ip_address: ip,
      geo_city: geo.city || '',
      geo_region: geo.region || '',
      geo_country: geo.country || '',
      geo_org: geo.org || '',
      geo_latitude: geo.latitude || '',
      geo_longitude: geo.longitude || '',

      // Netlify metadata
      form_id: payload.form_id || '',
      form_name: payload.form_name || '',
      site_url: payload.site_url || '',
    };

    // Send to webhook (Zapier/Make) if configured
    if (WEBHOOK_URL) {
      const webhookRes = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
      });
      console.log('Webhook response:', webhookRes.status);
    } else {
      console.log('No FORM_WEBHOOK_URL set — skipping webhook. Record:', JSON.stringify(record));
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Submission processed', record }),
    };
  } catch (error) {
    console.error('Error processing submission:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
