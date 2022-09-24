import Item from "./Item"

const ListItems = ({ list }) => {

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
                            list.length ?
                                list?.map((i, index) => (
                                    <Item key={index} property={i} />
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