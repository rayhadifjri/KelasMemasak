import Facebook from '../../sosmed/facebook1.svg';
import Twitter from '../../sosmed/Twitter1.svg';
import Instagram from '../../sosmed/instagram1.svg';
import Tiktok from '../../sosmed/Tiktok1.svg';
import './Nav.css';

function Sosmedia(){
    return(
        <div className='Sosialm'>
            <a href='facebook.com'><img src={Facebook} className='first'></img></a>
            <a href='twitter.com'><img src={Twitter}></img></a>
            <a href='instagram.com'><img src={Instagram}></img></a>
            <a href='tiktok.com'><img src={Tiktok}></img></a>
        </div>

    );
}

export default Sosmedia;