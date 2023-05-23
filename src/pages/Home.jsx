import { useState, useEffect } from "react";
import GorevEkle from "../components/GorevEkle";
import GorevleriGoster from "../components/GorevleriGoster";

import Data from "../helper/Data";


//******* */


import axios from "axios";

const Home = () => {
console.log(Data);

const [gorevler,setGorevler]=useState([]);

// const getGorevler=()=>{
//  
// }
console.log(gorevler);
useEffect(()=>{
   setGorevler(Data)
},[])




const postGorev=(yeniVeri)=>{

  setGorevler([...gorevler,yeniVeri]);
console.log(yeniVeri);
}
console.log(gorevler);

  return (
    <div>
      <GorevEkle postGorev={postGorev} gorevler={gorevler}/>

      <GorevleriGoster gorevler={gorevler} setGorevler={setGorevler} />
    </div>
  );
};

export default Home;
