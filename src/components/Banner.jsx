import path from '../assets/images/path.avif'
import levis from '../assets/images/levis.avif'
import patagonia from '../assets/images/patagonia.avif'
import stumptown from '../assets/images/stumptown.avif'
import youtube from '../assets/images/youtube.avif'
import umpqua from '../assets/images/umpqua.avif'
import yeti from '../assets/images/yeti.avif'
import onemedical from '../assets/images/onemedical.avif'
import specialized from '../assets/images/specialized.avif'
import sonos from '../assets/images/sonos.avif'
import newknowledge from '../assets/images/new-knowledge.avif'
import google from '../assets/images/google.avif'
import nike from '../assets/images/nike.avif'
import mercycorps from '../assets/images/mercycorps.avif'
import intercom from '../assets/images/intercom.avif'
import gopro from '../assets/images/gopro.avif'
import linkedin from '../assets/images/linkedin.avif'
import dropbox from '../assets/images/dropbox-logo.avif'
import facebook from '../assets/images/facebook.avif'
import airbnb from '../assets/images/airbnb.avif'
import ebay from '../assets/images/ebay.avif'
import dwell from '../assets/images/dwell.avif'
import tumblr from '../assets/images/tumblr.avif'
import samsung from '../assets/images/samsung.avif'
import xbox from '../assets/images/xbox.avif'
import spotify from '../assets/images/spotify.avif'
import '../utils/styles/Banner.css'
import { useState, useEffect } from 'react'


export default function Banner({ gridColumnStart, gridColumnEnd }) {
    const style = { gridColumnStart: gridColumnStart, gridColumnEnd: gridColumnEnd }
    const logos = [path, levis, patagonia, stumptown, youtube, umpqua, yeti, onemedical, specialized]
    const logos2 = [sonos, newknowledge, google, nike, mercycorps, intercom, gopro, linkedin, dropbox]
    const logos3 = [facebook, airbnb, ebay, dwell, tumblr, samsung, xbox, spotify, levis]

    const [index, setIndex] = useState(0)
    const delay = 2000

    useEffect(() => {
        setTimeout(
            () =>
                setIndex((prevIndex) =>
                prevIndex === logos.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );
    
        return () => {};
    }, [index]);


    return (
        <div className="banner" style={style}>
            <div className="slider">
                <img src={logos[index]} className="logo" alt={`logo of client`} />
            </div>
            <div className="slider">
                <img src={logos2[index]} className="logo" alt={`logo of client`} />
            </div>
            <div className="slider">
                <img src={logos3[index]} className="logo" alt={`logo of client`} />
            </div>
        </div>
    )
}