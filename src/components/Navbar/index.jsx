import logo from "../../assets/logo.png"

export function Navbar(){
    return (
        <div className="navbar">
            <img src={logo} alt="" />
            <input type="text" />
            <i class="bi bi-suit-heart-fill"></i>
        </div>
    )
}