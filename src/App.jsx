import Crew from "./components/crew/Crew";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Homepage from "./components/home/HomePage";
import fetchData from "./api/ApiClient";

function App() {
  const [companyData, setCompanyData] = useState();
  const [crewData, setCrewData] = useState();

  useEffect(() => {
    fetchData("company").then((response) => {
      setCompanyData(response);
    });
  }, []);

  useEffect(() => {
    fetchData("crew").then((response) => {
      let likeList = JSON.parse(localStorage.getItem("likes"));
      if (!likeList) {
        likeList = [];
      }
      const updatedList = response.map((crew) => {
        if (likeList.includes(crew.id)) {
          return { ...crew, liked: true };
        } else {
          return crew;
        }
      });
      setCrewData(updatedList);
    });
  }, []);

  const updateCrewLike = (crewId) => {
    const likedCrew = crewData.find(({ id }) => id === crewId);
    likedCrew.liked = !likedCrew.liked;
    let likeList = JSON.parse(localStorage.getItem("likes"));
    if (!likeList) {
      likeList = [];
    }
    if (likedCrew.liked === true) {
      likeList.push(crewId);
      localStorage.setItem("likes", JSON.stringify(likeList));
    } else if (likedCrew.liked === false) {
      let itemIndex = likeList.indexOf(crewId);
      likeList.splice(itemIndex, 1);
      localStorage.setItem("likes", JSON.stringify(likeList));
    }
    const index = crewData.findIndex(({ id }) => id === crewId);
    setCrewData([
      ...crewData.slice(0, index),
      likedCrew,
      ...crewData.slice(index + 1, crewData.length),
    ]);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                crewData={crewData}
                updateCrewLike={updateCrewLike}
                companyData={companyData}
              />
            }
          />
          <Route
            path="crew"
            element={
              <Crew crewData={crewData} updateCrewLike={updateCrewLike} />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
