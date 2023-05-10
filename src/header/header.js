import {NavLink} from 'react-router-dom';

function Header(){
    return(
        <header>
            <table>
                <tbody>
                <tr>
                    <td>
                        <img src="../assets/img%20(Custom).png"/>
                    </td>
                    <td>
                        <h1>BoulderGrid</h1>
                    </td>
                </tr>
                </tbody>
            </table>
            <nav>
                <ul>
                    <li><NavLink to="/vendibles">Vendibles</NavLink></li>
                    <li><NavLink to="/rentables">Rentables</NavLink></li>
                    <li><NavLink to="/inmuebles">inmuebles</NavLink></li>
                    <li><NavLink to="/dañados">Dañado</NavLink></li>
                    <li><NavLink to="/reporte">Reporte</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;