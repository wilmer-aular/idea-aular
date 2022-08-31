import { menu } from './menu';
import Landing from './Landing'

const Navbar = () => {
    return (<>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">
                    <img src="/logo.jpeg" alt="" width="50" height="44" />
                    Poperties Sell
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            menu.map((i, index) => (
                                i.title !== 'Services' ? (
                                    <li key={index} className="nav-item">
                                        <a className="nav-link active" aria-current="page" href={i.href}>{i.title}</a>
                                    </li>
                                ) :
                                    (
                                        <li key={index} className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href={i.href} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {i.title}
                                            </a>
                                            <ul className="dropdown-menu">
                                                {
                                                    i.services.map(i => (
                                                        <li key={i.id}><a className="dropdown-item" href={i.href}>{i.title}</a></li>
                                                    ))
                                                }
                                            </ul>
                                        </li>
                                    )
                            ))
                        }
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>


            </div>
            <Landing />
        </nav>
    </>)

}

export default Navbar;