function initSingleton(ClassPage) {
  if (ClassPage._instance) {
    return ClassPage._instance;
  }
  const page = new ClassPage();
  ClassPage._instance = page;
  return ClassPage._instance;
}

export {
  initSingleton
}