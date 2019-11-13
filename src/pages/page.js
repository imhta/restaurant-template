import Navbar from "../components/navbar";
import HomePage from "./home";
import MenuPage from "./menu";
import ContactPage from "./contact";

const currentPage = (pageName) => {
  switch(pageName) {
    case "contact":
      return ContactPage()
    case "menu":
      return MenuPage()
    default:
      return HomePage()
  }
}
const Page = (function() {
  return {
    render(pageName) {
      document.getElementById("content").innerHTML = Navbar.render(pageName) + currentPage(pageName);
    }
  };
})();

export default Page;
