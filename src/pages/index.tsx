import React, { useEffect, Suspense } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { Container, Row, Col, Card } from 'react-bootstrap';
import classnames from "classnames";
import Link from "@docusaurus/Link";
import styles from "../css/index.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

const LazyThreeJSAnimationShader = React.lazy(() => import("../shape/ThreeJSAnimationShader"));

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;

    const fallback = <canvas style={{
        height: "800px",
        width: "100vh",
        maxHeight: "800px",
        position: "fixed",
        transform: `translateY(60px)`,
        top: 0,
        zIndex: -10
    }} />;

    useEffect(() => {
        if (ExecutionEnvironment.canUseDOM) {
            AOS.init();
            updateDarkModeClass();
        }
    }, [ExecutionEnvironment.canUseDOM]);

    function updateDarkModeClass() {
        if (!document) return;
        if (document.documentElement?.dataset?.theme === "dark" && !document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }

    useEffect(() => {
        if (!ExecutionEnvironment.canUseDOM) return;
        const observer = new MutationObserver((mutations) => {
            mutations.forEach(function (mutation) {
                if (mutation.type == "attributes"
                    && mutation.attributeName === "data-theme") {
                    updateDarkModeClass();
                }
            });
        });
        observer.observe(document.documentElement, {
            attributes: true,
            childList: false,
            subtree: false
        });
        return () => {
            observer.disconnect();
        };
    }, [ExecutionEnvironment.canUseDOM]);


    return (
        <Layout
            title={"Protop Solutions"}
            description="Professional Technology for Ordinary People">

            <BrowserOnly
                fallback={fallback}>
                {() => (
                    <Suspense fallback={fallback}>
                        <LazyThreeJSAnimationShader />
                    </Suspense>
                )}
            </BrowserOnly>

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
                            data-aos-delay="100">Your Partner for Software and Electronics Development</p>
                    </div>

                    <Link
                        className={classnames("button button--primary hideMobile button--lg", styles.startButton)}
                        to={"/docs/intro"}
                        data-aos="zoom-y-out"
                        data-aos-delay="150">
                        Read More
                    </Link>
                    <Link
                        className={classnames("button button--secondary button--lg", styles.startButtonSecondary, styles.startButton)}
                        to={"/docs/contact"}
                        data-aos="zoom-y-out"
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
                                <b>Since 2019</b> we are working on <b>easy to use software and hardware</b> solutions.
                                    We have already worked together with big companies and universities.
                                    Also, a lot of different creative minds from <b>all over the world</b> are using our software and hardware solutions.
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
                                    Your partner for all kinds of software development. <br/>
                                    We are specialized on <b>user friendly cross platform software and web design</b>. <br /><br />
                                    But we can adapt to all customers’ needs and also offer for example <b>app development or firmware development</b> for electronics devices.<br />
                                    Let us convince you of the quality of our work and visit <b><a href="https://www.vhdplus.com/">vhdplus.com</a></b>.
                                </span>
                            </Col>
                            <Col data-aos="fade-left" data-aos-delay="100" className="mobile0">
                                <img src="img/Development.png"/>
                            </Col>
                        </Row>
                    </Container>
                </section>

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
                                Be a part of our existing plug and play electronics development solutions. We help you to make development with your products as easy as possible.
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
                                Profit from our experience with plug and play evaluation boards.<br />
                                We can cover electronics development, production and can sell the products in our shop.
                                </span>
                            </Col>
                            <Col data-aos="fade-left" data-aos-delay="100" className="mobile0">
                                <img src="img/audio_pcb.png"/>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className={styles.part}>
                    <Container>
                        <Row className="align-items-center" id="programAnchor">
                            <Col data-aos="fade-right" data-aos-delay="100">
                                <img src="img/Program.png" />
                            </Col>
                            <Col data-aos="fade-left" data-aos-delay="100" className="padding--lg" data-aos-anchor="#programAnchor">
                                <h2><b>Software Services</b></h2>
                                <span className={styles.textPart}>
                                Profit from our existing ecosystem and our easy to use IDE. Customers can build a working system with your product in a few clicks and can use our numerous debugging options.
                                With our system based on FPGAs we find solutions for all kinds of electronics hardware from motors to cameras.
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
                                But we don’t stop there and also create documentation and tutorial videos for you, so the customer has the best possible experience while getting started with your device.
                                </span>
                            </Col>
                            <Col data-aos="fade-left" data-aos-delay="100" className="mobile0">
                                <img src="img/youtube.png" />
                            </Col>
                        </Row>
                    </Container>
                </section>

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

                <section className={styles.part}>
                    <Container className={styles.featuresTwo}>
                        <Row className="display-flex padding-vert--md">
                            <Col >
                                <h2 className="text-center"><b>Some of our favorite Tools</b></h2>
                            </Col>
                        </Row>
                        <Row className={classnames("justify-content-md-center")}>
                            <Col className={styles.card} data-aos="fade-up" data-aos-delay="100">
                                <img src="img/vhdp.svg" className={styles.cardImage} />
                                <span className={styles.cardTitle}>VHDPlus IDE</span>
                                <span className={styles.cardSubtitle}>Our own IDE used to make FPGA Programming easier</span>
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
                        <Row className={classnames("justify-content-md-center")}>
                            <Col className={styles.card} data-aos="fade-up" data-aos-delay="100">
                                <img src="img/AutoDesk.png" className={styles.cardImage} />
                                <span className={styles.cardTitle}>Fusion 360</span>
                                <span className={styles.cardSubtitle}>Our tool of choice to design our hardware</span>
                            </Col>
                            <Col className={styles.card} data-aos="fade-up" data-aos-delay="100">
                                <img src="img/Quartus-Prime.png" className={styles.cardImage} />
                                <span className={styles.cardTitle}>Quartus Prime</span>
                                <span className={styles.cardSubtitle}>Necessary for VHDPlus IDE to synthesize FPGA Designs</span>
                            </Col>
                            <Col className={styles.card} data-aos="fade-up" data-aos-delay="100">
                                <img src="img/Wordpress.svg" className={styles.cardImage} />
                                <span className={styles.cardTitle}>Wordpress</span>
                                <span className={styles.cardSubtitle}>A powerful framework to create Blogs and Online-Shops</span>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>

        </Layout>
    );
}

export default Home;

