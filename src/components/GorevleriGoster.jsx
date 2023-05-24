import React from "react";
import { FaTimesCircle } from "react-icons/fa";
//!https://react-icons.github.io/react-icons


//*************** */



const GorevleriGoster = ({gorevler,setGorevler}) => {
  
const degistir=(id)=>{
const newArray=gorevler.map((eleman)=>
  
  eleman.id==id ? {...eleman ,bitti:!eleman.bitti } : eleman )
setGorevler(newArray)
}


  return (
    <div >
      {gorevler.map(({id,text,day,bitti}) => {
        return (
          <div  key={id} className={bitti? "done": "gorev" } onDoubleClick={()=>degistir(id)}>
            <h3>
              {text}
              <FaTimesCircle style={{ color: "red" }} 
              onClick={()=>setGorevler(gorevler.filter((a)=>a.id!==id))}

              />
            </h3>
            <h6>{day}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default GorevleriGoster;




















// home dan gonderilen ismi burda yakalayalim {gorevler}.Sonra yeni veriler gelince onlarin icinde asagida dolasalim ve h3 ile h6 ya yazdiralim onlari.forevler Arrayinde id,text,day ve bitti var.bunlarin icinde map ile gezin ve key={id} yaz ust div e.h3 ve h6 icinde text ve day yaz ki yeni gelnler yazilsin.


// gonderilen tamirciyi karsila.simdi h3 ve h6 nin div ine onDoubleClick yapilinca  id si degissin diyelim ve bu degstir fonksiyonunu yukarida tanimlayalim.Yine burda gorevler in icinde map ile elemanlarda dolasalim.dolasilan herbir elemanin id si Array deki id ye esit ise {} icinde elemanlarin hepsini ve bitti yi de elemanin bittisinin tersini, degil ise de sadece eleman i yazdir. ve bunu bir fonksiyona esitle.bu fonksiyonu da setGorevlere yazdir.

