import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListWithImage } from "@src/utils/util"

const ListProperties = ({ list }) => {
    const [entities, setEntities] = useState([])

    useEffect(() => {
        if (list.length) {
            setEntities(getListWithImage(list));
        } else {
            setEntities([]);
        }
    }, [list, setEntities])
    return (
        <>
            <section id="properties" className="features features-2" >
                <div className="container">
                    <div className="row" style={{ marginTop: "0px" }}>
                        <div className="col-md-1 col-md-offset-1 col-sm-12"></div>
                        <div className="col-md-10 col-md-offset-1 col-sm-12 text-center">
                            <h3>Find your ideal home</h3>
                            <p>Finding your dream home is a lot like finding the perfect partner. It might take a while, but when you find the one, you know you’ll always have the support of someone who just gets you. And when you find your dream home, you’ll always have the perfect place to unwind and make memories.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {
                            entities.length ?
                                entities?.map((i, index) => (
                                    <div key={index} className="col-sm-4 text-center feature">
                                        <div className="wrapper">
                                            <>
                                                <div className="hover" style={{ backgroundImage: `url(${i.imgUrl})`, paddingTop: "55%", backgroundPosition: "top center", backgroundSize: "100%" }}>
                                                </div>
                                                <div className="text">
                                                    <div className="innerBorder" style={{ paddingTop: "18%" }}>
                                                        <div className="modal-video-container">
                                                            <Link to={`/detail/${index}/${i.indexImg}`} style={{ color: 'white', fontSize: '30px', cursor: "pointer" }}>
                                                                SEE DETAIL
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        </div>
                                        <div >
                                            <h5 style={{ fontSize: 'inherit', cursor: "pointer" }}><strong>{i.type}</strong> in {i.country}.</h5>
                                            <h5 style={{ fontSize: '14px', cursor: "pointer" }}>{i.city}.</h5>
                                            <span style={{ fontSize: 'inherit', cursor: "pointer" }}>$ {i.price}.</span>
                                        </div>
                                    </div>
                                )) : (
                                    <div className="col-sm-12 text-center feature ">
                                        <h4 style={{ color: "#898585" }}>No data to display</h4>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default ListProperties;
