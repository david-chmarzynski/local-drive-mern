import React from 'react';

import './homeadmin.scss';

// Import Components
import AdminNavBar from './AdminNavBar';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const HomeAdmin = () => {
    return (
        <div id="home-admin">
            <AdminNavBar />
        </div>
    );
};

export default HomeAdmin;