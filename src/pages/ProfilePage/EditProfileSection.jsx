import React from "react";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";
import { getCities } from "../../utils/dummy-data";
import { FileInput, Form, Input, Select, SubmitButton, TextArea } from "../../components/Form";
import "./ProfilePage.css";

function EditProfileSection() {

    const [name, setName] = useInput(""); 
    const [address, setAddress] = useInput(""); 
    const [link, setLink] = useInput(""); 
    const [phone, setPhone] = useInput(""); 
    const [description, setDescription] = useInput(""); 
    const [city, setCity] = useInput("0"); 
    const [photo, setPhoto] = useInput(""); 


    // city options
    let cities = getCities().map(city => ({ key: city.id, value: city.name }));
    cities = [{key: "0", value: "Pilih Kota"}, ...cities];

    return (
        <div className="profile-tab">
            <Form onBackground>
                <Input
                    horizontal
                    onChangeHandler={setName}
                    label="UMKM name"
                    type="text"
                    value={name}
                    placeholder="Nama UMKM..."
                />
                <FileInput
                    horizontal
                    onChangeHandler={setPhoto}
                    id="foto"
                    value={photo}
                    label="Foto Profile"
                />
                <Select
                    horizontal
                    defaultKeyValue={city} 
                    values={cities}
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
    );
}

export default EditProfileSection;