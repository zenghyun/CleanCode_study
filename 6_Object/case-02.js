/**
 * Computed Property Name
 */

import React, { useState, Fragment } from 'react';

const [state, setState] = useState({
    id: '',
    password: '',
});

const handleChange = e => {
    setState({
        [e.target.name] : e.target.value, // [e.target.name]과 같이 property를 동적으로 다룰 수 있음 
    });
};

return (
    <React.Fragment>
        <input value={state.id} onChange={handleChange} name="password"/>
        <input value={state.password} onChange={handleChange} name="name"/>
    </React.Fragment>
)