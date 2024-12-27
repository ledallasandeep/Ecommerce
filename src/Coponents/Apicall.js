// import { useState } from "react";

// function Appcall(){
//       const [movies , setMovies] = useState([]);

//       const MakeAPIcall= async ()=>{
//         const url = 'https://api.npoint.io/a63acb4563f9499357fa'
//        const response = await fetch(url);
//        const body = await response.json();
//        const items = body['results']
//        setMovies(items);
//        console.log(items)
//       }
// return(
//         <div className="flex  gap-10">
//             <h1 className="text-2xl font-bold">print API</h1>
//             <button onClick={MakeAPIcall} > Make API call</button>
//             {
//                 movies.map((movie)=>
//                 {
//                     return(
//                         <div className='flex flex-wrap'>
//                          <img src={movie['poster_path']}/>
//                             </div>
//                     )
//                 }
//                 )
//             }
//           </div>
// )};

// export default Appcall;