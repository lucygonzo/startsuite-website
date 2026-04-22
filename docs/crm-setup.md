# StartSuite CRM - Google Sheets Setup Guide

## Step 1: Create the Google Sheet

1. Go to [Google Drive](https://drive.google.com)
2. Create a folder called **StartSuite**
3. Inside that folder, create a new Google Sheet called **StartSuite CRM**
4. Rename the first tab to **Leads**

## Step 2: Add Column Headers

Copy these exact headers into Row 1 (A1 through AE1):

| Col | Header | Description |
|-----|--------|-------------|
| A | Status | Your pipeline stage (manually updated) |
| B | Name | From form |
| C | Email | From form |
| D | Company | From form |
| E | Stage | Pre-seed / Seed / Series A prep / Post-funding / Other |
| F | Pain Point | Their biggest creative headache |
| G | Blind Date Mode | on/off - did they skip the questions? |
| H | Submitted At | ISO timestamp of submission |
| I | Notes | Your notes after the call (manually entered) |
| J | Next Step | What happens next (manually entered) |
| K | Follow Up Date | When to follow up (manually entered) |
| L | City | Auto from IP geolocation |
| M | Region | State/province from IP |
| N | Country | Country from IP |
| O | Organization | ISP/company from IP (often reveals employer) |
| P | Page URL | Which page they submitted from |
| Q | Referrer | Where they came from before your site |
| R | UTM Source | e.g. google, linkedin, twitter |
| S | UTM Medium | e.g. cpc, organic, social |
| T | UTM Campaign | Your campaign name |
| U | UTM Term | Paid search keyword |
| V | UTM Content | Ad variation |
| W | User Agent | Browser + OS info |
| X | Screen Resolution | e.g. 1920x1080 |
| Y | Timezone | e.g. America/New_York |
| Z | Language | Browser language e.g. en-US |
| AA | IP Address | Submitter's IP |
| AB | Latitude | Geo coordinate |
| AC | Longitude | Geo coordinate |
| AD | Source Page | Which page (Home/Services/Partners/About) |
| AE | Form ID | Netlify internal reference |

## Step 3: Format the Sheet

1. **Freeze Row 1** (View → Freeze → 1 row)
2. **Bold Row 1** and give it a background color (dark purple #8B6DB5, white text)
3. **Column A (Status)** - set up Data Validation with dropdown:
   - 🟣 New
   - 🔵 Contacted
   - 🟡 Call Booked
   - 🟢 Engaged
   - ⚪ Closed Won
   - 🔴 Closed Lost
   - ❄️ Nurture
4. **Column H (Submitted At)** - format as Date/Time
5. **Column K (Follow Up Date)** - format as Date
6. **Auto-sort**: most recent leads at the top (sort by Column H descending)

## Step 4: Set Up Zapier

1. Go to [zapier.com](https://zapier.com) and create an account (free tier works)
2. Create a new Zap:

### Trigger:
- App: **Webhooks by Zapier**
- Event: **Catch Hook**
- Copy the webhook URL it gives you

### Action 1: Google Sheets
- App: **Google Sheets**
- Event: **Create Spreadsheet Row**
- Account: Connect your Google account
- Spreadsheet: **StartSuite CRM**
- Worksheet: **Leads**
- Map fields:
  | Sheet Column | Zapier Field |
  |-------------|--------------|
  | Status | (leave blank - defaults to empty, you'll set manually) |
  | Name | name |
  | Email | email |
  | Company | company |
  | Stage | stage |
  | Pain Point | pain_point |
  | Blind Date Mode | blind_date_mode |
  | Submitted At | submitted_at |
  | City | geo_city |
  | Region | geo_region |
  | Country | geo_country |
  | Organization | geo_org |
  | Page URL | page_url |
  | Referrer | referrer |
  | UTM Source | utm_source |
  | UTM Medium | utm_medium |
  | UTM Campaign | utm_campaign |
  | UTM Term | utm_term |
  | UTM Content | utm_content |
  | User Agent | user_agent |
  | Screen Resolution | screen_resolution |
  | Timezone | timezone |
  | Language | language |
  | IP Address | ip_address |
  | Latitude | geo_latitude |
  | Longitude | geo_longitude |
  | Form ID | form_id |

### Action 2: Email Notification
- App: **Email by Zapier** (or Gmail)
- To: your email, Reagan's email (comma separated)
- Subject: `🟣 New StartSuite Lead: {{name}} @ {{company}}`
- Body:
  ```
  New lead from start-suite.com!

  Name: {{name}}
  Email: {{email}}
  Company: {{company}}
  Stage: {{stage}}
  Pain Point: {{pain_point}}
  Blind Date: {{blind_date_mode}}

  Location: {{geo_city}}, {{geo_region}}, {{geo_country}}
  Org (from IP): {{geo_org}}

  Source: {{utm_source}} / {{utm_medium}} / {{utm_campaign}}
  Referrer: {{referrer}}
  Page: {{page_url}}

  Submitted: {{submitted_at}}
  ```

### Action 3: SMS Notification (optional)
- App: **SMS by Zapier** (free, US numbers only) or **Twilio**
- To: your phone number (one action per number)
- Message: `🟣 New lead: {{name}} @ {{company}} - {{pain_point}} - {{email}}`
- Duplicate this action for Reagan's number

## Step 5: Add Webhook URL to Netlify

1. Go to [Netlify dashboard](https://app.netlify.com) → your site
2. **Site settings** → **Environment variables**
3. Add new variable:
   - Key: `FORM_WEBHOOK_URL`
   - Value: paste your Zapier webhook URL
4. **Deploys** → **Trigger deploy** → **Deploy site** (to pick up the new env var)

## Step 6: Test It

1. Go to your live site
2. Click "Book Intro" to open the modal
3. Fill in test data and submit
4. Check:
   - ✅ Netlify Forms dashboard shows the submission
   - ✅ Google Sheet has a new row with all fields populated
   - ✅ You and Reagan got the email notification
   - ✅ SMS arrived (if configured)

## Notes

- Netlify Forms stores all submissions as backup (even if Zapier fails)
- Free Zapier tier: 100 tasks/month (plenty for early stage)
- The IP geolocation "Organization" field often reveals the company name even if they didn't fill in the Company field
- UTM tracking works automatically - just use tagged links in your campaigns:
  `https://start-suite.com?utm_source=linkedin&utm_medium=social&utm_campaign=launch`
