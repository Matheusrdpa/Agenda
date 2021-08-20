import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';

import Contato from './modules/Contato';

const edita = new Contato('.form-edita');
const contato = new Contato('.form-contato') ;

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');

edita.init();
contato.init();
login.init();
cadastro.init();

// import './assets/css/style.css';