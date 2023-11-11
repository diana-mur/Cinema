import InscriptionArrow from "../../elements/buttons/inscriptArrow";
import Title from "../../elements/title/title";
import Like from "../../elements/buttons/btnLike";
import Dislike from "../../elements/buttons/btnDislike";
import IconSocMedias from "../../elements/Footer/iconSocMedias/iconSocMedias";

export default function TrailersFilm({ name, img }) {
  return (
    <div className="container" id="treilers">
      <Title title={"Трейлеры фильма"}>
        <InscriptionArrow title={"Все трейлеры"} />
      </Title>
      <div className="mainTrailer">
        <img src={img} alt="" />
        <div className="mainTitleTrailer">
          <div>
            <h3>{name}</h3>
            <IconSocMedias marginBottom={0} />
          </div>
          <div>
            <Like visible={true} />
            <Dislike visible={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
