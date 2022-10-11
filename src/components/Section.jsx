import "../utils/styles/Section.css"
import { useRef, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Section({ children }) {
    const { ref: containerRef, inView: isVisible } = useInView({
        threshold: 0.3
    }) 

    return (
        <section ref={containerRef} className={isVisible? 'fade-in' : ''}>
            {children}
        </section>
    )
}