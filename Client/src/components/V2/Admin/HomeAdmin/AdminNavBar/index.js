import React, { useState } from 'react';

import './adminNavBar.scss';
import { Card, Accordion, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import classNames from 'classnames';

const AdminNavBar = () => {
    const currentLocation = window.location.pathname.toString();
    const [open, setOpen] = useState(null);
    console.log(open)
    
    const handleClickMenu = () => {
        if (open === null) {
            setOpen(true);
        } else if (open === true) {
            setOpen(false);
        } else if (open === false) {
            setOpen(true);
        }
    }

    return (
        <div id="admin-navbar" className={classNames({"deployed": open}, {"undeployed": open === false })}>
            <Icon name="bars" onClick={handleClickMenu} size='large' className={classNames({"deployed": open}, {"undeployed": open === false })}/>
            {open && (
                <Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      BOUTIQUE
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                  <Link to="/admin/boutique"><Card.Body>Ma Boutique</Card.Body></Link>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      PRODUITS
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                  <Link to="/admin/produits"><Card.Body>Tous Mes Produits</Card.Body></Link>
                  </Accordion.Collapse>
                  <Accordion.Collapse eventKey="1">
                  <Link to="/admin/add/product"><Card.Body>Ajouter Produit</Card.Body></Link>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                      PROMOTIONS
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>Modifier Promotion</Card.Body>
                  </Accordion.Collapse>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>Ajouter Promotion</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            )}
        </div>
    );
};

export default AdminNavBar;


{/* <Nav justify variant="tabs" activeKey={currentLocation}>
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
            </Nav> */}