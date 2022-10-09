import '../utils/styles/Nav.css'

export default function Nav({ children, flexDir="" }) {
    return (
        <nav>
            <ul className={flexDir}>
                {children}
            </ul>
        </nav>
    )
}