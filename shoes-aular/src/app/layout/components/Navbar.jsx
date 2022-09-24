import { categories } from './menu';
import Landing from './Landing'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Navbar = () => {
    const { pathname } = useLocation();
    const getPreviousUrl = () => {
        window.history.back();
    };
    return (<>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <i className="fa fa-arrow-left"
                    style={{ color: '#adb5bd', marginRight: '10px', fontSize: '24px', cursor: 'pointer' }}
                    onClick={() => getPreviousUrl()}
                />
                <Link className="navbar-brand" to="/">
                    <img src="/logo.jpeg" alt="" width="50" height="44" />
                    Poperties Sell
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li key='home' className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/#home'>Home</Link>
                        </li>

                        {
                            pathname === '/' &&
                            <li key="categories" className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </span>
                                <ul className="dropdown-menu">
                                    {
                                        categories.map(i => (
                                            <li key={i.id}><Link className="dropdown-item" to={`/category/${i.id}`}>{i.title}</Link></li>
                                        ))
                                    }
                                </ul>
                            </li>
                        }

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <Landing />
            </div>
        </nav>
    </>)

}

export default Navbar;