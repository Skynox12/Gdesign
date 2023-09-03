import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
          <Link to="/Gdesign/">Home</Link>
          <Link to="/Gdesign/ce-que-nous-faisons">Ce que nous faisons</Link>
          <Link to="/Gdesign/">Nos travaux</Link>
          <Link to="/Gdesign/">Présentation</Link>
          <Link to="/Gdesign/">Nous contacter</Link>
        </div>
    )
}

export default Navbar