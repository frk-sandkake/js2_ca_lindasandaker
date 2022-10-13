import {getUserName} from '../utils/storage'

function createNavBar() {
  const {pathname} = document.location;
  const navBar = document.getElementById('nav-bar');

  if (navBar) {
      const userName = getUserName();
      let navLinks;
      navLinks = `
          <li role="menuitem">
              <a role="link" href="/signup.html" class="${pathname === "/signup.html" ? "p-2 rounded font-semibold text-lg shadow-lg text-orange-50" : "font-semibold text-orange-50 hover:text-orange-400"}">
                    LOGO
              </a>
          </li>
          <li role="menuitem">
              <a role="link" href="/signup.html" class="${pathname === "/signup.html" ? "p-2 rounded font-semibold text-lg shadow-lg text-orange-50" : "font-semibold text-orange-50 hover:text-orange-400"}">
                    SignUp
              </a>
          </li>
          <li role="menuitem">
              <a role="link" href="/login.html" class="${pathname === "/login.html" ? "p-2 rounded font-semibold text-lg shadow-lg text-orange-50" : "font-semibold text-orange-50 hover:text-orange-400"}">
                    LogIn
              </a>
          </li>
          `;
      if (userName) {
          navLinks = `
          <li role="menuitem">
              <a role="link" href="/index.html" class="${pathname === "/index.html" ? "p-2 rounded font-semibold text-lg shadow-lg text-orange-50" : "font-semibold text-orange-50 hover:text-orange-400"}">
                    LOGO
              </a>
          </li>
          <li><span class="font-semibold text-orange-50 hover:text-orange-400">${userName}</span></li>
          <li>
              <button id="logout-btn" class="font-semibold text-orange-50 hover:text-orange-400">
                    LogOut
              </button>
          </li>
          `;

      }
      navBar.innerHTML = `
      <ul role="menu" class="flex flex-row justify-evenly content-center">
           ${navLinks}
      </ul>
      `
  }
}

export default createNavBar;