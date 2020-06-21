function makeSingleTon(Page, ...args) {
  // console.log(...args, Page)
  // if(Page.__instance) {
  //   return Page.__instance;
  // }
  const page = new Page(...args);

  Page.__instance = page;
  return Page.__instance;
}

module.exports = {
  makeSingleTon
}