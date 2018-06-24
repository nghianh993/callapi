import React, { Component } from 'react';
import './App.css'
import Menu from './components/Menu/Menu';
import router from './router';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu />
                    <div className="container">
                        <div className="row">
                            {this.showContentMenu(router)}
                        </div>
                    </div>
                </div>
            </Router>
        );
    }

    showContentMenu = router => {
        var result = null;
        if(router.length > 0) {
            result = router.map((item, index) => {
                return (
                    <Route
                        key={index}
                        path={item.path}
                        exact={item.exact}
                        component={item.main}
                    />
                );
            });
        }
        
        return <Switch>{result}</Switch>;
    }
}

export default App;
