import React from 'react';
import Menu from "../Components/Menu";
import {SingleSearchBar} from "../Components/SearchBar";
import {Categories} from "../Components/Categories";
import AdvertisementImage from "../Components/Advertisement";

import adv from "../Assets/reklamagif.gif"

function Home() {
  return (
      <>
        <Menu/>
        <SingleSearchBar/>
          <Categories/>
          <AdvertisementImage link={adv}/>
      </>
  );
}

export default Home;
