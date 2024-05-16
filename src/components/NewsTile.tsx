import React from "react";
import DateTimeSpan from "./DateTimeSpan";
import { fetchItem } from "../utils/axioshelper";
import { useStore } from "../utils/zustStore";
import { Link } from "react-router-dom";

const NewsTile: React.FC<{
  dateTimeString: string;
  title: string;
  id: string;
}> = ({ dateTimeString, title, id }) => {
  const { setNewsID, setDetailNews } = useStore();

  const truncatedTitle =
    title.length > 40 ? title.substring(0, 40) + "..." : title;

  const handleClick = () => {
    setNewsID(id);
    fetchItem(id, setDetailNews);
  };

  return (
    <Link
      to={`/news/${id}`}
      className="news_tile"
      onClick={handleClick}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="title">{truncatedTitle}</div>
      <DateTimeSpan dateTimeString={dateTimeString} />
    </Link>
  );
};

export default NewsTile;
