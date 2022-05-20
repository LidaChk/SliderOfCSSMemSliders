// AKfycbxBiTBY3xW9uqtExX505TXKtE0wWi98FX1h6vZ4qqlEOpw5IPRP194OGZOTTnyGAbI
// https://script.google.com/macros/s/AKfycbxBiTBY3xW9uqtExX505TXKtE0wWi98FX1h6vZ4qqlEOpw5IPRP194OGZOTTnyGAbI/exec

import slideTemplate from './slideTemplate';
import labelTemplate from './labelTemplate';

const ApiId =
  'AKfycbxBiTBY3xW9uqtExX505TXKtE0wWi98FX1h6vZ4qqlEOpw5IPRP194OGZOTTnyGAbI';
const app = `https://script.google.com/macros/s/${ApiId}/exec`;

function LabelOnClick(e) {
  const q = e.target.id.replace(/Slide/i, 'control');
  const el = document.querySelector(`.labels > label.${q}`);
  const old = document.querySelector('.labels > label.active');
  console.log(e.target.value, e.target.id);
  if (e.target.value === 'on') {
    if (old) old.classList.remove('active');
    if (el) el.classList.add('active');
  }

  return true;
}

export default function getList() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', app);
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) return;
    //    let output = '';
    if (xhr.status === 200) {
      const r = JSON.parse(xhr.responseText);
      const { result } = r;
      const chk = Math.floor(Math.random() * result.length);
      for (let i = 0; i < result.length; i += 1) {
        const obj = r.result[i];
        let label = labelTemplate;
        try {
          label = label.replace(/--nSlide/gm, i.toString());
          label = label.replace(
            /--linkSlide/gm,
            obj[0]
              .replace('http://', '')
              .replace('https://', '')
              .split(/[/.?#]/)[0]
          );
          label = label.replace(/--checked/gm, i === chk ? 'active' : '');
          document.querySelector('.labels').innerHTML += label;
        } catch (e) {
          // console.info(e.message);
        }
      }
      for (let i = 0; i < result.length; i += 1) {
        const obj = r.result[i];
        let slide = slideTemplate;
        try {
          slide = slide.replace(/--nSlide/gm, i.toString());
          slide = slide.replace(/--linkSlide/gm, obj[0]);
          slide = slide.replace(/--descSlide/gm, obj[1]);
          slide = slide.replace(/--goToSlide/gm, obj[0]);
          slide = slide.replace(/--checked/gm, i === chk ? 'checked' : '');
          document.querySelector('.wrapper').innerHTML += slide;
        } catch (e) {
          // console.info(e.message);
        }
      }
      document
        .querySelectorAll('input.input')
        .forEach((inp) => inp.addEventListener('change', LabelOnClick));
    }
  };
  xhr.send();
}

getList();
