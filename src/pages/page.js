import Navbar from "../components/navbar";

const Page = (function() {
  return {
    render(pageName) {
      document.getElementById("content").innerHTML = Navbar.render(pageName);
    }
  };
})();

export default Page;
