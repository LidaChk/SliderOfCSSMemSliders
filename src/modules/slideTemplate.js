const slideTemplate = `<input type="radio" name="point" id="slide--nSlide" class="input displaynone" --checked>
<div class="slide slide--nSlide"><iframe src="--linkSlide" width="100%"
    height="100%"  loading="lazy" frameborder="no"></iframe></div>
  <div class="desc desc--nSlide">
    <a href="--linkSlide" target="_blank">
      <span class="material-symbols-outlined">link</span> --goToSlide</a><div class="desc-text">--descSlide<h1></div>`;

export default slideTemplate;
