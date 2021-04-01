// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js

import '../styles/main.scss';
import cardBuilder from './components/cardBuilder';
import domBuilder from './components/domBuilder';
import domEvents from './helpers/domEvents';

const init = () => {
  domBuilder();
  cardBuilder();
  domEvents();
};

init();
