import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Section from './components/Section'
import ceo from './assets/images/ceo.avif'
import Button from './components/Button'
import workplace from './assets/images/best-workplace.avif'
import phone from './assets/images/phone.avif'
import eames from './assets/images/eames.avif'
import dropbox from './assets/images/dropbox.avif'
import ImageTextVertical from './components/ImageTextVertical'
import Banner from './components/Banner'

function App() {
    return (
        <>
            <Header />
            <Main>
                <Section>
                    <div className="video-container" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                        <iframe src="https://player.vimeo.com/video/428281636?h=be0963aaa9&controls=0&oop=1&background=1&app_id=122963" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen="" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} title="Instrument 2021 Reel (Updated Aug 21)" data-ready="true"></iframe>
                    </div>
                </Section>
                <Section>
                    <h1 className="text-center">We enrich human lives through the thoughtful application of design and technology</h1>
                </Section>
                <Section>
                    <img src={ceo} className="img-left" alt="picture of Kara Place next CEO" />
                    <div className="text-btn-container text-right">
                        <h3>It is with great excitement that we announce Kara Place as Instrument's next CEO.</h3>
                        <Button label="Read More" className="btn" />
                    </div>
                </Section>
                <Section>
                    <div className="text-btn-container text-left">
                        <h3>We're proud to be recognized as a Best Workplace for Women Innovators by Fast Company.</h3>
                        <Button label="Learn More" className="btn" />
                    </div>
                    <img src={workplace} className="img-right" alt="picture of the best workplace recognition" />
                </Section>
                <Section>
                    <img src={phone} className="img-left" alt="picture of a hand holding a mobile phone" />
                    <div className="text-btn-container text-right">
                        <h3>As a full-service partner to the world's most ambitious companies, we create transformational change through best-in-class digital products and communications</h3>
                        <Button label="What we do" className="btn" />
                    </div>
                </Section>
                <Section>
                    <div className="text-btn-container text-center-sm">
                        <h2>Explore a few of our most impactful projects</h2>
                        <Button label="Our work" className="btn center" />
                    </div>
                </Section>
                <Section>
                    <ImageTextVertical gridColumnStart="2" gridColumnEnd="span 11">
                        <img src={eames} alt="logo of eames institute" />
                        <h4>Eames Institute</h4>
                        <p>
                            Ray and Charles Eames laid the foundation for modern design and created work that has transcended time. With an aspiration to bring the Eameses’ timeless methodologies to a modern audience, the Eames Institute enlisted Instrument to co-create a digital platform to unveil their vast collection to the world.
                        </p>
                    </ImageTextVertical>
                    <ImageTextVertical gridColumnStart="14" gridColumnEnd="span 11">
                        <img src={dropbox} alt="photo of man standing on his head" />
                        <h4>Dropbox "For All Things Worth Saving"</h4>
                        <p>
                            To evolve and mature how Dropbox engages with their customers, we developed a multi-year brand platform as well as launched its first campaign titled 'For All Things Worth Saving' — an ecosystem of branded experiences aimed to remind people of the inherent value of their digital files.
                        </p>
                    </ImageTextVertical>
                </Section>
                <Section>
                    <Banner gridColumnStart="6" gridColumnEnd="span 15" />
                </Section>
            </Main>
            <Footer />
        </>
    )
}

export default App;
