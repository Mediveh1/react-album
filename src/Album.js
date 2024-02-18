import React, { useEffect, useState } from "react";
import {  useNavigate} from "react-router-dom";
import Masonry ,{ResponsiveMasonry}from "react-responsive-masonry";
import "./index.css"


function Album() {
    const navigate=useNavigate()
    const [pics, setPics] = useState([]);
    const [pages, setPages] = useState(0);
    useEffect(() => {
        const fetchedData = async () => {
            const response = await fetch(
                `https://picsum.photos/v2/list?page=${pages}&limit=8`
            );
            const data = await response.json();
            setPics((prev) => [...prev, ...data]);

        };
        fetchedData();
    }, [pages]);
    return (
        <div>
            <h2 className="mt-3 mb-4 text-center">React Photo Album </h2>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry  columnsCount={3} gutter="6px">
                    {pics.map((image) => (
                        <div>
                            <img
                                className="masonry-image"
                                id={image.id}
                                src={image.download_url}
                                style={{ width: "100%" }}
                                onClick={()=>{navigate(`/Pic/${image.id}` , {state:{pics}})}}
                            />
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            <div className="more"><button type="button" className="load-more" onClick={() => setPages((prev) => prev + 1)}>
                Load more
            </button></div>

        </div>
    );
}

export default Album;