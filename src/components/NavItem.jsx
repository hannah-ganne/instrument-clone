export default function NavItem({href, label}) {
    return (
        <li className="nav-item">
            <a href={href}>{label}</a>
        </li>
    )
}