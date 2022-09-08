import { Link } from "react-router-dom";

const Item = ({ index, property }) => {

    return (
        <>
            <div className="col-sm-4 text-center feature">
                <div className="wrapper">
                    <>
                        <div className="hover" style={{ backgroundImage: `url(${property.imgUrl})`, paddingTop: "55%", backgroundPosition: "top center", backgroundSize: "100%" }}>
                        </div>
                        <div className="text">
                            <div className="innerBorder" style={{ paddingTop: "18%" }}>
                                <div className="modal-video-container">
                                    <Link to={`/detail/${index}`} style={{ color: 'white', fontSize: '30px', cursor: "pointer" }}>
                                        SEE DETAIL
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
                <div >
                    <h5 style={{ fontSize: 'inherit', cursor: "pointer" }}><strong>{property.type}</strong> in {property.country}.</h5>
                    <h5 style={{ fontSize: '14px', cursor: "pointer" }}>{property.city}.</h5>
                    <span style={{ fontSize: 'inherit', cursor: "pointer" }}>$ {property.price}.</span>
                </div>
            </div>
        </>
    )
}

export default Item;