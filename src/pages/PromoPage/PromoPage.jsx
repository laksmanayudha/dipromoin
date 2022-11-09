import React from "react";
import { getPromos, getCity, getTime, getCities } from "../../utils/dummy-data";
import { Card, CardLists } from "../../components/CardLists";
import { FilterContainer } from "../../components/Filter";
import { PageNav, Pagination } from "../../components/Pagination";
import { PromoDetail, PromoWrapper } from "../../components/PromoDetail";
import { setActionOnWindowResize, getCurrenWindowSize } from "../../utils/onWindowResize";
import { Form, Input, Select, SubmitButton } from "../../components/Form";
import { useLocation, useSearchParams } from "react-router-dom";
import { routes } from "..";
import withPopUp from "../../hocs/withPopUp";
import createPages from "../../utils/createPages";
import useInput from "../../hooks/useInput";
import "./PromoPage.css";

function PromoPage({ PopUp, openPopUp, closePopUp }) {

    const [promos, setPromos] = React.useState([]);
    const [currentPromo, setCurrentPromo] = React.useState(null);
    const [isMobileAction, setIsMobileAction] = React.useState(getCurrenWindowSize() < 797.98);
    const [pageParam, setPageParam] = useSearchParams();
    const [maxPage, setMaxPage] = React.useState(1);
    const [nextPage, setNextPage] = React.useState(1);
    const [prevPage, setPrevPage] = React.useState(1);
    const [currentPage, setCurrentPage] = React.useState(1);
    const { search } = useLocation();

    // filter input
    const [keyword, setKeyword] = useInput("");
    const [city, setCity] = useInput("");
    const [filtering, setFiltering] = React.useState(false);
    // const [date, setDate] = useInput("");

    // filter time
    // const time = ["Waktu", "Minggu ini", "Bulan ini"].map((t, index) => ({ key: `${index}`, value: t }));
    let cities = getCities().map(city => ({ key: city.id, value: city.name }));
    cities = [{key: "0", value: "Pilih Kota"}, ...cities];

    const onCardClickHandler = (index) => {
        setCurrentPromo(() => promos[index]);
        if(isMobileAction) {
            openPopUp()
        }else{
            closePopUp();
        }
    }

    const submitHandler = () => {
        setFiltering(true);
        setCurrentPromo(null);
    }

    React.useEffect(() => {
        setActionOnWindowResize((width) => {
            if (width < 797.98) {
                setIsMobileAction(true);
                // openPopUp();
            }else {
                setIsMobileAction(false);
                closePopUp();
            }
        });
    }, []);

    React.useEffect(() => {
        // get page query parameter
        const page = pageParam.get("page") || 1;
        setCurrentPage(page);
        
        // get promo data by query page parameter
        const { error, data } = getPromos(page, keyword, city);
        if (!error) {
            const { items, maxPage, nextPage, prevPage } = data;
            setPromos(items);
            setMaxPage(maxPage);
            setNextPage(nextPage);
            setPrevPage(prevPage);
        }

        // scroll window to top
        window.scrollTo(0, 0);

        // set fetching
        if (filtering) {
            setPageParam({ page: 1 });
            setFiltering(false);
        }
    }, [currentPage, filtering, search]);

    // create list of page
    const pages = createPages(maxPage);

    return (
        <div className="promo-page">
            <FilterContainer >
                <Form horizontal onSubmitHandler={submitHandler}>
                    <Input
                        horizontal
                        onChangeHandler={setKeyword}
                        type="text"
                        value={keyword}
                        placeholder="Search..."
                    />
                    <Select
                        horizontal
                        defaultKeyValue={city} 
                        values={cities} 
                        onChangeHandler={setCity}
                    />
                    {/* <Select
                        horizontal
                        defaultIndexValue={date} 
                        values={time} 
                        onChangeHandler={setDate}
                    /> */}
                    <SubmitButton label="Find" />
                </Form>
            </FilterContainer>
            <div className="promo-page-display">
                <section className="promo-page-display__lists">
                    <h3 className="section-title">Promo Search Result : </h3>
                    <CardLists isVertical={true}>
                        {promos.length === 0 && <h4 style={{ color: "var(--grey-1)" }}>Promo Tidak Ditemukan</h4>}
                        {promos && promos.map((item, index) => (
                            <Card 
                                key={index}
                                leftHeader={true} 
                                title={item.title}
                                subtitle={`${getCity(item.city)} | ${getTime(item.from)} - ${getTime(item.to)}`}
                                image={item.image}
                                description={item.description}
                                to={routes("promoDetail", item.id)}
                                action={ () => { onCardClickHandler(index) } } 
                            />
                        ))}
                    </CardLists>
                    <div className="section-action">
                        <Pagination 
                            nextPage={() => { 
                                setPageParam({ page: nextPage });
                                setCurrentPage(nextPage); 
                            }} 
                            prevPage={() => { 
                                setPageParam({ page: prevPage });
                                setCurrentPage(prevPage); 
                            }} 
                        >
                            {pages && pages.map((page, index) => (
                                <PageNav 
                                    key={index}
                                    label={page} 
                                    isActive={page == currentPage ? true : false}
                                    onPageChange={() => { 
                                        setPageParam({ page: page });
                                        setCurrentPage(page); 
                                    }} 
                                />
                            ))}
                        </Pagination>
                    </div>
                </section>
                <aside className="promo-page-display__detail">
                    <PromoWrapper>
                        {currentPromo && (
                            <PromoDetail {...currentPromo} />
                        )}
                        {!currentPromo && <h4 className="empty-detail">Detail promo tidak tersedia</h4>}
                    </PromoWrapper>
                </aside>
            </div>

            {/* for mobile device only */}
            {
                PopUp(
                    <PromoWrapper>
                        {currentPromo && <PromoDetail {...currentPromo} />}
                        {!currentPromo && <h4 className="empty-detail">Detail promo tidak tersedia</h4>}
                    </PromoWrapper>
                )
            }
        </div>
    );
}

export default withPopUp(PromoPage);