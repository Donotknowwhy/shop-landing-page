import { Affix } from 'antd';
import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import SmoothScroll from "smooth-scroll";
import "./App.css";
import "./assets/scss/index.scss";
import { Contact } from "./components/contact";
import { Gallery } from "./components/gallery";
import { Header } from "./components/header";
import JsonData from "./data/data.json";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);


  return (
    <div>
      <HelmetProvider>
        <Helmet prioritizeSeoTags>
          <title>Phụ kiện 99</title>
          <meta name="phukien99" />
          <meta
            id="phukien99"
            name="phukien99"
            content="phukien99, vercel"
          />
          <meta property="og:title" content="phukien99" />
        </Helmet>
        <Header data={landingPageData.Header} />
        <Gallery data={landingPageData.Gallery} />
        {/* <Team data={landingPageData.Team} /> */}
        <Contact data={landingPageData.Contact} />
        <Affix offsetBottom={20} style={{ position: 'fixed', right: '10px' }} >
          <a
            href='#contact'
            className="button"
            style={{ fontSize: '25px', padding: '15px' }}
          >
            ĐẶT HÀNG NGAY
          </a>
        </Affix>
      </HelmetProvider>
    </div>
  );
};

export default App;
