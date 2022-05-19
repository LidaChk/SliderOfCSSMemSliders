// AKfycbwco5zX3AP6zWFZ0sanPivTrwcAfBPK1PCDCoHxXIzr5OuOgAv1GUCMGFinfILX1qA
// https://script.google.com/macros/s/AKfycbwco5zX3AP6zWFZ0sanPivTrwcAfBPK1PCDCoHxXIzr5OuOgAv1GUCMGFinfILX1qA/exec

import slideTemplate from './slideTemplate';
import labelTemplate from './labelTemplate';

export default function getList() {
  const app =
    'https://script.google.com/macros/s/AKfycbwco5zX3AP6zWFZ0sanPivTrwcAfBPK1PCDCoHxXIzr5OuOgAv1GUCMGFinfILX1qA/exec';

  const xhr = new XMLHttpRequest();
  xhr.open('GET', app);
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) return;
    //    let output = '';
    if (xhr.status === 200) {
      const r = JSON.parse(xhr.responseText);
      const { result } = r;
      for (let i = 0; i < result.length; i += 1) {
        const obj = r.result[i];
        let slide = slideTemplate;
        let label = labelTemplate;
        slide = slide.replace(/--nSlide/gm, i.toString());
        slide = slide.replace(/--linkSlide/gm, obj[0]);
        slide = slide.replace(/--descSlide/gm, obj[1]);
        slide = slide.replace(/--GoTo/gm, obj[0]);
        slide = slide.replace(/--checked/gm, i === 0 ? 'checked' : '');
        document.querySelector('.wrapper').innerHTML += slide;

        label = label.replace(/--nSlide/gm, i.toString());
        label = label.replace(/--linkSlide/gm, obj[0]);
        document.querySelector('.labels').innerHTML += label;
      }
    }
  };
  xhr.send();
}

getList();
