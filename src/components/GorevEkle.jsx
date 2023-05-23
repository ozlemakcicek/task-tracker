import { useState } from "react";

const GorevEkle = ({postGorev,gorevler}) => {
 
  const[day,setDay]=useState("")
  const[text,setText]=useState("")


 
const [goster, setGoster] = useState(true);


const gonder=(e)=>{
  e.preventDefault()

  postGorev({text:text,day:day,id:gorevler.length+1,bitti:false})
 setDay("")
setText("")}


 
  return (
    <div >
      <header className="header">
        <h1>Task Tracker</h1>
        <button
          className="btn" 
          onDoubleClick={()=>setGoster(!goster)}
         
        >
           Show Add Text Bar
        </button>


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
