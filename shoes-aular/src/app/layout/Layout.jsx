import React from 'react';
import { Navbar } from './components';


const Layout = ({ children }) => {

    return (<>
        <div id="page-container">
            <Navbar />
            <main id="main-container">
                <div className="content">{children}</div>
            </main>
            {/* AQUI VA EL FOOTER */}
        </div>
    </>);
};

export { Layout };