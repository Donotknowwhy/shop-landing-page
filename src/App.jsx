import { useEffect, useState } from "react";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Contact } from "./components/contact";
import { Gallery } from "./components/gallery";
import { Header } from "./components/header";
import JsonData from "./data/data.json";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "./assets/scss/index.scss"

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
      </HelmetProvider>
    </div>
  );
};

export default App;
