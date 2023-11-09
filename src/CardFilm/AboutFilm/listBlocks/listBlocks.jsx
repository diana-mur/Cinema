import { Link } from "react-router-dom";
import "./ListBlocks.css";

export default function ListBlock() {
  const arr = [
    {
      title: "Премьеры",
      link: "",
    },
    {
      title: "Трейлеры",
      link: "",
    },
    {
      title: "Рецензии",
      link: "",
    },
    {
      title: "Студии",
      link: "",
    },
    {
      title: "Цитаты",
      link: "",
    },
    {
      title: "Сиквелы и приквелы",
      link: "",
    },
    {
      title: "Постеры",
      link: "",
    },
    {
      title: "Кадры",
      link: "",
    },
    {
      title: "Награды",
      link: "",
    },
  ];

  return (
    <div className="container">
      <div className="listTitles">
        {arr.map((e, index) => {
          return (
            <Link to={``} className="elList" key={index}>
              {e.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
