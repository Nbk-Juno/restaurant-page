import _ from 'lodash';
import sushiImg from './sushi.png';
import loadContact from './contact.js';
import loadMenu from './menu.js';

window.addEventListener('load', loadHome);


// function to create a navbar module
function createNav() {
  const nav = document.createElement('nav');

  const homeButton = document.createElement('button');
  homeButton.classList.add('button-nav');
  homeButton.textContent = 'Home';
  homeButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(homeButton);
    loadHome();
  });

  const menuButton = document.createElement('button');
  menuButton.classList.add('button-nav');
  menuButton.textContent = 'Menu';
  menuButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(menuButton);
    loadMenu();
  });

  const contactButton = document.createElement('button');
  contactButton.classList.add('button-nav');
  contactButton.textContent = 'Contact';
  contactButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(contactButton);
    loadContact();
  });


  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll('.button-nav');

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  });

  button.classList.add('active');
}

// function to create a div with the class header and attach h1 and navbar to it.
function Header() {
  const header = document.createElement('header');
  header.classList.add('header');

  const restaurantName = document.createElement('h1');
  restaurantName.classList.add('restaurant-name');
  restaurantName.textContent = 'Sapporo Sushi';

  header.appendChild(restaurantName);
  header.appendChild(createNav());

  return header;
}


// function to create a home page, creates a home div with img and copy as child divs
function createHome() {
  const home = document.createElement('div')
  home.classList.add('home')

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('image')
  const img = document.createElement('img');
  img.classList.add('home-image');
  img.src = sushiImg;
  img.alt = 'sushi';
  imgContainer.appendChild(img);
  
  const copyContainer = document.createElement('div');
  const copy = document.createElement('p');
  copy.textContent =
    "Sapporo Sushi offers a sophisticated and stylish dining experience that's perfect for any occasion. From sushi rolls to sashimi, the menu at Sapporo Sushi features a variety of fresh and delicious dishes that are prepared with the finest ingredients. Whether you're looking for a romantic dinner for two or a group gathering with friends, Sapporo Sushi is the perfect destination to satisfy your cravings for delectable Japanese food. Come and experience the flavors of Japan at Sapporo Sushi!";

  copyContainer.appendChild(copy);

  home.appendChild(imgContainer);
  home.appendChild(copyContainer);

  return home;
}

function loadHome() {
  const content = document.querySelector('#content');
  content.innerHTML = '';
  content.appendChild(createHome());
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const copyright = document.createElement('p');
  copyright.textContent = `Copyright © ${new Date().getFullYear()} Nbk_Juno`;

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/Juno-png';

  const githubIcon = document.createElement('i');
  githubIcon.classList.add('fa-brands', 'fa-github');


  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer;
}

document.body.insertBefore(Header(), content);
document.body.insertAdjacentElement('beforeend', createFooter());