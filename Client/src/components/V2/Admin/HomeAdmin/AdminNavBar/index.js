import React from 'react';

import './adminNavBar.scss';
import { Nav } from 'react-bootstrap';

const AdminNavBar = () => {
    const currentLocation = window.location.pathname.toString();
    return (
        <div id="admin-navbar">
            <Nav justify variant="tabs" activeKey={currentLocation}>
                <Nav.Item>
                    <Nav.Link href="/admin">Accueil</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/admin/informations">Informations</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/admin/produits">Mes Produits</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/admin/promotions">
                        Mes Promotions
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/admin/boutique">
                        Ma Boutique En Ligne
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default AdminNavBar;