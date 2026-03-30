function doGet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var result = [];
  for (var i = 1; i < data.length; i++) {
    result.push({
      id: data[i][0].toString(),
      password: data[i][1].toString(),
      url: data[i][2].toString()
    });
  }
  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}
