import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/header.jsx';
import { Banner } from '../components/Banner/banner.jsx';
import { Menu } from '../components/Menu/menu.jsx';
import { Gallery } from '../components/Gallery/gallery.jsx';
import { Contact } from '../components/Contact/contact.jsx';
import { Footer } from '../components/Footer/footer.jsx';

/*document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);*/

const loadDrinks = async () => {
  const response = await fetch('http://localhost:4001/api/drinks');
  const data = await response.json();
  const drinks = data.data;
  console.log(drinks);
};

loadDrinks();

const loadPage = async () => {
  const response = await fetch('http://localhost:4002/api/drinks');
  const data = await response.json();
  const drinks = data.data;
  const page = (
    <div className="page">
      <Header />
      <main>
        <Banner />
        <Menu drinks={drinks} />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
  document.querySelector('#root').innerHTML = render(page);

  const eForms = document.querySelectorAll('.drink__controls');

  eForms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const id = event.target.dataset.id;
      const url = `http://localhost:4002/api/drinks/${id}`;
      const body = JSON.stringify([
        { op: 'replace', path: '/ordered', value: true },
      ]);

      fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          window.location.reload();
        });
    });
  });
  const navButton = document.querySelector('.nav-btn');
  const navRollout = document.querySelector('.rollout-nav');

  if (navButton && navRollout) {
    navButton.addEventListener('click', () => {
      navRollout.classList.toggle('nav-closed');
    });

    navRollout.addEventListener('click', (event) => {
      console.log(event.target);
      navRollout.classList.add('nav-closed');
    });
  }
};

loadPage();
