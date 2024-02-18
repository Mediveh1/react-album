import { render } from "react-dom";

import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import "./index.css"

export default function Pic (){
    const something=useLocation()
    const s = something.pathname.split('/');
    const id = s[s.length - 1];

    const [img, setImg] = useState("")




    useEffect(() => {
        const fetchedData = async () => {
            const response = await fetch(
                `https://picsum.photos/id/${id}/info`
            );
            const response1= await response.json()



            setImg(response1);
            console.log(response1)





        };
        fetchedData();
    }, [id])

    return (
        <div>
            <h1 className="title">React Photo Album</h1>

            <div className="container">

                   <div className="col">
                       {
                           img && <img className="selected-image" src={img.download_url}/>
                       }
                   </div>

                   <div className="col">
                       <div className="author">
                           <h1>Author</h1>
                           {
                               img && <h3>{img.author}</h3>
                           }
                       </div>
                   </div>



            </div>





        </div>
    )
}