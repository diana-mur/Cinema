import vk from "../../../assets/greyVK.svg";
import inst from "../../../assets/greyInst.svg";
import fb from "../../../assets/greyFB.svg";
import tw from "../../../assets/greyTwit.svg";
import yt from "../../../assets/greyYT.svg";
import "./iconSocMedias.css";

export default function IconSocMedias({ marginBottom }) {
  return (
    <div className="iconSocMedias" style={{
      marginBottom: `${marginBottom}`
    }}>
      <a href="">
        <img src={vk} alt="" />
      </a>
      <a href="">
        <img src={inst} alt="" />
      </a>
      <a href="">
        <img src={fb} alt="" />
      </a>
      <a href="">
        <img src={tw} alt="" />
      </a>
      <a href="">
        <img src={yt} alt="" />
      </a>
    </div>
  );
}
