import { Link } from "react-router-dom";

const Item = ({ item }) => {

    return (
        <>
            <div className="col-sm-4 text-center feature">
                <div className="wrapper">
                    <>
                        <div className="hover" style={{ backgroundImage: `url(${item.imgUrl})`, paddingTop: "55%", backgroundPosition: "top center", backgroundSize: "100%" }}>
                        </div>
                        <div className="text">
                            <div className="innerBorder" style={{ paddingTop: "18%" }}>
                                <div className="modal-video-container">
                                    <Link to={`/detail/${item.id}`} style={{ color: 'white', fontSize: '30px', cursor: "pointer" }}>
                                        SEE DETAIL
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
                <div >
                    <h5 style={{ fontSize: 'inherit', cursor: "pointer" }}><strong>{item.type}</strong> in {item.country}.</h5>
                    <h5 style={{ fontSize: '14px', cursor: "pointer" }}>{item.city}.</h5>
                    <span style={{ fontSize: 'inherit', cursor: "pointer" }}>$ {item.price}.</span>
                </div>
            </div>
        </>
    )
}

export default Item;