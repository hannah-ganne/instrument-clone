import Nav from './Nav'
import NavItem from './NavItem'
import Button from './Button'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../utils/styles/Footer.css'

export default function Footer() {
    return (
        <>
            <div className="footer-sticky"></div>
            <footer>
                <div>
                    <Nav flexDir='column'>
                        <NavItem href="#" label="HOME" className="footer-nav" />
                        <NavItem href="#" label="WHAT WE DO" className="footer-nav" />
                        <NavItem href="#" label="WORK" className="footer-nav" />
                        <NavItem href="#" label="WHO WE ARE" className="footer-nav" />
                        <NavItem href="#" label="ARTICLES" className="footer-nav" />
                    </Nav>
                    <Nav flexDir='column'>
                        <NavItem href="#" label="BEING HERE" className="footer-nav" />
                        <NavItem href="#" label="CAREERS" className="footer-nav" />
                        <NavItem href="#" label="CONTACT" className="footer-nav" />
                        <NavItem href="#" label="PRIVACY" className="footer-nav" />
                    </Nav>
                </div>
                <div>
                    <Button label="NEWSLETTER" className="btn-footer" />
                    <div>
                        <InstagramIcon sx={{ marginRight: 5 }} />
                        <TwitterIcon sx={{ marginRight: 5 }} />
                        <LinkedInIcon />
                    </div>
                </div>
            </footer>
        </>
    )
}