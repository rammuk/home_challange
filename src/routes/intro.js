import logo from '../assets/images/logo.svg';
import '../assets/css/App.css';

export default function Intro() {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Frontend challange by Ram Mukmel
        </p>
            <a
                className="btn"
                href="/formPage"
                rel="noopener noreferrer"
            >
                Start
        </a>
        </div>
    );
}
