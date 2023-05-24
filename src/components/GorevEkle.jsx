import { useState } from "react";

// gonderilen postGorev i yakala.inputa veri girilince Array in text ve day i degisecegi icin onlari useState ile tanimlayalim.bunlar string ifade oldugu icin ("") olur.inputlara gidip onChange olunca girilen veri yi yakala. diyelim e.target.value yaparak.bu inputlar backend e gonderilecegi icin value eklenir.home dan bize gonderilen postGorevi karslariz.ve submit edilince yeni girilen verinin text,day, id si ve bitti sini false olarak almasini isteriz.id si Array in length nin +1 fazlasi olmali.useState i de baslangicta true ya esitlemeliyiz.setDay ve setText ise bos su an.   
const GorevEkle = ({postGorev,gorevler}) => {
 
  const[day,setDay]=useState("")
  const[text,setText]=useState("")


 // 
const [goster, setGoster] = useState(true);


const gonder=(e)=>{
  e.preventDefault()

  postGorev({text:text,day:day,id:gorevler.length+1,bitti:false})
 setDay("")
setText("")}

// butona onclick yapildiginda neyse tersini gostersin dedik
 
  return (
    <div >
      <header className="header">
        <h1>Task Tracker</h1>
        <button
          className="btn" 
          onClick={()=>setGoster(!goster)}
         
        >
           Show Add Text Bar
        </button>

{/* hem goster calissin hem de submit calissini beraber formda yapariz  */}
      </header>
        {goster &&  <form onSubmit={gonder}>
          <div className="form-control">
            <label htmlFor="text">Task</label>
            <input
              id="text"
              type="text"
              name="text"
              placeholder="Add Task"
value={text}
              onChange={(e)=>setText(e.target.value)}
             
            />
          </div>
          <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input
              id="day"
              type="date"
              name="day"
              placeholder="Add Task"
  value={day}
              onChange={(e)=>setDay(e.target.value)}
            
            />
          </div>
          <div>
            <button className="btn btn-submit" type="submit">
              Save Task
            </button>
          </div>
        </form>}
      
    </div>
  );
};

export default GorevEkle;
