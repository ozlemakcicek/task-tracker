import React from "react";
import { FaTimesCircle } from "react-icons/fa";
//!https://react-icons.github.io/react-icons


//*************** */




const GorevleriGoster = ({gorevler,setGorevler}) => {
  
const degistir=(id)=>{
const newArray=gorevler.map((eleman)=>{
  
return  eleman.id==id ? {...eleman ,bitti:!eleman.bitti } : eleman })
setGorevler(newArray)
}


  return (
    <div >
      {gorevler.map(({id,text,day,bitti}) => {
        return (
          <div  key={id} className={bitti? "done": "gorev" } onClick={()=>degistir(id)}>
            <h3>
              {text}
              <FaTimesCircle style={{ color: "red" }} />
            </h3>
            <h6>{day}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default GorevleriGoster;
