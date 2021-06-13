import React, { useState } from "react";

import { useTheme } from "theming";
import styled from 'styled-components'
import { QuoteAltLeft } from '@styled-icons/boxicons-solid/QuoteAltLeft'
import Header from "./headerComponent";
import { BrowserRouter as Router, Redirect, Route, RouteComponentProps, Switch, useLocation } from "react-router-dom";
import Pass00 from "./pass00Component";
import Pass01 from "./pass01Component";
import Pass02 from "./pass02Component";


const RedZap = styled(QuoteAltLeft)`
  color: black;
  width: 1rem;
  alignSelf: start;
`
export default function Main() {
    const [state, setState] = useState(-1);
    const theme = useTheme();
    const coverStyle = {
        ...theme,
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        padding: '0 12%',
        lineHeight: '2rem'
    }
    const PrivateRoute = ({ Component, path, exact = false, pass }: Props): JSX.Element => {
        let location = useLocation();
        console.log("PASS", pass);
        const isRouteOk = pass <= state + 1 && pass < 3;
        // const message = 'Please log in to view this page'
        console.log("LOCATION", pass, state, isRouteOk, location)

        if (isRouteOk)
            setState(pass);
        return (
            <Route
                exact={exact}
                path={path}
                render={(props: RouteComponentProps) => {
                    return isRouteOk ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                // state: { 
                                //     message, 
                                //     requestedPath: path
                                // }
                            }}
                        />
                    )
                }
                }
            />
        );
    };

    const handleBack = (props: RouteComponentProps) => {
        props.history.goBack();
    };

    /* const PrivateRoute = ({ Component, path, exact = false, pass }: Props): JSX.Element => {
        const isRouteOk = pass < state;
        const message = 'Please log in to view this page'
        return (
            <Route
                exact={exact}
                path={path}
                render={(props: RouteComponentProps) =>
                    isRouteOk ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: NonAuthRoutes.login,
                                state: { 
                                    message, 
                                    requestedPath: path
                                }
                            }}
                        />
                    )
                }
            />
        );
    }; */

    return (
        <div className="mainContainer">
            <section className="cover">
                <div style={coverStyle}>
                    <RedZap /><br />
                    Nuwe es la plataforma que convierte el desarrollo
                    profesional, la búsqueda de trabajo y la conexión de
                    personas y empresas en un juego. Haciendo que puedas
                    centrarte en lo que te gusta, programar, diseñar, crear,
                    planear...<br />
                    <span className="square">┘</span>
                </div>
            </section>
            <section className="page">
                <Header back={handleBack} pass={state} />
                <Router>
                    <Switch>
                        {/* <Route exact path="/" render={props => {
                        setState(0);
                        return (
                            <Pass00 {...props} mainState={state} />
                        )
                    }} /> */}
                        <PrivateRoute path="/" exact={true} Component={Pass00} pass={0} />
                        <PrivateRoute path="/pass01" Component={Pass01} pass={1} />
                        <PrivateRoute path="/pass02" Component={Pass02} pass={2} />
                        <Route>
                            <Redirect
                                to={{
                                    pathname: "/"
                                }}
                            />
                        </Route>
                        {/* <Route path="/pass02" render={props => {
                        setState(2);
                        return (
                            <Pass02 {...props} mainState={state} />
                        )
                    }} /> */}
                    </Switch>

                </Router>
            </section>
        </div>
    )


}

interface Props {
    Component: React.FC<RouteComponentProps>
    path: string;
    exact?: boolean;
    pass: number
}



/* function PrivateRoute({children, ...rest }) {
                    let auth = useAuth();
    return (
      <Route
                    {...rest}
                    render={({ location }) =>
                        auth.user ? (
                            children
                        ) : (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: location }
                                }}
                            />
                        )
                    }
                />
    );
  } */
