import React, { useEffect, Suspense } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { Container, Row, Col, Card } from 'react-bootstrap';
import classnames from "classnames";
import Link from "@docusaurus/Link";
import styles from "../css/index.module.css";
import axios from 'axios';

import Particles from "react-tsparticles";
import AOS from "aos";
import "aos/dist/aos.css";

const fallback = <canvas style={{
    height: "800px",
    width: "100vh",
    maxHeight: "800px",
    position: "fixed",
    transform: `translateY(60px)`,
    top: 0,
    zIndex: -10
}} />;

const debounce = (fn) => {
    let frame: number;
    return (...params) => {
        if (frame) {
            cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
            fn(...params);
        });
    }
};

const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY.toString();
}

class App extends React.Component {
    private contactRef: React.RefObject<HTMLInputElement>;
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
        this.contactRef = React.createRef()  
    }

    executeScroll = () => this.contactRef.current.scrollIntoView({behavior: "auto", block: "center", inline: "nearest"});

    componentDidMount() {

        document.addEventListener('scroll', debounce(storeScroll), { passive: true });

        // Update scroll position for first time
        storeScroll();
        document.documentElement.dataset.isindex = "1";
        AOS.init();
    }

    componentWillUnmount() {
        document.documentElement.dataset.isindex = "0";
    }


    setNav(): void {
        var x = document.getElementsByClassName("navbar");
        var navbar = x[0] as HTMLElement;

        if (navbar && (window.location.pathname == "/" || window.location.pathname == "")) {
            if (window.scrollY <= 50) {
                if (!navbar.classList.contains("navTransparent")) navbar.classList.add("navTransparent");
            } else {
                navbar.classList.remove("navTransparent");
            }
        }
    }

    render() {
        return (
            <Layout
                title={"Protop Solutions"}
                description="Professional Technology for Ordinary People">
                
                <div className={styles.particlesBackground}>
                             <Particles
                                    className={classnames(styles.particles)}
                                    id="tsparticles"
                                    options={{
                                        fullScreen: {
                                            enable: false,
                                        },
                                        fpsLimit: 60,     
                                        interactivity: {
                                            events: {
                                                onClick: {
                                                    enable: false,
                                                    mode: "push",
                                                },
                                                onHover: {
                                                    enable: true,
                                                    mode: "bubble",
                                                },
                                                resize: true,
                                            },
                                            modes: {
                                                bubble: {
                                                    distance: 100,
                                                    duration: 2,
                                                    opacity: 0.8,
                                                    size: 10,
                                                },
                                                push: {
                                                    quantity: 4,
                                                },
                                                repulse: {
                                                    distance: 200,
                                                    duration: 0.4,
                                                },
                                            },
                                        },
                                        particles: {
                                            color: {
                                                value: "#ffffff",
                                            },
                                            links: {
                                                color: "#ffffff",
                                                distance: 50,
                                                enable: false,
                                                opacity: 0.1,
                                                width: 1,
                                            },
                                            collisions: {
                                                enable: false,
                                            },
                                            move: {
                                                direction: "none",
                                                enable: true,
                                                outMode: "bounce",
                                                random: false,
                                                speed: 1,
                                                straight: false,
                                            },
                                            number: {
                                                density: {
                                                    enable: true,
                                                    area: 800,
                                                },
                                                value: 15,
                                            },
                                            opacity: {
                                                value: 0.5,
                                            },
                                            shape: {
                                                type: "circle",
                                            },
                                            size: {
                                                random: true,
                                                value: 5,
                                            },
                                        },
                                        detectRetina: true,
                                    }}
                                />
                        </div>

                <header className={classnames("hero", styles.heroBanner)}>
                    <Container>
                        <div className={styles.promoSection}>
                            <h1 className={styles.promoTitle}
                                data-aos="zoom-y-out"
                                data-aos-delay="50">Protop</h1>
                            <h1 className={styles.promoTitleTwo}
                                data-aos="zoom-y-out"
                                data-aos-delay="50">Solutions</h1>
                            <p className={styles.promoSubtitle}
                                data-aos="zoom-y-out"
                                data-aos-delay="100">Professional Technology for Ordinary People</p>
                        </div>

                        <Link
                            className={classnames("button button--secondary button--lg", styles.startButtonSecondary, styles.startButton)}
                            data-aos="zoom-y-out" onClick={this.executeScroll}
                            data-aos-delay="200">
                            Contact Us
                        </Link>
                    </Container>

                    <div className={styles.startArrow}></div>
                </header>

                <main className={styles.mainPart}>

                    <section className={styles.part}>
                        <Container data-aos="fade-up" data-aos-delay="100" className={styles.features}>
                            <Row className={classnames("justify-content-md-center stretchRow")}>
                                <Col>
                                    <img src="img/company.png" />
                                </Col>
                                <Col>
                                    <img src="img/university_or.png" />
                                </Col>
                                <Col>
                                    <img src="img/customer_pur.png" />
                                </Col>
                            </Row>

                            <Row className="display-flex padding-vert--md">
                                <Col>
                                    <h2 className="text-center"><b>Trusted by Companies, Universities and Other Creative Minds</b></h2>
                                    <span className={classnames(styles.textPart, "text-center")}>
                                        <b>Since 2019</b> we are working on <b>easy to use software</b> solutions.
                                        We have already worked together with big companies and universities.
                                        Also, a lot of different creative minds from <b>all over the world</b> are using our software solutions.
                                    </span>
                                </Col>
                            </Row>
                        </Container>

                    </section>
                                
                    <section className={styles.part}>
                        <Container>
                            <Row className="align-items-center" id="devAnchor">
                                <Col data-aos="fade-right" data-aos-delay="100" data-aos-anchor="#devAnchor">
                                    <h2><b>Software Development</b></h2>
                                    <span className={styles.textPart}>
                                        Your partner for all kinds of software development. <br />
                                        We are specialized on <b>user friendly cross platform software and web design</b>. <br /><br />
                                        But we can adapt to all customers’ needs and also offer for example app development.<br />
                                        Let us convince you of the quality of our work and visit <b><a href="https://www.vhdplus.com/">vhdplus.com</a></b>.
                                    </span>
                                </Col>
                                <Col data-aos="fade-left" data-aos-delay="100" className="mobile0">
                                    <img src="img/Development.png" />
                                </Col>
                            </Row>
                        </Container>
                    </section>
{/*
                    <section className={styles.part}>
                        <Container data-aos="fade-up" data-aos-delay="100" className={styles.features}>
                            <Row className={classnames("justify-content-md-center stretchRow")}>
                                <Col>
                                    <img src="img/Services2_Elek.png" />
                                </Col>
                                <Col>
                                    <img src="img/Services2_Prog.png" />
                                </Col>
                                <Col>
                                    <img src="img/Services2_Lear.png" />
                                </Col>
                            </Row>
                            <Row className="display-flex padding-vert--md">
                                <Col>
                                    <h2 className="text-center">All-round service from <b>software</b> to <b>electronics</b> development and <b>learning</b> solutions</h2>
                                    <span className={classnames("text-center", styles.textPart)}>
                                        Be a part of our <b>existing electronics development solutions</b>. We help you to make development with <b>your products</b> as easy as possible.
                                    </span>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                                
                    <section className={styles.part}>
                        <Container>
                            <Row className="align-items-center" id="pcbAnchor">
                                <Col data-aos="fade-right" data-aos-delay="100" className="padding--lg" data-aos-anchor="#pcbAnchor">
                                    <h2><b>Electronics Development</b></h2>
                                    <span className={styles.textPart}>
                                        Profit from our experience with <b>plug and play evaluation boards</b>.<br />
                                        We can cover electronics <b>development, production</b> and can <b>sell</b> the products in our shop.
                                    </span>
                                </Col>
                                <Col data-aos="fade-left" data-aos-delay="100" className="mobile0">
                                    <img src="img/audio_pcb.png" />
                                </Col>
                            </Row>
                        </Container>
                    </section>
*/}
                    <section className={styles.part}>
                        <Container>
                            <Row className="align-items-center" id="programAnchor">
                                <Col data-aos="fade-right" data-aos-delay="100">
                                    <img src="img/Program2.png" />
                                </Col>
                                <Col data-aos="fade-left" data-aos-delay="100" className="padding--lg" data-aos-anchor="#programAnchor">
                                    <h2><b>Software Services</b></h2>
                                    <span className={styles.textPart}>
                                        Profit from our <b>existing ecosystem</b> and our easy to use IDE. Customers can build a <b>working system</b> with your product <b>in a few clicks</b> and can use our numerous debugging options.
                                        With our system based on FPGAs we find solutions for <b>all kinds of electronics</b> hardware from motors to cameras.
                                    </span>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section className={styles.part}>
                        <Container>
                            <Row className="align-items-center" id="anchorSolutions">
                                <Col data-aos="fade-right" data-aos-delay="100" className="padding--lg" data-aos-anchor="#anchorSolutions">
                                    <h2><b>Learning Solutions</b></h2>
                                    <span className={styles.textPart}>
                                        But we don’t stop there and also create <b>documentation and tutorial videos</b> for you, so the customer has the best possible experience while getting started with your device.
                                    </span>
                                </Col>
                                <Col data-aos="fade-left" data-aos-delay="100" className="mobile0">
                                    <img src="img/youtube2.png" />
                                </Col>
                            </Row>
                        </Container>
                    </section>
{/*
                    <section className={styles.part}>
                        <Container data-aos="fade-up" data-aos-delay="100" className={styles.features}>
                            <Row className="display-flex padding-vert--md">
                                <h2 className="text-center"><b>Have a Look at Our Work</b></h2>
                                <span className={classnames(styles.textPart, "text-center")}>
                                    Here you can see our Audio Extension and our IDE in action. Also we do all kinds of learning material like this video.
                                </span>
                            </Row>
                            <Row className={classnames("justify-content-md-center margin-top--md")}>
                                <div className="fluidMedia"><iframe id="ytplayer" width="100%" src="https://www.youtube.com/embed/Lzl480XEgFU?autoplay=0&origin=http://vhdplus.com" allowFullScreen></iframe></div>
                            </Row>
                        </Container>
                    </section>
   */}
                    <section className={styles.part}>
                        <Container className={styles.featuresTwo}>
                            <Row className="display-flex padding-vert--md">
                                <Col >
                                    <h2 className="text-center"><b>Some of our favorite Tools</b></h2>
                                </Col>
                            </Row>
                            <Row className={classnames("justify-content-md-center")}>
                                
                                <Col className={styles.card} data-aos="fade-up" data-aos-delay="100">
                                    <img src="img/WordPress.svg" className={styles.cardImage} />
                                    <span className={styles.cardTitle}>Wordpress</span>
                                    <span className={styles.cardSubtitle}>A powerful framework to create Blogs and Online-Shops</span>
                                </Col>
                                <Col className={styles.card} data-aos="fade-up" data-aos-delay="100">
                                    <img src="img/Avalonia.png" className={styles.cardImage} />
                                    <span className={styles.cardTitle}>Avalonia</span>
                                    <span className={styles.cardSubtitle}>Avalonia is an open source UI Framework we love to use</span>
                                </Col>
                                <Col className={styles.card} data-aos="fade-up" data-aos-delay="100">
                                    <img src="img/React.svg" className={styles.cardImage} />
                                    <span className={styles.cardTitle}>React JS</span>
                                    <span className={styles.cardSubtitle}>Our go to JavaScript library to create beautiful websites</span>
                                </Col>
                            </Row>
                            {/*
                            <Row className={classnames("justify-content-md-center")}>
                                <Col className={styles.card} data-aos="fade-up" data-aos-delay="100">
                                    <img src="img/AutoDesk.png" className={styles.cardImage} />
                                    <span className={styles.cardTitle}>Fusion 360</span>
                                    <span className={styles.cardSubtitle}>Autodesk Fusion 360 is our tool of choice to design hardware</span>
                                </Col>
                                <Col className={styles.card} data-aos="fade-up" data-aos-delay="100">
                                    <img src="img/Quartus-Prime.png" className={styles.cardImage} />
                                    <span className={styles.cardTitle}>Quartus Prime</span>
                                    <span className={styles.cardSubtitle}>Necessary for VHDPlus IDE to synthesize FPGA Designs</span>
                                </Col>
                                <Col className={styles.card} data-aos="fade-up" data-aos-delay="100">
                                    <img src="img/vhdp.svg" className={styles.cardImage} />
                                    <span className={styles.cardTitle}>VHDPlus IDE</span>
                                    <span className={styles.cardSubtitle}>Our own IDE used to make FPGA Programming easier</span>
                                </Col>
                            </Row>
*/}
                        </Container>
                    </section>

                    <section className={styles.part} ref={this.contactRef}>
                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <Container data-aos="fade-up" data-aos-delay="100" className={styles.features}>
                                <Row className="display-flex padding-vert--md">
                                    <Col>
                                        <h2 className="text-center"><b>Contact us!</b></h2>
                                    </Col>
                                </Row>

                                <div className="form-group margin-vert--sm">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                                </div>
                                <div className="form-group margin-vert--sm">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                                </div>
                                <div className="form-group margin-vert--sm">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                                </div>
                                <button type="submit" className="btn btn-primary stretchbtn margin-vert--sm">Submit</button>
                            </Container>
                        </form>
                    </section>
                             
                </main>

            </Layout>
        );
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        axios({
            method: "POST",
            url: "https://contact.protop-solutions.com/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    resetForm() {
        this.setState({ name: '', email: '', message: '' })
    }
}

export default App;

