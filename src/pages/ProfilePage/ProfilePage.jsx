import React from "react";
import { useParams } from "react-router-dom";
import { ActionButton, GoToButton } from "../../components/Button";
import { Tab, TabNavs, TabNavItem, TabDisplay, TabDisplayItem } from "../../components/Tab";
import { getUMKM } from "../../utils/dummy-data";
import { CardLists } from "../../components/CardLists"
import { Image } from "../../components/Image";
import { FiTrash, FiEdit3 } from "react-icons/fi";
import { dummyPromos } from "../../utils/dummy-data";
import { Form, Input, Select } from "../../components/Form";
import useInput from "../../hooks/useInput";
import "./ProfilePage.css";

function ProfilePage({ authedUser }){

    const { param } = useParams();
    const [profile, setProfile] = React.useState({
        name: "",
        profileImage: "",
        description: "",
        phone: "",
        link: "",
        city: "",
        address: "",
    });
    
    const [name, setName] = useInput(""); 

    React.useEffect(() => {
        const { error, data } = getUMKM(param);

        if (!error) {
            setProfile(data);
        }
    }, [param]);

    return (
        <div className="profile-page">
            <section className="profile-section">
                <div className="profile-header">
                    <img className="profile-header__image" src={profile.profileImage} alt="" />
                </div>
                <div className="profile-body">
                    <div className="profile-body__identity">
                        <h2 className="profile-body__name">{profile.name}</h2>
                        <small className="profile-body__city">{profile.city}</small>
                        <small className="profile-body__address">{profile.address}</small>
                        <div className="profile-body__description">
                            {profile.description}
                        </div>
                    </div>
                    <div className="profile-body__contacts">
                        <GoToButton label="Website" url={profile.link} />
                        <GoToButton label="WhatsApp" url={profile.phone} />
                    </div>
                </div>
            </section>
            <section className="profile-tab-section">
                <Tab>
                    <TabNavs defaultTab="mypromo">
                        <TabNavItem name="mypromo">My Promo</TabNavItem>
                        <TabNavItem name="editprofile">Edit Profile</TabNavItem>
                    </TabNavs>

                    <TabDisplay>
                        <TabDisplayItem forName="mypromo">
                            <div className="promo-tab">
                                <button className="promo-add">
                                    <h4>+ Add Promo</h4>
                                </button>
                                <CardLists>
                                    {dummyPromos && dummyPromos.map((promo, index) => (
                                        <div className="promo-item" key={index}>
                                            <Image url={promo.image} />
                                            <div className="promo-item__actions">
                                                <ActionButton 
                                                    secondary 
                                                    small
                                                >
                                                        <FiEdit3 />
                                                </ActionButton>
                                                <ActionButton 
                                                    small
                                                >
                                                    <FiTrash />
                                                </ActionButton>
                                            </div>
                                        </div>
                                    ))}
                                </CardLists>
                            </div>
                        </TabDisplayItem>
                        <TabDisplayItem forName="editprofile">
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
                                    <Select
                                        horizontal
                                        defaultIndexValue={0} 
                                        values={["Kota", "Denpasar", "Jakarta"]}
                                        label="Kota"
                                    />
                                </Form>
                            </div>
                        </TabDisplayItem>
                    </TabDisplay>
                </Tab>
            </section>
            <section>
            </section>
        </div>
    );
}

export default ProfilePage;