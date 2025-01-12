import ScrollSuave from "./modules/scroll-suave.js";

const scrollSuave = new ScrollSuave('a[href^="#"]', { offset: 100 });
scrollSuave.init();