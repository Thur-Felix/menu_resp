import { useState } from "react"
import  "./index.css"
import { List, X } from "@phosphor-icons/react"

function Header() {

    const [abrirFechar, setAbrirFechar] = useState(false)
    function HadleAbrirFecharMenu() {
        if(abrirFechar) {
            setAbrirFechar(false)
                return        
        }
        setAbrirFechar(true)
    }

    return(
        <header>
            <div className="menu-mobile">
                <div className="botao-menu">
                    <button onClick={HadleAbrirFecharMenu}>{setAbrirFechar==true ? <X size={32} /> : <List size={32} />}</button>
                 </div>
            </div>

            <div className={`menu ${abrirFechar==true ? "" : "close"}`}>
                <nav>
                    <a href="">Config</a>
                    <a href="">Sobre Nós</a>
                    <a href="">Login</a>
                </nav>
            </div>
        </header>
    )
}

export default Header 