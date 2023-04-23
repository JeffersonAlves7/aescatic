import logo from "../../assets/logo.png"
import {navbar, icons, logoImage, buscar} from "./styles.module.css"

export function Navbar() {
    return (
        <div className={navbar}>
            <a href="">
                <img src={logo} alt="logo-image" className={logoImage} />
            </a>
            <div className={buscar}>
                <input type="text" placeholder="Buscar"/>
                <button>
                    <i class="bi bi-search"></i>
                </button>
            </div>

            <div className={icons}>
                <i class="bi bi-person"></i>
                <i class="bi bi-suit-heart"></i>
                <i class="bi bi-cart"></i>
            </div>
        </div>
    )
}