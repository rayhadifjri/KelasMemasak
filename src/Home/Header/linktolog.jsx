import { Link } from 'react-router-dom';
import './linktologo.css';

function Ling(){
    return(
        <div className="Linkto">
            <div className="signup">
                <a href="../../log/signup">SIGN UP</a>
            </div>
            <div className="login">
                <a href="../../log/login">LOGIN</a>
            </div>
        </div>
    );
}

export default Ling;