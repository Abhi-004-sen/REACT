import { IoSunnyOutline} from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

function Navbar({colorTheme1, colorChangeTheme2}) {
   

    return (
        <div className="nav-bar">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Login</li>
                <li>Signup</li>
                <button onClick={colorChangeTheme2}>

                    {/* {colorTheme1 ? (<IoSunnyOutline />) : (<FaMoon />)} */}
                    {/* or */}
                    {colorTheme1 === true ? (<IoSunnyOutline />) : (<FaMoon />)}


                </button>
            </ul>
        </div>
    )
}

export default Navbar