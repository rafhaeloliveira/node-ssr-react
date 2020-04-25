import React from 'react';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <h1>Home</h1>
        )
    }
}

export default {
    loadData: () => console.log('loadData'),
    component: Home
}