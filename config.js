module.exports = {
  port: process.env.PORT ? process.env.PORT : 3000,
  header: {
    // Website you wish to allow to connect
    "Access-Control-Allow-Origin": "*",
    // Request methods you wish to allow
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    // Request headers you wish to allow
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Pragma,Authorization,Cache-Control',
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    'Access-Control-Allow-Credentials': true
  }
};
