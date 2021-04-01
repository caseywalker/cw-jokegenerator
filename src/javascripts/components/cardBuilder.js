const cardBuilder = () => {
  document.querySelector('#joke-card').innerHTML = `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Joke Generator</h5>
    <div id="joke-setup"></div>
    <div id="joke-punchline"></div>
    <div id="get-joke-btn-container">
      <button type="button" class="btn btn-dark" id="get-joke-btn">GET A JOKE</button>
    </div>
    <div id="get-punchline-btn-container"></div>
    <div id="get-newjoke-btn-container"></div>
  </div>
</div>`;
};

export default cardBuilder;
