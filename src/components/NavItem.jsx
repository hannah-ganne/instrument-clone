export default function NavItem({ href, label, className }) {
    return (
        <li className={className}>
            <a href={href} className="nav-item">{label}</a>
        </li>
    )
}