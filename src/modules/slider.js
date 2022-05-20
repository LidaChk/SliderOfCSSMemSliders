const root = document.documentElement;
const onResize = () => {
  root.style.setProperty(
    '--aspect-ratio',
    parseInt(window.innerWidth, 10) / parseInt(window.innerHeight, 10)
  );
};
window.addEventListener('resize', onResize);
window.addEventListener('pageshow', onResize);
