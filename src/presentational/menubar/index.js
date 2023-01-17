import { HomeOutline } from 'react-ionicons'
import "./styles.css"
const Menubar = () => { 
    return (
        <div class="navigation">
            <div class="menuToggle"><i></i></div>
                <div class="menu">
                    <ul>
                        <li styles="--i:0.1s;"><HomeOutline color={'#00000'} height="250px" width="250px"/></li>
                    </ul>
                </div>
        </div>
    )
}

export default Menubar