import React from "react";
import { useParams } from "react-router-dom";
import { getPromo } from "../../utils/dummy-data";
import { PromoDetail } from "../../components/PromoDetail";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import "./DetailPage.css";

function DetailPage() {

    const { param } = useParams();
    const [currentPromo, setCurrenPromo] = React.useState(null);

    React.useEffect(() => {

        if (param) {
            const { error, data } = getPromo(param);
            if (!error) {
                setCurrenPromo(data);
            }
        }
    }, []);

    if (!currentPromo) {
        return <NotFoundPage />
    }

    return (
        <div className="promo-detail-page">
            <PromoDetail {...currentPromo} />
        </div>
    );
}

export default DetailPage;