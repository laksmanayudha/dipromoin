import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { GoToButton } from "../../components/Button";
import { Tab, TabNavs, TabNavItem, TabDisplay, TabDisplayItem } from "../../components/Tab";
import { getCity, getUMKM, getUMKMPromos } from "../../utils/dummy-data";
import withPopUp from "../../hocs/withPopUp";
import EditProfileSection from "./EditProfileSection";
import PromoListsSection from "./PromoListsSection";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import "./ProfilePage.css";

function ProfilePage({ authedUser, PopUp, openPopUp, isOpen }){

    const { param } = useParams();
    const [profile, setProfile] = React.useState(null);
    const [promos, setPromos] = React.useState([]);

    React.useEffect(() => {
        // get UMKM Profile
        const dataProfile = getUMKM(param);
        if (!dataProfile.error) {
            setProfile(dataProfile.data);
        }

        // get UMKM Promos
        const dataPromos = getUMKMPromos(param);
        if (!dataPromos.error) {
            setPromos(dataPromos.data);
        }
    }, [param]);

    if (!profile) {
        return <NotFoundPage />
    }

    return (
        <div className="profile-page">
            <section className="profile-section">
                <div className="profile-header">
                    <img className="profile-header__image" src={profile.profileImage} alt="" />
                </div>
                <div className="profile-body">
                    <div className="profile-body__identity">
                        <h2 className="profile-body__name">{profile.name}</h2>
                        <small className="profile-body__city">{getCity(profile.city)}</small>
                        <small className="profile-body__address">{profile.address}</small>
                        <div className="profile-body__description">
                            {profile.description}
                        </div>
                    </div>
                    <div className="profile-body__contacts">
                        <GoToButton label="Website" url={profile.link} />
                        <GoToButton label="WhatsApp" url={"https://wa.me/" + profile.phone} />
                    </div>
                </div>
            </section>
            <section className="profile-tab-section">
                <Tab>
                    <TabNavs defaultTab="mypromo">
                        <TabNavItem name="mypromo">My Promo</TabNavItem>
                        {authedUser != null && <>{authedUser.id === param && <TabNavItem name="editprofile">Edit Profile</TabNavItem>}</>}
                    </TabNavs>

                    <TabDisplay>
                        <TabDisplayItem forName="mypromo">
                            <PromoListsSection 
                                promos={promos} 
                                openPopUp={openPopUp} 
                                PopUp={PopUp} 
                                isOpen={isOpen}
                                authedUser={authedUser}
                                currentProfile={param}
                            />
                        </TabDisplayItem>
                        <TabDisplayItem forName="editprofile">
                            <EditProfileSection />
                        </TabDisplayItem>
                    </TabDisplay>
                </Tab>
            </section>
        </div>
    );
}

ProfilePage.propTypes = {
    authedUser: PropTypes.object
}

export default withPopUp(ProfilePage);