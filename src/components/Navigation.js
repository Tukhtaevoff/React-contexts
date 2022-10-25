import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <>
           <nav>
               <ul>
                  <li>
                    <Link to={"/home"}>Home page</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact page</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About page</Link>
                  </li>
               </ul>
           </nav>
        </>
    )
}

export default Navigation;