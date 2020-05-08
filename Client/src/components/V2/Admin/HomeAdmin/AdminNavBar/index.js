import React from 'react';

import './adminNavBar.scss';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminNavBar = () => {
    const currentLocation = window.location.pathname.toString();
    return (
        <div id="admin-navbar">
            <Nav justify variant="tabs" activeKey={currentLocation}>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/admin">Accueil</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/admin/informations">Informations</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/admin/produits">Mes Produits</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/admin/promotions">Mes Promotions</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/admin/boutique">Ma Boutique En Ligne</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default AdminNavBar;