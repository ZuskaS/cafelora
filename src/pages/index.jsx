import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/header.jsx';
import { Banner } from '../components/Banner/banner.jsx';
import { Menu } from '../components/Menu/menu.jsx';
import { Gallery } from '../components/Gallery/gallery.jsx';
import { Contact } from '../components/Contact/contact.jsx';
import { Footer } from '../components/Footer/footer.jsx';

document.querySelector('#root').innerHTML = render(
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
);

const navButton = document.querySelector('.nav-btn');
const navRollout = document.querySelector('.rollout-nav');

navButton.addEventListener('click', () => {
  navRollout.classList.toggle('nav-closed');
});

navRollout.addEventListener('click', (event) => {
  console.log(event.target);
  navRollout.classList.add('nav-closed');
});
