import React from "react";
import { dummyUMKM } from "../../utils/dummy-data";
import { Card, CardLists } from "../../components/CardLists";
import { FilterContainer, SearchFilter } from "../../components/Filter";
import { PageNav, Pagination } from "../../components/Pagination";
import "./UMKMPage.css";

function UMKMPage() {

    return (
        <div className="umkm-page">
            <FilterContainer >
                <SearchFilter />
            </FilterContainer>
            <h3 className="section-title">Search result for "UMKM"</h3>
            <CardLists isVertical={true}>
                {dummyUMKM && dummyUMKM.map((item, index) => (
                    <Card {...item} leftHeader={true} key={index} />
                ))}
            </CardLists>
            <div className="section-action">
                <Pagination >
                    <PageNav label="1" href="/" isActive={true} />
                    <PageNav label="2" href="/" />
                    <PageNav label="3" href="/" />
                </Pagination>
            </div>
        </div>
    );
}

export default UMKMPage;