import { useEffect } from 'react';
import { messageService } from '../services/service';

let state: boolean
const sendMessage = () => {
    state = !state
    console.log(state, 'state changed');
    messageService.sendMessage(state);

}
const Header = () => {


    useEffect(() => {
        messageService.getMessage().subscribe((value) => {
            state = value
        })
    });

    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">React Demo</a>
                    
                </div>
            </nav>
            <button onClick={sendMessage} >change behavior</button>
        </header>
    );
}

export default Header;