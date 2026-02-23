/**
 * StartSuite CRM — Google Sheet Auto-Setup Script
 *
 * HOW TO USE:
 * 1. Open your Google Sheet (StartSuite CRM)
 * 2. Go to Extensions → Apps Script
 * 3. Delete everything in the editor
 * 4. Paste this entire script
 * 5. Click Run (▶) — it will ask for permissions, click Allow
 * 6. Done! Your sheet is formatted and ready.
 */

function setupCRM() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  sheet.setName('Leads');

  // Column headers
  var headers = [
    'Status', 'Name', 'Email', 'Company', 'Stage', 'Pain Point',
    'Blind Date Mode', 'Submitted At', 'Notes', 'Next Step', 'Follow Up Date',
    'City', 'Region', 'Country', 'Organization', 'Page URL', 'Referrer',
    'UTM Source', 'UTM Medium', 'UTM Campaign', 'UTM Term', 'UTM Content',
    'User Agent', 'Screen Resolution', 'Timezone', 'Language',
    'IP Address', 'Latitude', 'Longitude', 'Source Page', 'Form ID'
  ];

  // Set headers
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setValues([headers]);

  // Style header row
  headerRange.setFontWeight('bold');
  headerRange.setFontColor('#ffffff');
  headerRange.setBackground('#8B6DB5');
  headerRange.setFontSize(10);
  headerRange.setHorizontalAlignment('center');

  // Freeze header row
  sheet.setFrozenRows(1);

  // Set column widths
  var widths = {
    1: 120,   // Status
    2: 160,   // Name
    3: 220,   // Email
    4: 160,   // Company
    5: 120,   // Stage
    6: 200,   // Pain Point
    7: 100,   // Blind Date
    8: 170,   // Submitted At
    9: 250,   // Notes
    10: 180,  // Next Step
    11: 120,  // Follow Up Date
    12: 120,  // City
    13: 120,  // Region
    14: 100,  // Country
    15: 200,  // Organization
    16: 250,  // Page URL
    17: 200,  // Referrer
    18: 100,  // UTM Source
    19: 100,  // UTM Medium
    20: 120,  // UTM Campaign
    21: 100,  // UTM Term
    22: 100,  // UTM Content
    23: 100,  // User Agent (narrow, rarely checked)
    24: 100,  // Screen Res
    25: 140,  // Timezone
    26: 80,   // Language
    27: 120,  // IP
    28: 90,   // Lat
    29: 90,   // Long
    30: 120,  // Source Page
    31: 100   // Form ID
  };

  for (var col in widths) {
    sheet.setColumnWidth(parseInt(col), widths[col]);
  }

  // Status dropdown validation (Column A)
  var statusRule = SpreadsheetApp.newDataValidation()
    .requireValueInList([
      '🟣 New',
      '🔵 Contacted',
      '🟡 Call Booked',
      '🟢 Engaged',
      '⚪ Closed Won',
      '🔴 Closed Lost',
      '❄️ Nurture'
    ])
    .setAllowInvalid(false)
    .build();
  sheet.getRange('A2:A1000').setDataValidation(statusRule);

  // Date format for Submitted At (Column H)
  sheet.getRange('H2:H1000').setNumberFormat('yyyy-mm-dd hh:mm:ss');

  // Date format for Follow Up Date (Column K)
  sheet.getRange('K2:K1000').setNumberFormat('yyyy-mm-dd');

  // Conditional formatting for Status column
  var rules = sheet.getConditionalFormatRules();

  var statusColors = {
    '🟣 New': '#F3E8FF',
    '🔵 Contacted': '#DBEAFE',
    '🟡 Call Booked': '#FEF9C3',
    '🟢 Engaged': '#DCFCE7',
    '⚪ Closed Won': '#F0FDF4',
    '🔴 Closed Lost': '#FEE2E2',
    '❄️ Nurture': '#F0F9FF'
  };

  for (var status in statusColors) {
    var rule = SpreadsheetApp.newConditionalFormatRule()
      .whenTextEqualTo(status)
      .setBackground(statusColors[status])
      .setRanges([sheet.getRange('A2:A1000')])
      .build();
    rules.push(rule);
  }

  sheet.setConditionalFormatRules(rules);

  // Add filter
  sheet.getRange(1, 1, 1, headers.length).createFilter();

  // Group technical columns (W through AE) so they're collapsed by default
  // These are User Agent through Form ID — useful for debugging but not daily use
  sheet.getRange('W1:AE1').setFontColor('#999999');

  SpreadsheetApp.getActiveSpreadsheet().toast(
    'CRM setup complete! ' + headers.length + ' columns configured.',
    'StartSuite CRM ✓',
    5
  );
}
