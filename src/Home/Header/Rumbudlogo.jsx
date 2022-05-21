import './rumbudlogo.css';
import Rumbud from '../../icon/rumbud.svg';

function Rumbulog(){
    return(
        <div className='logo'>
            <a href='/'>
                <img src={Rumbud} className='Rumbud'></img>
            </a>
        </div>
    );
}

export default Rumbulog;