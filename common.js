const navBar = React.createElement("nav", null,
    React.createElement("ul", null,
        React.createElement("li", null, React.createElement("a", { href: "home.html" }, "| Home |")),
        React.createElement("li", null, React.createElement("a", { href: "aboutMe.html" }, "  | About Me |")),
        React.createElement("li", null, React.createElement("a", { href: "projects.html" }, "  | Projects |")),
        React.createElement("li", null, React.createElement("a", { href: "services.html" }, "  | Services |")),
        React.createElement("li", null, React.createElement("a", { href: "contactMe.html" }, "  | Contact Me |"))
    ));

const logo = React.createElement("div", { className: "logo" },
    React.createElement("img", { src: "Images/logoAngelica2.png", alt: "Your Logo", style: {width: '160px', marginLeft: '40px'}}));
const header = React.createElement("header", null,logo, navBar);

