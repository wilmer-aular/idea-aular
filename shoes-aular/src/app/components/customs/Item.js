import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <>
            <div className="col-sm-3 text-center feature">
                <div className="wrapper">
                    <>
                        <div className="hover" style={{ backgroundImage: `url(${item.imageURL})`, paddingTop: "55%", backgroundPosition: "top center", backgroundSize: "100%" }}>
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
                    <h5 style={{ fontSize: 'inherit', cursor: "pointer" }}><strong>{item.description}</strong></h5>
                    <h5 style={{ fontSize: '14px', cursor: "pointer" }}><strong>{item.brand}</strong> {item.model}.</h5>
                    <span style={{ fontSize: 'inherit', cursor: "pointer" }}>$ {item.price}.</span>
                </div>
            </div>
        </>
    )
}

export default Item;