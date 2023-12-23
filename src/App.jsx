import { useEffect } from "react";
import {fetchDataFromApi} from "./utils/api"

function App() {

    useEffect(()=>{
           ApiTest()
        },[])
   const ApiTest = () => {
    fetchDataFromApi('/movie/popular')
    .then((res)=>{
      console.log(res);
    })
   }

  return (
    <div>
    CineHub
    </div>
  );
}

export default App;
