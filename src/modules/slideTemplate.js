const slideTemplate = `<input type="radio" name="point" id="slide--nSlide" class="input" --checked>
<div class="slide slide--nSlide"><iframe src="--linkSlide" width="100%"
    height="100%"  loading="lazy" frameborder="no"></iframe>
  <div class="desc desc--nSlide">
    <a href="--linkSlide" target="_blank">
      <span class="material-symbols-outlined">link</span>--goToSlide</a>--descSlide</div></div>`;

export default slideTemplate;
