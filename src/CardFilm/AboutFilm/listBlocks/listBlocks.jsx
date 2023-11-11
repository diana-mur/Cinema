import "./ListBlocks.css";

export default function ListBlock() {
  const arr = [
    {
      title: "Премьеры",
      link: "#premiers",
    },
    {
      title: "Трейлеры",
      link: "#treilers",
    },
    {
      title: "Рецензии",
      link: "#reviews",
    },
    {
      title: "Студии",
      link: "",
    },
    {
      title: "Цитаты",
      link: "#quotes",
    },
    {
      title: "Сиквелы и приквелы",
      link: "#sequels&prequels",
    },
    {
      title: "Постеры",
      link: "#posters",
    },
    {
      title: "Кадры",
      link: "#snapshots",
    },
    {
      title: "Награды",
      link: "#awards",
    },
  ];

  return (
    <div className="container">
      <div className="listTitles">
        {arr.map((e, index) => {
          return (
            <a href={`${e.link}`} className="elList" key={index}>
              {e.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}
