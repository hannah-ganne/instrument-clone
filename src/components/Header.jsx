import Nav from './Nav'
import NavItem from './NavItem'
import '../utils/styles/Header.css'
import { useEffect } from 'react'

export default function Header() {

    useEffect(() => {
        const body = document.body
        const scrollUp = "scroll-up"
        const scrollDown = "scroll-down"
        let lastScroll = 0;
        
        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 83) {
                body.classList.remove(scrollUp);

                return;
            }

            if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
              // down
                body.classList.remove(scrollUp);
                body.classList.add(scrollDown);

            } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
              // up
                body.classList.remove(scrollDown);
                body.classList.add(scrollUp);
            }

            lastScroll = currentScroll;
        });
    })

    return (
        <header className="header">
            <a href="#">
                <p>INSTRUMENT</p>
            </a>
            <Nav>
                <NavItem href="#" label="WHAT WE DO" />
                <NavItem href="#" label="WHO WE ARE" />
                <NavItem href="#" label="BEING HERE" />
                <NavItem href="#" label="CAREERS" />
            </Nav>
        </header>
    )
}