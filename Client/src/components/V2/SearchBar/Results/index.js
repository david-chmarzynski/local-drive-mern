import React from 'react';

import './results.scss';

import { ListGroup } from 'react-bootstrap';

const Results = ({ result }) => {
    console.log(result);
    return (
        <div id="results">
            <ListGroup>
                {result.map((element) => (
                    <ListGroup.Item key={element._id}>{element.local.name} - {element.local.zip}</ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default Results;