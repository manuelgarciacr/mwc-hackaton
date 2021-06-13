import { FC, ReactElement } from "react";
import { useHistory } from "react-router-dom";

const Header: FC<{ back: Function, pass: number }> = ({ back, pass = 0 }): ReactElement => {
    const history = useHistory();
    const text = pass === 1 ? "Personal Info."
        : pass === 2 ? "Localización"
        : "Verificación por tarjeta"


    return (
        <div className="headerContainer">
            {pass === 0 ? <p>¿Ya tienes cuenta? <span>Inicia sesion</span></p> 
                : <div>
                    <span className="volver" onClick={() => history.goBack()}>&lt; Volver</span>
                    <p>PASO 0{pass}/03<br/>{text}</p>
                    </div>}
        </div>
    )
};
export default Header;