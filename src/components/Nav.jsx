import '../utils/styles/Nav.css'

export default function Nav({ children }) {
    return (
        <nav>
            <ul>
                {children}
            </ul>
        </nav>
    )
}