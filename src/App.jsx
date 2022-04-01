import { useEffect, useState } from "react";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Contact } from "./components/contact";
import { Gallery } from "./components/gallery";
import { Header } from "./components/header";
import JsonData from "./data/data.json";
import axios from "axios";
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

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await axios.get(`https://api.emailjs.com/api/v1.1/history`, {
  //       params: {
  //         user_id: "DpWVZFAGGqTb_5sIi",
  //         accessToken: "ytHg7XQNVeriFw74uM5_L"
  //       }
  //     })
  //     console.log(res.data)
  //   }
  //   getData()
  // }, [])

  return (
    <div>
      <Header data={landingPageData.Header} />
      <Gallery data={landingPageData.Gallery} />
      {/* <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
