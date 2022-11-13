import '../style.css';
import 'flowbite';
import { clearDataFromStorage } from './utils/storage';
import createNavBar from './components/nav-bar';

createNavBar();
const logOutBtn = document.getElementById('logout-btn');

if (logOutBtn) {
  logOutBtn.addEventListener('click', () => {
    clearDataFromStorage();
    window.location.replace('/login.html');
  });
}
