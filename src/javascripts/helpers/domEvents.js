import jokeSetup from '../components/jokeSetup';
import getJoke from '../data/jokeData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('get-joke-btn')) {
      getJoke().then((joke) => jokeSetup(joke));
    }

    if (e.target.id.includes('get-newjoke-btn')) {
      document.querySelector('#joke-setup').innerHTML = '';
      document.querySelector('#joke-punchline').innerHTML = '';
      document.querySelector('#get-newjoke-btn-container').innerHTML = '';
      getJoke().then((joke) => jokeSetup(joke));
    }
  });
};

export default domEvents;
