import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import Page from './pages/Page';

const NavBar = styled.nav`
    ul {
        display: flex;
        flex-direction: row;
        li {
            list-style-type: none;
            padding: 10px 25px;
            a {
                text-decoration: none;
                color: #000;
            }
        }
    }
`;

function App() {
    return (
        <Router>
            <NavBar>
                <ul>
                    <li>
                        <Link to="/page/1">Page 1</Link>
                    </li>
                    <li>
                        <Link to="/page/2">Page 2</Link>
                    </li>
                </ul>
            </NavBar>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/page/1" />
                </Route>
                <Route path="/page/:pageId" key={window.location.pathname}>
                    <Page />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
