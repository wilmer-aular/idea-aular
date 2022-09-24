import Item from "./Item"

const ListItems = ({ list }) => {

    return (
        <>
            <section id="items" className="features features-2" >
                <div className="container">
                    <div className="row" style={{ marginTop: "0px" }}>
                        <div className="col-md-1 col-md-offset-1 col-sm-12"></div>
                        <div className="col-md-10 col-md-offset-1 col-sm-12 text-center">
                            <h3>Find your ideal footwear</h3>
                            <p>If that pair of black shoes you have in your WARDROBE makes you smile, they are worth more than you think.</p>
                        </div>
                    </div>
                    <div className="row">
                        {
                            list.length ?
                                list?.map((i, index) => (
                                    <Item key={index} item={i} />
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

export default ListItems;
