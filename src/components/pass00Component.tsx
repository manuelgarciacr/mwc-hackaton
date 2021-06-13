// import React, { Fragment, useState } from "react"
import { Link } from "react-router-dom";

import poligon31 from '../assets/icons/Polygon 3-1.png'
import poligon3 from '../assets/icons/Polygon 3.png'
import user from '../assets/icons/user.png'
import briefcase from '../assets/icons/briefcase.png'

export default function Pass00({ ...props }, mainState: number) {
    // const [state, setState] = useState(mainState)
    return (
        <div className="pass00Container">
            <div className="text">
                <h1>¡Únete a la comunidad!</h1>
                <p>Para empezar, dinos que cuenta te gustaría abrir.</p>
            </div>
            <div className="pass00Button">
                <img src={poligon31} alt="Developers Sign Up"/>
                <img src={user} alt="Developers Sign Up"/>
                <div className="text">
                    <b>Developers</b>
                    <p>Cuenta personas para entrar en el mundo dev</p>
                </div>
                <Link className="link" to="/pass01"></Link>
            </div>
            <div className="pass00Button">
                <img src={poligon3} alt="Business Sign Up"/>
                <img src={briefcase} alt="Business Sign Up"/>
                <div className="text">
                    <b>Business</b>
                    <p>Tienes o perteneces a una compañía</p>
                </div>
                <Link className="link" to="/pass01"></Link>
            </div>
        </div>
    )
}