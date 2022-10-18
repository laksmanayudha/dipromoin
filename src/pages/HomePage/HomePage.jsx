import React from "react";
import { Carousel } from "../../components/Carousel";
import "./HomePage.css";
import { dummy, dummyPromo } from "../../utils/dummy-data";
import { CardLists, Card } from "../../components/CardLists";
import { SeeMoreButton } from "../../components/Button";

function HomePage() {

    return (
        <div className="home-page">
            <section className="carousel-section">
                <Carousel items={dummy} />
            </section>
            <section className="promo-section">
                <h2 className="section-title">What’s New? Get The Latest Promo now!!</h2>
                <CardLists >
                    {dummyPromo && dummyPromo.map((item, index) => (
                        <Card {...item} key={index} />
                    ))}
                </CardLists>
                <div className="section-action">
                    <SeeMoreButton />
                </div>
            </section>
            <section className="umkm-section">
                <h2 className="section-title">Find the Nearest UMKM From Your City</h2>
                <CardLists isVertical={true} >
                    {dummyPromo && dummyPromo.map((item, index) => (
                        <Card {...item} key={index} leftHeader={true} />
                    ))}
                </CardLists>
                <div className="section-action">
                    <SeeMoreButton />
                </div>
            </section>
            <section></section>
        </div>
    );
}

export default HomePage;