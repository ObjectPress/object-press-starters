import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      icon: "fa-github",
      name: "Github",
      url: "https://github.com/ObjectPress",
    },
    {
      icon: "fa-envelope-o",
      name: "Email",
      url: "mailto:hello@objectpress.io",
    },
  ];

  return (
    <footer id="footer">
      <ul className="icons">
        {socialLinks.map((social) => {
          return (
            <li key={social.url}>
              <a className={`icon ${social.icon}`} href={social.url}>
                <span className="label">{social.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        &copy; Fractals. Credits: <a href="http://html5up.net">HTML5 UP</a>
      </p>
    </footer>
  );
};

export default Footer;
