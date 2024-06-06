import { useEffect,useState } from "react";
import { db } from "../firebse";


const IncomingData = () => {

    const [cricketData,setCricketData]=useState([])


    useEffect(()=>{
       fetchData();
    },[])

    const fetchData = async() => {
    const response=db.collection('todos');
    const data=await response.get();
    data.docs.forEach(item=>{
     setCricketData([...cricketData,item.data()])
    })
    }
   return(
    <div>
        {
        cricketData && cricketData.map(cricket=>{
          return(
            <div className="flex flex-col">
              <h4>{cricket.Wickets}</h4>
              <p>{ cricket.total}</p>
            </div>
          )
        })
      }
    </div>
   )
}
export default IncomingData;