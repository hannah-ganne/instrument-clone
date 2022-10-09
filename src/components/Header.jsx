import Nav from './Nav'
import NavItem from './NavItem'
import '../utils/styles/Header.css'

export default function Header() {
    return (
        <header>
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