import React from "react";
import { Image } from "../../components/Image";
import "./AboutPage.css";

function AboutPage() {

    return (
        <div className="about-page">
            <header className="about-page-header">
                <h3>About Dipromoin.id</h3>
            </header>
            <p className="about-page-description">
                Dipromoin.id adalah aplikasi website sebagai media pemasangan/berbagi promo bagi UMKM  untuk memperkenalkan produk dan menjangkau/menggait konsumen lebih luas melalui promo yang dibagikan ke publik.
            </p>
            <p className="about-page-description">
                Dipromoin.id memudahkan pengguna mencari promo di sekitar wilayah terdekat mereka secara terpusat melalui sebuat platform yang mengumpulkan berbagai informasi promo UMKM masyarakat. <a className="documentation" href="https://docs.google.com/document/d/1MNiUCeZyY08H_ZxnbYu2pLVYEry0oXTWv075ABm5wsk/edit#heading=h.akagg73xso0n" target="_blank" rel="noreferrer">Lihat dokumentasi</a>.
            </p>
            <div className="about-page-images">
                <div className="about-age-images__item">
                    <Image url="./images/profile-1.png" />
                </div>
                <div className="about-age-images__item">
                    <Image url="./images/profile-2.png" />
                </div>
                <div className="about-age-images__item">
                    <Image url="./images/profile-1.png" />
                </div>
            </div>
        </div>
    );
}

export default AboutPage;