module.exports = {
  log: function(str) {
    console.log('\x1b[33m%s\x1b[0m', str);
  },

  showRoutes: function (app) {
    this.log('----- Routes -----');
    app._router.stack.forEach((r) => {
      if (r.route && r.route.path){
        this.log(r.route.path)
      }
    });
  },

  getPageSet: function(data, curPage, pageSize) {
    var slicedPage = [];
    var page = parseInt(curPage);
    var count = parseInt(pageSize)
    var startIndex = page * count;
    var endIndex = startIndex + count;
    if (endIndex > data.length) {
      endIndex = data.length
    };
    for (var i = startIndex; i < endIndex; i++) {
      slicedPage.push(data[i]);
    }
    return {
      data: slicedPage,
      total: data.length
    };
  }
};
