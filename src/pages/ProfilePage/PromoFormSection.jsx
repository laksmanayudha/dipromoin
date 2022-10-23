import React from "react";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";
import { FileInput, Form, Input, Select, SubmitButton, TextArea } from "../../components/Form";
import { PromoWrapper } from "../../components/PromoDetail";
import getToday from "../../utils/getToday";
import "./ProfilePage.css";

function PromoForm() {

    const [today, setToday] = React.useState(getToday());
    const [title, setTitle] = useInput(""); 
    const [from, setFrom] = useInput(""); 
    const [to, setTo] = useInput(""); 
    const [address, setAddress] = useInput(""); 
    const [link, setLink] = useInput(""); 
    const [phone, setPhone] = useInput(""); 
    const [description, setDescription] = useInput(""); 
    const [city, setCity] = useInput(0); 
    const [photo, setPhoto] = useInput(""); 

    return (
        <PromoWrapper>
            <div className="promo-form-section">
                <Form>
                    <Input
                        horizontal
                        onChangeHandler={setTitle}
                        label="Judul"
                        type="text"
                        value={title}
                        placeholder="Judul Promo..."
                    />
                    <FileInput
                        horizontal
                        onChangeHandler={setPhoto}
                        label="Foto Profile"
                    />
                    <div className="promo-form-date">
                        <div>
                            <Input
                                horizontal
                                onChangeHandler={setFrom}
                                label="Mulai"
                                type="date"
                                min={today}
                                value={from}
                            />
                        </div>
                        <div>
                            <Input
                                horizontal
                                onChangeHandler={setTo}
                                label="Berakhir"
                                type="date"
                                min={from}
                                value={to}
                            />
                        </div>
                    </div>
                    <Select
                        horizontal
                        defaultIndexValue={city} 
                        values={["Pilih Kota", "Denpasar", "Jakarta"]}
                        label="Kota UMKM"
                        onChangeHandler={setCity}
                    />
                    <Input
                        horizontal
                        onChangeHandler={setAddress}
                        label="Alamat"
                        type="text"
                        value={address}
                        placeholder="Alamat UMKM..."
                    />
                    <Input
                        horizontal
                        onChangeHandler={setLink}
                        label="Website"
                        type="text"
                        value={link}
                        placeholder="Alamat Webiste atau Sosial Media..."
                    />
                    <Input
                        horizontal
                        onChangeHandler={setPhone}
                        label="Telpon"
                        type="text"
                        value={phone}
                        placeholder="Nomor Telpon..."
                    />
                    <TextArea
                        horizontal
                        label="Description"
                        placeholder="Deskripsi..."
                        value={description}
                        onInputHandler={setDescription}
                    />
                    <SubmitButton label="Simpan" />
                </Form>
            </div>
        </PromoWrapper>
    );
}

export default PromoForm;