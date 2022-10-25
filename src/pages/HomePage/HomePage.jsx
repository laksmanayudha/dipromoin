import React from "react";
import { Carousel } from "../../components/Carousel";
import { getCity, getTime, getUMKM, getPromos, getUMKMs } from "../../utils/dummy-data";
import { CardLists, Card } from "../../components/CardLists";
import { ActionButton } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { routes } from "../";
import "./HomePage.css";

function HomePage() {

    const [promos, setPromos] = React.useState([]);
    const [umkms, setUMKMs] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        const promoData = getPromos();
        if (!promoData.error) {
            setPromos(promoData.data.items);
        }

        const umkmData = getUMKMs();
        if (!umkmData.error) {
           setUMKMs(umkmData.data.items);
        }
    }, []);

    const carousel = promos.map(promo => ({
        image: promo.image,
        title: promo.title,
        subtitle: `${getCity(promo.city)} | ${getUMKM(promo.umkm).data.name} | ${getTime(promo.to)}`,
        description: promo.description
    }));

    const umkmCards = umkms.map(umkm => ({
        image: umkm.profileImage,
        title: umkm.name,
        subtitle: `${getCity(umkm.city)} - ${umkm.address}`,
        description: umkm.description
    }));

    return (
        <div className="home-page">
            {/* carousel */}
            <section className="carousel-section">
                <Carousel items={carousel} onClick={() => { navigate(routes("promo")) }}/>
            </section>

            {/* promo section */}
            <section className="promo-section">
                <h2 className="section-title">What’s New? Get The Latest Promo now!!</h2>
                <CardLists >
                    {promos && promos.map((item, index) => (
                        <Card 
                            key={index}
                            title={item.title}
                            subtitle={`${getCity(item.city)} | ${getUMKM(item.umkm).data.name} | ${getTime(item.to)}`}
                            image={item.image}
                            description={item.description}
                        />
                    ))}
                </CardLists>
                <div className="section-action">
                    <ActionButton action={() => { navigate(routes("promo")) }}>See More</ActionButton>
                </div>
            </section>

            {/* umkm section */}
            <section className="umkm-section">
                <h2 className="section-title">Find the Nearest UMKM From Your City</h2>
                <CardLists isVertical>
                    {umkmCards && umkmCards.map((item, index) => (
                        <Card {...item} key={index} leftHeader/>
                    ))}
                </CardLists>
                <div className="section-action">
                    <ActionButton action={() => { navigate(routes("umkm")) }}>See More</ActionButton>
                </div>
            </section>
        </div>
    );
}

export default HomePage;