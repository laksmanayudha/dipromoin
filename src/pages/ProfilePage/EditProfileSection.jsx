import React from "react";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";
import { getCities, updateUMKM } from "../../utils/dummy-data";
import { FileInput, Form, Input, Select, SubmitButton, TextArea } from "../../components/Form";
import { UpdateProfileContext } from "../../contexts/updateProfileContext";
import "./ProfilePage.css";

function EditProfileSection({ authedUser }) {

    const [name, setName] = useInput(authedUser.name); 
    const [address, setAddress] = useInput(authedUser.address); 
    const [link, setLink] = useInput(authedUser.link); 
    const [phone, setPhone] = useInput(authedUser.phone); 
    const [description, setDescription] = useInput(authedUser.description); 
    const [city, setCity] = useInput(authedUser.city); 
    const [profileImage, setProfileImage] = useInput(authedUser.profileImage); 
    const [errors, setErrors] = React.useState({});

    // context 
    const {setIsProfileUpdate} = React.useContext(UpdateProfileContext);

    // city options
    let cities = getCities().map(city => ({ key: city.id, value: city.name }));
    cities = [{key: "0", value: "Pilih Kota"}, ...cities];

    const submitHandler = () => {
        const {error, message, data} = updateUMKM({
            id: authedUser.id,
            name, 
            address, 
            link, 
            phone, 
            description, 
            city, 
            profileImage
        });

        if (!error) {
            setErrors({noError: true});
            setIsProfileUpdate(true);
            window.scrollTo(0, 0);
        }else {
            setErrors({[data.type]: data.message});
        }
    }

    return (
        <div className="profile-tab">
            {errors.noError && 
                <p style={{  color: "var(--green-2)", marginBottom: "1em", fontWeight: "bold" }}>
                    Successfuly update profile.
                </p>
            }
            <Form onBackground onSubmitHandler={submitHandler}>
                <Input
                    horizontal
                    onChangeHandler={setName}
                    label="UMKM name"
                    type="text"
                    value={name}
                    placeholder="Nama UMKM..."
                    name="name"
                    errorMessage={errors.name}
                />
                <FileInput
                    horizontal
                    onChangeHandler={setProfileImage}
                    id="foto"
                    value={profileImage}
                    label="Foto Profile"
                    name="profileImage"
                    errorMessage={errors.profileImage}
                />
                <Select
                    horizontal
                    defaultKeyValue={city} 
                    values={cities}
                    label="Kota UMKM"
                    onChangeHandler={setCity}
                    name="city"
                    errorMessage={errors.city}
                />
                <Input
                    horizontal
                    onChangeHandler={setAddress}
                    label="Alamat"
                    type="text"
                    value={address}
                    placeholder="Alamat UMKM..."
                    name="address"
                    errorMessage={errors.address}
                />
                <Input
                    horizontal
                    onChangeHandler={setLink}
                    label="Website"
                    type="text"
                    value={link}
                    placeholder="Alamat Webiste atau Sosial Media..."
                    name="link"
                    errorMessage={errors.link}
                />
                <Input
                    horizontal
                    onChangeHandler={setPhone}
                    label="Telpon"
                    type="text"
                    value={phone}
                    placeholder="Nomor Telpon..."
                    name="phone"
                    errorMessage={errors.phone}
                />
                <TextArea
                    horizontal
                    label="Description"
                    placeholder="Deskripsi..."
                    value={description}
                    onInputHandler={setDescription}
                    name="description"
                    errorMessage={errors.description}
                />
                <SubmitButton label="Simpan" />
            </Form>
        </div>
    );
}

export default EditProfileSection;