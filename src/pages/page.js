/* eslint-disable func-names */
import Navbar from '../components/navbar';
import HomePage from './home';
import MenuPage from './menu';
import ContactPage from './contact';

const MENU = MenuPage();
const CONTACT = ContactPage();
const HOME = HomePage();
const currentPage = (pageName) => {
  switch (pageName) {
    case 'contact':
      return CONTACT;
    case 'menu':
      return MENU;
    default:
      return HOME;
  }
};
const Page = (function () {
  return {
    render(pageName) {
      document.getElementById('content').innerHTML = Navbar.render(pageName) + currentPage(pageName);
    },
  };
}());

export default Page;
