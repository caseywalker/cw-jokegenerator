const jokeSetup = (joke) => {
  document.querySelector('#joke-setup').innerHTML = `${joke.setup}`;
  document.querySelector('#get-joke-btn-container').innerHTML = '';
  document.querySelector('#get-punchline-btn-container').innerHTML = '<button type="button" class="btn btn-dark" id="get-punchline-btn">GET PUNCHLINE</button>';
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('get-punchline-btn')) {
      document.querySelector('#joke-punchline').innerHTML = `${joke.punchline}`;
      document.querySelector('#get-punchline-btn-container').innerHTML = '';
      document.querySelector('#get-newjoke-btn-container').innerHTML = '<button type="button" class="btn btn-dark" id="get-newjoke-btn">GET A NEW JOKE</button>';
    }
  });
};

export default jokeSetup;
