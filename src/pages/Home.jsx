import { useState, useEffect } from "react";
import GorevEkle from "../components/GorevEkle";
import GorevleriGoster from "../components/GorevleriGoster";

import Data from "../helper/Data";


//******* */




const Home = () => {
console.log(Data);

const [gorevler,setGorevler]=useState([]);


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































//bu sekilde consolda bize ne cesit bir data geldiini goruruz.Array o.i.useState icine [] yaptik


// setGorevler vasitasi ile gorevlere Data yi ekleyelim.ve bunu acikta cagirinca sonsuz donguye girmesin diye useEffect ile sarmallayalim.

// asagida GorevleriGöster sayfasina gorevleri gonderip orda karsilayalim



//yeni veri girisi icin GorevEkle sayfasina gidecek fonksiyonu yazalim.Bu useState ile olmayacak.normal fonksiyon olacak.yine ayni Array e ekleyecegi icin setGorevlere ekliyoruz bu yeni veriyi.Ama eski veriler kalacak.Bunu [...gorevler] diyerek eski array kalacak diyerek yapiyorz.yeni veriyi de o array e ekliyoruz.Ve GorevEkle sayfasina gonderiyorz.



{
  /* GorevleriGoster sayfasinda verileri tiklayinca ustunu cizsin x ya basinca da silsin diye Arrayimizin tamircisini gonderelim o sayfaya.   */
}