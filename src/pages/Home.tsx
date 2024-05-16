import React, { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import RenderResult from "../components/RenderResult";
import { searchNews } from "../utils/axioshelper";
import { useStore } from "../utils/zustStore";

const Home: React.FC = () => {
  const { news, setNews } = useStore();
  const [searchedString, setSearchedString] = useState("foo");

  const resetFn = () => {
    setSearchedString("foo");
    searchNews("foo", setNews);
  }

  useEffect(() => {
    searchNews(searchedString, setNews);
  }, [searchedString]);

  return (
    <div className="home_container">
      <Searchbar setSearchedString={setSearchedString} resetFn={resetFn}/>
      <RenderResult />
    </div>
  );
};

export default Home;
