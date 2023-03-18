import {NavLink, Outlet} from "react-router-dom";
import {AndreyHead} from "./AndreyHead";

import "../css/Root.css"

export function Root(props) {
    return(
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}>About me</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/skills"}>Skills</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/resume"}>Resume</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="body">
                <AndreyHead style={{"width": "33%", "height": "1000px"}}></AndreyHead>
                <div>
                    <Outlet/>
                </div>
            </main>
        </div>
    )
}