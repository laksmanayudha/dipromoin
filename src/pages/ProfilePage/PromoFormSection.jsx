import React from "react";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";
import getToday from "../../utils/getToday";
import { FileInput, Form, Input, Select, SubmitButton, TextArea } from "../../components/Form";
import { PromoWrapper } from "../../components/PromoDetail";
import { getPromo, insertPromo, updatePromo } from "../../utils/dummy-data";
import { getCities } from "../../utils/dummy-data";
import "./ProfilePage.css";

function PromoForm({ 
        id, 
        isOpen, 
        addPromoSuccess, 
        editPromoSuccess,
        formStatus, 
        authedUser 
    }) {

    const [today, setToday]             = React.useState(getToday());
    const [title, setTitle]             = useInput(""); 
    const [from, setFrom]               = useInput(""); 
    const [to, setTo]                   = useInput(""); 
    const [address, setAddress]         = useInput(""); 
    const [link, setLink]               = useInput(""); 
    const [phone, setPhone]             = useInput(""); 
    const [description, setDescription] = useInput("");  
    const [city, setCity]               = useInput("0"); 
    const [photo, setPhoto]             = useInput("");
    const [error, setError]             = React.useState({});

    // city options
    let cities = getCities().map(city => ({ key: city.id, value: city.name }));
    cities = [{key: "0", value: "Pilih Kota"}, ...cities];

    const resetInput = () => {
        setTitle("");
        setFrom("");
        setTo("");
        setAddress("");
        setLink("");
        setPhone("");
        setDescription("");
        setCity("0");
        setPhoto("");
        setError({});
    }

    const submitHandler = () => {
        if (formStatus === "add") {
            const { error,  message, data } = insertPromo({
                umkm: authedUser.id,
                title,
                from,
                to,
                address,
                link,
                phone,
                description,
                city,
                photo
            });

            if (!error) {
                setError({noError: true});
                addPromoSuccess();
            }else {
                setError({[data.type]: data.message});
            }
        }else {
            const {error, message, data} = updatePromo({
                umkm: authedUser.id,
                id,
                title,
                from,
                to,
                address,
                link,
                phone,
                description,
                city,
                photo
            });

            if (!error) {
                setError({noError: true});
                editPromoSuccess();
            }else {
                setError({[data.type]: data.message});
            }
        }

        // scroll to top
        window.scrollTo(0, 0);
    }
    
    React.useEffect(() => {
        if (authedUser) {
            // for edit form
            if (id != null) {
                const { error, data } = getPromo(id);
                if(!error) {
                    setTitle(data.title);
                    setFrom(data.from);
                    setTo(data.to);
                    setAddress(data.address);
                    setLink(data.link);
                    setPhone(data.phone);
                    setDescription(data.description);
                    setCity(data.city);
                    setPhoto(data.image);
                }
            }
            // for add form
            else {
                resetInput();
                setAddress(authedUser.address);
                setLink(authedUser.link);
                setPhone(authedUser.phone);
                setCity(authedUser.city);
            }
        }
    }, [isOpen]);

    return (
        <PromoWrapper>
            <div className="promo-form-section">
                <Form onSubmitHandler={submitHandler}>
                    <Input
                        horizontal
                        onChangeHandler={setTitle}
                        label="Judul"
                        type="text"
                        value={title}
                        placeholder="Judul Promo..."
                        name="title"
                        errorMessage={error.title}
                    />
                    <FileInput
                        horizontal
                        onChangeHandler={setPhoto}
                        value={photo}
                        label="Foto Promo"
                        id="foto"
                        name="photo"
                        errorMessage={error.photo}
                    />
                    <div className="promo-form-date">
                        <div>
                            <Input
                                horizontal
                                onChangeHandler={setFrom}
                                label="Mulai"
                                type="date"
                                min={today}
                                max={to}
                                value={from}
                                name="from"
                                errorMessage={error.from}
                            />
                        </div>
                        <div>
                            <Input
                                horizontal
                                onChangeHandler={setTo}
                                label="Berakhir"
                                type="date"
                                min={from || today}
                                disabled={from ? false : true}
                                value={to}
                                name="to"
                                errorMessage={error.to}
                            />
                        </div>
                    </div>
                    <TextArea
                        horizontal
                        label="Deskripsi Promo"
                        placeholder="Deskripsi..."
                        isReset={!isOpen}
                        value={description}
                        onInputHandler={setDescription}
                        name="description"
                        errorMessage={error.description}
                    />
                    <Select
                        horizontal
                        defaultKeyValue={city} 
                        values={cities}
                        label="Kota UMKM"
                        onChangeHandler={setCity}
                        name="city"
                        errorMessage={error.city}
                    />
                    <Input
                        horizontal
                        onChangeHandler={setAddress}
                        label="Alamat"
                        type="text"
                        value={address}
                        placeholder="Alamat UMKM..."
                        name="address"
                        errorMessage={error.address}
                    />
                    <Input
                        horizontal
                        onChangeHandler={setLink}
                        label="Website"
                        type="text"
                        value={link}
                        placeholder="Alamat Webiste atau Sosial Media..."
                        name="link"
                        errorMessage={error.link}
                    />
                    <Input
                        horizontal
                        onChangeHandler={setPhone}
                        label="Telpon"
                        type="text"
                        value={phone}
                        placeholder="Nomor Telpon..."
                        name="phone"
                        errorMessage={error.phone}
                    />
                    <SubmitButton label="Simpan" />
                </Form>
            </div>
        </PromoWrapper>
    );
}

PromoForm.propTypes = {
    id: PropTypes.string, 
    setCurrentPromoId: PropTypes.func, 
    onClosePopUp: PropTypes.func
}

export default PromoForm;