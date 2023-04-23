import logo from "../../assets/logo.png"
import "./styles.scss"

export function Navbar() {
    return (
        <div className="navbar">
            <a href="">
                <img src={logo} alt="logo-image" className="logo" />
            </a>
            <div>
                <input type="text" />
                <button>
                    <i class="bi bi-search"></i>
                </button>
            </div>

            <div className="icons">
                <i class="bi bi-person"></i>
                <i class="bi bi-suit-heart"></i>
                <i class="bi bi-cart"></i>
            </div>
        </div>
    )
}