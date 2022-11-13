import { getUserNameStorage } from '../utils/storage';

function createNavBar() {
  const { pathname } = document.location;
  const navBar = document.getElementById('nav-bar');

  if (navBar) {
    const userName = getUserNameStorage();
    let navLinks;
    navLinks = `
          <li role="menuitem">
              <a role="link" href="/signup.html" class="${
  pathname === '/signup.html'
    ? 'p-2 rounded font-semibold text-lg shadow-lg text-orange-400'
    : 'font-semibold text-orange-50 hover:text-orange-400'
}">
                    LOGO
              </a>
          </li>
          <li role="menuitem">
              <a role="link" href="/signup.html" class="${
  pathname === '/signup.html'
    ? 'p-2 rounded font-semibold text-lg shadow-lg text-orange-400'
    : 'font-semibold text-orange-50 hover:text-orange-400'
}">
                    SignUp
              </a>
          </li>
          <li role="menuitem">
              <a role="link" href="/login.html" class="${
  pathname === '/login.html'
    ? 'p-2 rounded font-semibold text-lg shadow-lg text-orange-400'
    : 'font-semibold text-orange-50 hover:text-orange-400'
}">
                    LogIn
              </a>
          </li>
          `;
    if (userName) {
      navLinks = `
          <li role="menuitem">
              <a role="link" href="/index.html" class="${
  pathname === '/index.html'
    ? 'p-2 rounded font-semibold text-lg shadow-lg text-orange-400'
    : 'font-semibold text-orange-50 hover:text-orange-400'
}">
                    Home
              </a>
          </li>
          <li role="menuitem">
              <a role="link" href="/profile.html" class="${
  pathname === '/profile.html'
    ? 'p-2 rounded font-semibold text-lg shadow-lg text-orange-400'
    : 'font-semibold text-orange-50 hover:text-orange-400'
}">
                   ${userName}
              </a>
          </li>
          <li role="menuitem">
              <button id="logout-btn" class="font-semibold text-orange-50 hover:text-orange-400">
                    LogOut
              </button>
          </li>
          `;
    }
    navBar.innerHTML = `
      <ul role="menu" class="w-full flex flex-row justify-evenly items-center">
           ${navLinks}
      </ul>
      `;
  }
}

export default createNavBar;
