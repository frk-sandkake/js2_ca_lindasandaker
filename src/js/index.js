import '../style.css';
import 'flowbite';
import clearDataFromStorage from './utils/clear-storage';
import createNavBar from './components/nav-bar';

createNavBar();
const logOutBtn = document.getElementById('logout-btn');

function logOutUser() {
  clearDataFromStorage();
  window.location.replace('/login.html');
}
if (logOutBtn) {
  logOutBtn.addEventListener('click', () => {
    logOutUser();
  });
}
