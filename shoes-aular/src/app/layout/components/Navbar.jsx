
import Landing from './Landing'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from "../../components/commons";
import { useLocation } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { conectorServices } from '@src/services/api-conector';
import { getOuth, removeOuth } from '@src/services/storage.service';
const serviceCategories = conectorServices('Categories');

const Navbar = () => {
    const navegate = useNavigate();
    let [queryParams] = useSearchParams();
    const url = queryParams.get('url');
    const outh = getOuth();
    const [categories, setCategories] = useState([])
    const { pathname } = useLocation();
    const getPreviousUrl = () => {
        window.history.back();
    };

    const promise = useCallback(async (id) => {
        const categories = await serviceCategories.getAll();
        setCategories(categories)
    }, [setCategories]);

    const logout = () => {
        removeOuth();
        navegate('/login')
    }

    useEffect(() => {
        if (pathname === '/' || pathname.includes('/category')) {
            promise()
        }
    }, [pathname, promise])

    return (<>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <i className="fa fa-arrow-left"
                    style={{ color: '#adb5bd', marginRight: '10px', fontSize: '24px', cursor: 'pointer' }}
                    onClick={() => getPreviousUrl()}
                />
                <Link className="navbar-brand" to="/">
                    <img src="https://us.123rf.com/450wm/jkazanceva/jkazanceva1605/jkazanceva160500018/57040741-conjunto-de-zapatos-de-contorno-brillante-zapatilla-de-deporte-de-dibujos-animados-aislado-en-blanco.jpg?ver=6" alt="" width="50" height="44" />
                    <h1 className='title' style={{ marginLeft: 5, }}>Shoes Aular</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            pathname !== '/' &&
                            <li key='home' className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/#home'>Home</Link>
                            </li>
                        }


                        {
                            (pathname === '/' || pathname.includes('/category')) &&
                            <li key="categories" className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </span>
                                <ul className="dropdown-menu">
                                    {
                                        categories.map(i => (
                                            <li key={i.id}><Link className="dropdown-item" to={`/category/${i.id}`}>{i.name}</Link></li>
                                        ))
                                    }
                                </ul>
                            </li>
                        }
                        {
                            outh &&
                            <li key='myShopping' className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={`/myShopping/${outh.id}`}>My shopping</Link>
                            </li>
                        }

                    </ul>
                    <form className="d-flex" role="search">
                        {
                            outh ? (
                                <>
                                    <span style={{ marginTop: 7, marginRight: '10px' }}>
                                        <span className="text-primary">Hi </span>
                                        <span>{outh.user}</span>
                                    </span>

                                    {
                                        outh.role === 'admin' &&
                                        <Link to="/create_product" type="button" className="btn btn-primary">Create product </Link>
                                    }
                                    <Button variant="danger" textButton="Logout" style={{ marginLeft: 20 }} click={() => logout()} />
                                </>
                            )
                                :
                                (<>
                                    <Link to={`/register${url ? '?url=cart' : ''}`} type="button" className="btn btn-success">Register</Link>
                                    <Link to={`/login${url ? '?url=cart' : ''}`} type="button" className="btn btn-primary" style={{ marginLeft: 20 }}>Login</Link>
                                </>)
                        }
                    </form>
                </div>
                <Landing />
            </div>
        </nav>
    </>)

}

export default Navbar;