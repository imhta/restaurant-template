import Navbar from "../components/navbar";

class Page {
    render() {
        document.getElementById('content').innerHTML = Navbar.render('home')
    }
}

export default Page