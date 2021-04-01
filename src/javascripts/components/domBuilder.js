const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="main-container d-flex justify-content-center">
    <div id="joke-card"></div>
  </div>`;
};

export default domBuilder;
