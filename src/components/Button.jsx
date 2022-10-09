import '../utils/styles/Button.css'

export default function Button({ label, className}) {
    return (
        <button className={className}>{label}</button>
    )
}