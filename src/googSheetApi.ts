import GoogSheetApi from 'goog-sheet-api';

const spreadsheetId = process.env.GOOG_SPREADSHEET_ID;
const credentials = {
  private_key: process.env.GCP_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.GCP_CLIENT_EMAIL
};

const GSheetApi = new GoogSheetApi(spreadsheetId, credentials, {
  skipFirstRow: true,
  sheets: {
    Sheet1: ['name', 'email', 'password'],
    Sheet2: [
      'id',
      'title',
      'desc',
      'url',
      'type',
      'imgUrl',
      'widerImgUrl',
      'category',
      'createdDate',
      'imdbID',
      'hidden',
      'parentId'
    ]
  }
});

export default GSheetApi;
