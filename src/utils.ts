const log = (str: string) => {
  console.log('\x1b[33m%s\x1b[0m', str);
};

const showRoutes = (app: any) => {
  log('----- Routes -----');
  app._router.stack.forEach((r: any) => {
    if (r.route && r.route.path) {
      log(r.route.path);
    }
  });
};

const getPageSet = (data: any, curPage: any, pageSize: any) => {
  const slicedPage = [];
  const page = parseInt(curPage);
  const count = parseInt(pageSize);
  const startIndex = page * count;
  let endIndex = startIndex + count;
  if (endIndex > data.length) {
    endIndex = data.length;
  }
  for (let i = startIndex; i < endIndex; i++) {
    slicedPage.push(data[i]);
  }
  return {
    data: slicedPage,
    total: data.length
  };
};

export default { log, showRoutes, getPageSet };
