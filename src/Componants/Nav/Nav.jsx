import { useState, useEffect, useRef } from "react";
import "./Nav.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="logo">Laith</div>

     <ul ref={menuRef} className={`nav-links ${isOpen ? "active" : ""}`}>
  <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
  <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
  <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
  <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
  <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
  <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
</ul>


      <div className="burger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Nav;
