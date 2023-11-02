import "./Footer.css"
import vk from "../../assets/greyVK.svg"
import inst from "../../assets/greyInst.svg"
import fb from "../../assets/greyFB.svg"
import tw from "../../assets/greyTwit.svg"
import yt from "../../assets/greyYT.svg"
import Menu from "../Headers/menu/menu"

export default function Footer(arr) {
   return (
    <div className="container footer" id="end">
        <div className="iconSocMedias">
            <a href=""><img src={vk} alt="" /></a>
            <a href=""><img src={inst} alt="" /></a>
            <a href=""><img src={fb} alt="" /></a>
            <a href=""><img src={tw} alt="" /></a>
            <a href=""><img src={yt} alt="" /></a>
        </div>
        <Menu/>
        <p>2023 © Kinoarea. Все права защищены</p>
        <a href="" className="footerPolit">Политика конфиденциальности</a>
    </div>
   ) 
}