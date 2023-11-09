import "./Footer.css"
import Menu from "../Headers/menu/menu"
import IconSocMedias from "./iconSocMedias/iconSocMedias"

export default function Footer() {
   return (
    <div className="container footer" id="end">
        <IconSocMedias marginBottom={'45px'} />
        <Menu/>
        <p>2023 © Kinoarea. Все права защищены</p>
        <a href="" className="footerPolit">Политика конфиденциальности</a>
    </div>
   ) 
}