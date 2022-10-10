import '../utils/styles/ImageTextVertical.css'

export default function ImageTextVertical({ children, gridColumnStart, gridColumnEnd }) {
    const style = { gridColumnStart: gridColumnStart, gridColumnEnd: gridColumnEnd }

    return (
        <div className="vertical-container" style={style}>
            {children}
        </div>
    )
}