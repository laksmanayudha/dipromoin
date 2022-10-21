import React from "react";
import { dummyPromos } from "../../utils/dummy-data";
import { Card, CardLists } from "../../components/CardLists";
import { FilterContainer, SearchFilter, SelectFilter } from "../../components/Filter";
import { PageNav, Pagination } from "../../components/Pagination";
import { PromoDetail, PromoWrapper } from "../../components/PromoDetail";
import { setActionOnWindowResize } from "../../utils/onWindowResize";
import "./PromoPage.css";

function PromoPage() {

    const [promos, setPromos] = React.useState([]);
    const [currentPromo, setCurrentPromo] = React.useState(null);
    const [isMobileAction, setIsMobileAction] = React.useState(false);

    const onPromoClickHandler = (index) => {
        setCurrentPromo(() => promos[index]);
    }

    React.useEffect(() => {
        setPromos(dummyPromos);
        setActionOnWindowResize((width) => {
            if (width < 797.98) {
                setIsMobileAction(true)
            }else {
                setIsMobileAction(false)
            }
        })
    }, []);

    return (
        <div className="promo-page">
            {isMobileAction ? "mobile action" : "desktop action"}
            <FilterContainer >
                <SearchFilter />
                <SelectFilter defaultIndexValue={0} values={["Kota", "Denpasar", "Jakarta", "Surabaya", "Gianyar", "Malang"]} />
                <SelectFilter defaultIndexValue={0} values={["Waktu", "Minggu ini", "Minggu depan", "bulan ini", "bulan depan"]} />
            </FilterContainer>
            <div className="promo-page-display">
                <section className="promo-page-display__lists">
                    <h3 className="section-title">Search result for "Promo"</h3>
                    <CardLists isVertical={true}>
                        {promos && promos.map((item, index) => (
                            <Card 
                                key={index} 
                                {...{...item, subtitle: `${item.city} - ${item.address}`}} 
                                leftHeader={true} 
                                action={() => { onPromoClickHandler(index) }} 
                            />
                        ))}
                    </CardLists>
                    <div className="section-action">
                        <Pagination >
                            <PageNav label="1" href="/" isActive={true} />
                            <PageNav label="2" href="/" />
                            <PageNav label="3" href="/" />
                        </Pagination>
                    </div>
                </section>
                <aside className="promo-page-display__detail">
                    <PromoWrapper>
                        {currentPromo && (<PromoDetail {...currentPromo} />)}
                        {!currentPromo && <h4 className="empty-detail">Detail promo tidak tersedia</h4>}
                    </PromoWrapper>
                </aside>
            </div>
        </div>
    );
}

export default PromoPage;