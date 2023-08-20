function main() {

// enter your sheet url & the campaign ID below
 let sheetUrl = ''; // enter sheet URL between the quotes
 let campaignId = ''; // enter pmax campaign ID between quotes

// don't touch code below this line

 let ss = SpreadsheetApp.openByUrl(sheetUrl);

 let query = AdsApp.report(
  `
  SELECT
   campaign_search_term_insight.category_label,
   metrics.clicks,
   metrics.impressions,
   metrics.conversions,
   metrics.conversions_value
  FROM campaign_search_term_insight
  WHERE
   segments.date DURING LAST_30_DAYS
   AND campaign_search_term_insight.campaign_id = '${campaignId}'
  ORDER BY metrics.conversions
  `
 );

 query.exportToSheet(ss.getSheetByName('Sheet1'));

} // end main