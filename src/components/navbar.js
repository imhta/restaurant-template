const generateTab = (name, selected) => {
    const className = `class="${selected === name ? 'selected' : ''}" `
    return `
    <li>
        <a ${className} data-role="tab" data-id="${name}" href="#!">
            ${name}
        </a>
    </li>`
}

const Navbar = (function() {
    const nav = (selected) => `
    <header>
        <nav>
            <a href="#!" class="brand-logo">foodbar</a>
            <ul>
                ${generateTab('home', selected)}
                ${generateTab('menu', selected)}
                ${generateTab('contact', selected)}
            </ul>
        </nav>
    </header>`
    return {
        render(selected) {
            return nav(selected)
        }
    }
})()

export default Navbar