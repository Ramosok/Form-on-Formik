// libraries
import React from 'react';
// styles
import './App.css';
//components
import Login from './Login';
import SignUp from './SignUp';

const App = () => {
    return (
        <div className="container">
          <div>
            <h1>Anywhere in your app!</h1>
            <Login />
            <SignUp />
          </div>
        </div>
    );
};

export default App;
