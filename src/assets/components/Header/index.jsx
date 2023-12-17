import styles from './Header.module.scss'
import '../../main.scss'
import logo from '../../images/logo.png'
import iconLogin from '../../images/icon-login.png'
import { FaSearch } from "react-icons/fa"
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useRef, useState } from 'react';

const Header = () =>{
    //Verifica tamanho da tela do usuário
    const larguraTela = window.innerWidth
    var mobile = false
    if(larguraTela >= 1024){
        mobile = true
    }

    const [mostrarMenu, setMostrarMenu] = useState(mobile)
    const menuRef = useRef(null);

    const abrirMenu = ()=>{
        animarMenu()
        setMostrarMenu(!mostrarMenu)
    }
    const fecharMenu = ()=>{
        animarMenu()
        setMostrarMenu(mostrarMenu)
    }

    const animarMenu = () => {
        const menu = menuRef.current;
        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;

            if (mostrarMenu) {
                menu.style.transform = `translateX(${Math.min(progress, larguraTela)}px)`;
            } else {
                menu.style.transform = `translateX(${Math.max(larguraTela - progress, 0)}px)`;
                
            }

            if (progress < larguraTela) {
                requestAnimationFrame(animate);
            }
        }
        requestAnimationFrame(animate);
    }

    return(
        <header className={styles.header} >
            <img className={styles.headerLogo} src={logo} alt="Logo Matiz Verdejante" />
            <div className={styles.headerOptions} style={{display: mostrarMenu ? 'flex' : 'none'}} ref={menuRef}>
                <ul className={styles.headerLinks}>
                    <li><a className={styles.headerLinksLink} href="#">Novidades</a></li>
                    <li><a className={styles.headerLinksLink} href="#">Promoções</a></li>
                    <li><a className={styles.headerLinksLink} href="#">Contato</a></li>
                </ul>
                <div className={styles.headerUser}>
                    <form className={styles.headerUserSearch}>
                        <input className={styles.headerUserSearchInput} type="text"/>
                        <button className={styles.headerUserSearchButton} type="submit"><FaSearch /></button>
                    </form>
                    <a href="#">
                        <img className={styles.headerUserLogin} src={iconLogin} alt="Login" />
                    </a>
                </div>
                <button onClick={fecharMenu} className={styles.headerCloseMenu}><IoClose /></button>
            </div>
            <button onClick={abrirMenu} className={styles.headerBtnMenu}><IoMenu /></button>
        </header>
    )
}

export default Header