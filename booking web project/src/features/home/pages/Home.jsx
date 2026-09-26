import Nav from "../../../helpers/components/nav/Nav";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginBtn from "../components/loginBtn/LoginBtn";
import api from "../../../api/api";
import UserAcount from "../components/userAcount/UserAcount";
import SearchWidget from "../components/searchWidget/SearchWidget";
import OfferFilter from "../components/offerFilter/OfferFilter";
import GalleryGrid from "../components/galleryGrid/GalleryGrid";
import Cards from "../components/cards/Cards";
import AppStoreImage from "../../../assets/images/AppStoreImage.png";
import PlayStoreImage from "../../../assets/images/playStoreImage.png";
function Home() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getCurrentUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        return;
      }

      try {
        const response = await api.get("/auth/me");

        setUser(response.data.user);
      } catch (error) {
        console.log("User is not authenticated");

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setUser(null);
      }
    };

    getCurrentUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.reload();
  };

  return (
    <>
      <Nav>
        {!user ? (
          <div className="account-buttons">
            <LoginBtn text="Sign in" navigatePath="/login" />
            <LoginBtn text="Register" navigatePath="/register" />
          </div>
        ) : (
          <UserAcount user={user} handleLogout={handleLogout} />
        )}
      </Nav>
      <main className="home-page">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="hero-eyebrow">Plan your next escape</p>
            <h1 id="hero-title" className="hero-title">
              Discover your trip worldwide.
            </h1>
          </div>
          <SearchWidget />
        </section>
        <section className="special-offers">
          <h1>Special Offers</h1>

          <OfferFilter />
          <GalleryGrid />
        </section>
        <section className="popular-destinations">
          <h1>Explore Stays In Trending Destinations</h1>
          <p>Find Hot Stays!</p>
          <Cards />
        </section>

        <section className="Past-Offers">
          <h1>Compare The Highest Reviewed Past Offers</h1>
          <p>Browse By Type</p>
          <Cards />
        </section>

        <div className="Inspiration">
          <div className="top-titl">
            <h1> Get Inspirations For Your Next Trip</h1>
            <h3>Read About Wonderful Adventure We Love Most</h3>
          </div>
          <div className="bottom-title">
            <h1>Difficult Roads Lead To Beautiful Destination .</h1>
          </div>
        </div>

        <div className="footer">
          <div className="App-Footer">
            <div className="app-footer-title">
              <h3>Go Further With The Let's Booking App</h3>
              <p>
                Enjoy savings on chosen hotels and flights when you book through
                the
                 Let's Booking website. Additionally, earn One Key Cash for every
                booking made through the app.
              </p>
            </div>

            <div className="install-app">
              <img src={AppStoreImage} alt="" />
              <img src={PlayStoreImage} alt="" />
            </div>
          </div>

          <footer className="main-footer">
            <div className="main-footer-column">
              <h4>About Us</h4>
              <span>Our Story</span>
              <span>Work With Us</span>
              <span>Press &amp; Media</span>
              <span>Privacy &amp; Security</span>
            </div>
            <div className="main-footer-column">
              <h4>We Offer</h4>
              <span>Trip Sponsorship</span>
              <span>Last Minutes Flights</span>
              <span>Best Deals</span>
              <span>AI-Driven Search</span>
            </div>
            <div className="main-footer-column">
              <h4>Headquarters</h4>
              <span>England</span>
              <span>France</span>
              <span>Canada</span>
              <span>Iceland</span>
            </div>
            <div className="main-footer-column">
              <h4>Travel Blogs</h4>
              <span>Bali Travel Guide</span>
              <span>Sri Travel Guide</span>
              <span>Peru Travel Guide</span>
              <span>Swiss Travel Guide</span>
            </div>
            <div className="main-footer-column">
              <h4>Activities</h4>
              <span>Tour Leading</span>
              <span>Cruising &amp; Sailing</span>
              <span>Camping</span>
              <span>Kayaking</span>
            </div>
            <div className="main-footer-column">
              <h4>Service</h4>
              <span>Report Error</span>
              <span>Ask Online</span>
              <span>Travel Insurance</span>
            </div>
          </footer>
          <div className="footer-bottom-bar">
            <span>
              <i className="fa-regular fa-copyright"></i> Copyright Mohammad Alqasem
            </span>
            <span>
              <i className="fa-regular fa-envelope"></i> mohaalqasem333@gmail.com
            </span>
            <strong>
              "Lets Booking: Seamless Journeys, Unrivalled Travel Wisdom!"
            </strong>
            <span>
              <i className="fa-solid fa-location-dot"></i> Amman, Jordan
            </span>
            <span>
              <i className="fa-solid fa-phone"></i> +962 7 7992 3047
            </span>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
