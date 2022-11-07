import React from "react";
import { getCity, getUMKMs } from "../../utils/dummy-data";
import { Card, CardLists } from "../../components/CardLists";
import { FilterContainer } from "../../components/Filter";
import { PageNav, Pagination } from "../../components/Pagination";
import { Form, Input, SubmitButton } from "../../components/Form";
import { useNavigate, useSearchParams } from "react-router-dom";
import createPages from "../../utils/createPages";
import useInput from "../../hooks/useInput";
import "./UMKMPage.css";
import { routes } from "..";

function UMKMPage() {

    const navigate = useNavigate();

    const [pageParam, setPageParam] = useSearchParams();
    const [maxPage, setMaxPage] = React.useState(1);
    const [nextPage, setNextPage] = React.useState(1);
    const [prevPage, setPrevPage] = React.useState(1);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [umkms, setUMKMs] = React.useState([]);

    // filter input
    const [keyword, setKeyword] = useInput("");
    const [filtering, setFiltering] = React.useState(false);

    const submitHandler = () => {
        setFiltering(true);
    }

    React.useEffect(() => {
        // get page query parameter
        const page = pageParam.get("page") || 1;
        setCurrentPage(page);
        
        // get promo data by query page parameter
        const { error, data } = getUMKMs(page, keyword);
        if (!error) {
            const { items, maxPage, nextPage, prevPage } = data;
            setUMKMs(items);
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
    }, [currentPage, filtering]);

    // create list of page
    const pages = createPages(maxPage);

    return (
        <div className="umkm-page">
            <FilterContainer >
                <Form horizontal onSubmitHandler={submitHandler}>
                    <Input
                        horizontal
                        onChangeHandler={setKeyword}
                        type="text"
                        value={keyword}
                        placeholder="Search..."
                    />
                    <SubmitButton label="Find" />
                </Form>
            </FilterContainer>
            <h3 className="section-title">UMKM Search Result : </h3>
            <CardLists isVertical={true}>
                {umkms && umkms.map((item, index) => (
                    <Card 
                        action={() => { navigate(routes("profile", item.id)) }}
                        image={item.profileImage}
                        title={item.name}
                        subtitle={`${getCity(item.city)} | ${item.address}`}
                        description={item.description}
                        to={routes("profile", item.id)}
                        leftHeader={true} 
                        key={index} 
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
        </div>
    );
}

export default UMKMPage;