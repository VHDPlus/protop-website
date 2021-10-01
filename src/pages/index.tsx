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
                        to={"/docs/getstarted#install-vhdplus-ide"}
                        data-aos="zoom-y-out"
                        data-aos-delay="150">
                        Read More
                    </Link>
                    <Link
                        className={classnames("button button--secondary button--lg", styles.startButtonSecondary, styles.startButton)}
                        to={"/docs/getstarted"}
                        data-aos="zoom-y-out"
                        data-aos-delay="200">
                        Contact Us
                    </Link>
                </Container>
            </header>

            <main>
                <section className={styles.part}>
                    <Container data-aos="fade-up" data-aos-delay="100" className={classnames(styles.features)}>
                        <Row className={classnames("justify-content-md-center")}>
                            <Col>
                                <img src="/static/img/company.png"/>
                            </Col>
                            <Col>
                                <img src="/static/img/university_or.png" />
                            </Col>
                            <Col>
                                <img src="/static/img/customer_pur.png" />
                            </Col>
                        </Row>
                    </Container>
                    <Container data-aos="fade-up" data-aos-delay="100" className={classnames(styles.features)}>
                        <Row className="display-flex padding-vert--md">
                            <Col>
                                <h2 className="text-center"><b>Trusted by Companies, Universities and Other Creative Minds</b></h2>
                                <p className="text-center"><b>Since 2019</b> we are working on <b>easy to use software and hardware</b> solutions.
                                In this time we already worked with big companies and universities. 
                                But also a lot of different creative minds <b>all over the world</b> are using our solutions.</p>
                            </Col>
                        </Row>
                    </Container>

                </section>

                <section className={styles.part}>
                    <Container>
                        <Row>
                            <Col data-aos="fade-right" data-aos-delay="100" className="padding--lg">
                                <h2><b>Software Development</b></h2>
                                Your partner for all kinds of software development. <br/>
                                We are specialized on <b>user friendly cross platform software and web design</b>. <br/>
                                But we can adapt to all customers’ needs and also offer for example <b>app development or firmware development</b> for electronics devices.<br/>
                                Let us convince you of the quality of our work and visit <b><a href="https://www.vhdplus.com/">vhdplus.com</a></b>.
                            </Col>
                            <Col data-aos="fade-left" data-aos-delay="100" >
                                <img src="/static/img/Development.png"/>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className={styles.part}>
                    <Container data-aos="fade-up" data-aos-delay="100" className={classnames(styles.features)}>
                        <Row className={classnames("justify-content-md-center")}>
                            <Col>
                                <img src="/static/img/Services2_Elek.png"/>
                            </Col>
                            <Col>
                                <img src="/static/img/Services2_Prog.png" />
                            </Col>
                            <Col>
                                <img src="/static/img/Services2_Lear.png" />
                            </Col>
                        </Row>
                    </Container>
                    <Container data-aos="fade-up" data-aos-delay="100" className={classnames(styles.features)}>
                        <Row className="display-flex padding-vert--md">
                            <Col>
                                <h2 className="text-center">All-round service from <b>software</b> to <b>electronics</b> development and <b>learning</b> solutions</h2>
                                Be a part of our existing plug and play electronics development solutions. We help you to make development with your products as easy as possible.
                            </Col>
                        </Row>
                    </Container>

                </section>

                <section className={styles.part}>
                    <Container>
                        <Row>
                            <Col data-aos="fade-right" data-aos-delay="100" className="padding--lg">
                                <h2><b>Electronics Development</b></h2>
                                Profit from our experience with plug and play evaluation boards.<br/>
                                We can cover electronics development, production and can sell the products in our shop.
                            </Col>
                            <Col data-aos="fade-left" data-aos-delay="100" >
                                <img src="/static/img/audio_pcb.png"/>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className={styles.part}>
                    <Container>
                        <Row>
                            <Col data-aos="fade-right" data-aos-delay="100" >
                                <img src="/static/img/Program.png"/>
                            </Col>
                            <Col data-aos="fade-left" data-aos-delay="100" className="padding--lg">
                                <h2><b>Software Services</b></h2>
                                Profit from our existing ecosystem and our easy to use IDE. Customers can build a working system with your product in a few clicks and can use our numerous debugging options.
                                With our system based on FPGAs we find solutions for all kinds of electronics hardware from motors to cameras.  
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className={styles.part}>
                    <Container>
                        <Row>
                            <Col data-aos="fade-right" data-aos-delay="100" className="padding--lg">
                                <h2><b>Learning Solutions</b></h2>
                                But we don’t stop there and also create documentation and tutorial videos for you, so the customer has the best possible experience while getting started with your device.
                            </Col>
                            <Col data-aos="fade-left" data-aos-delay="100" >
                                <img src="/static/img/youtube.png"/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>

        </Layout>
    );
}

export default Home;

