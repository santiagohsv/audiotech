import { Link } from "react-router-dom";
import "./styles.css";

const HomePage = () => {
  return (
    <div className="main-homepage">
  
      <div className="welcome-container">
        <h1 className="welcome-title">BIENVENIDOS A NUESTRA TIENDA ONLINE</h1>
        <div className="btn-container">
          <button>
            <Link to="productos">IR A TIENDA</Link>
          </button>
        </div>
      </div>

      <div className="brand-main-container">

        <h2>MARCAS</h2>

        <div className="brand-container">
          <div className="brand-card">
            <img
              src="https://d1jtxvnvoxswj8.cloudfront.net/logo/stores/3/akai_pro_header_logo.png"
              alt="AKAI"
            />
          </div>
          <div className="brand-card">
            <img
              src="https://cdn.microfusa.com/tienda/pub/media/amasty/shopby/option_images/slider/MF_Logo_Roland.png"
              alt="ROLAND"
            />
          </div>
          <div className="brand-card">
            <img
              src="https://cdn.microfusa.com/tienda/pub/media/amasty/shopby/option_images/slider/MF_Logo_Universal_Audio.png"
              alt="UNIVERSAL AUDIO"
            />
          </div>
          <div className="brand-card">
            <img
              src="https://cdn.microfusa.com/tienda/pub/media/amasty/shopby/option_images/slider/Solid_State_Logic_small.png"
              alt="SOLID STATE LOGIC"
            />
          </div>
          <div className="brand-card">
            <img
              src="https://cdn.microfusa.com/tienda/pub/media/amasty/shopby/option_images/slider/krk1_small_1.png"
              alt="KRK"
            />
          </div>
          <div className="brand-card">
            <img
              src="https://cdn.microfusa.com/tienda/pub/media/amasty/shopby/option_images/slider/Pioneer_dj_small.png"
              alt="PIONEER"
            />
          </div>
          <div className="brand-card">
            <img
              src="https://cdn.microfusa.com/tienda/pub/media/amasty/shopby/option_images/slider/MF_Logo_Native_Instruments.png"
              alt="NATIVE INSTRUMENTS"
            />
          </div>
        </div>
      </div>

      <div className="information-container">
        <div className="information-card">
          <img
            src="https://img.icons8.com/ios/48/000000/shipped.png"
            alt="shipping"
          />
          <h3>ENVIOS A TODO EL PAIS</h3>
        </div>
        <div className="information-card">
          <img
            src="https://img.icons8.com/ios/48/000000/security-checked.png"
            alt="security-checked"
          />
          <h3>COMPRA PROTEGIDA</h3>
        </div>
        <div className="information-card">
          <img
            src="https://img.icons8.com/ios/48/000000/headset.png"
            alt="headset"
          />
          <h3>SOPORTE ESPECIALIZADO</h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
