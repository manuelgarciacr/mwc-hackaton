import './App.css';

import {
    BrowserRouter as Router,
} from "react-router-dom";

import Main from './components/mainComponent';

function App() {

    return (
        <Router>
            <Main />
        </Router>
    );
}

export default App;
