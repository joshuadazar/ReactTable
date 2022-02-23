import { useEffect } from 'react';
import { messageService } from '../services/service';

let state:boolean
const sendMessage= ()=> {
    state = !state
    console.log(state,'state changed');
    messageService.sendMessage(state);
    
    }
const Header = () => {


     useEffect(() => {
        messageService.getMessage().subscribe((value) => {
            state= value
        })
     });
    
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav>
            <button onClick={  sendMessage} >change behavior</button>
        </header>
    );
}

export default Header;