import React, { useEffect } from "react";
import { useStore } from "../utils/zustStore";
import { useParams } from "react-router-dom"; // Import useParams hook
import { fetchItem } from "../utils/axioshelper";

const Comment: React.FC<{ comment: any }> = ({ comment }) => {
  return (
    <div
      style={{
        marginLeft: "20px",
        marginTop: "10px",
        borderLeft: "2px solid gray",
        paddingLeft: "10px",
      }}
    >
      <p className="comment_author">{comment.author}</p>
      <p>{comment.text}</p>
      {comment.children &&
        comment.children.map((child: any) => (
          <Comment key={child.id} comment={child} />
        ))}
    </div>
  );
};

const DetailPage: React.FC = () => {
  const { detailNews, setDetailNews } = useStore();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!detailNews && id) {
      fetchItem(id, setDetailNews);
    }
  }, [id, setDetailNews]);

  return (
    <>
      {detailNews ? (
        <div className="detail_page">
          <div className="detail_news">
            <h2>{detailNews.title}</h2>
            <div className="detail_info">
              <span className="points">{detailNews.points}</span>
              <p>{detailNews.text}</p>
            </div>
          </div>
          <div className="comments">
            <p style={{ margin: "10px" }}>Comments:</p>

            {detailNews.children &&
              detailNews.children.map((comment: any) => (
                <Comment key={comment.id} comment={comment} />
              ))}
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default DetailPage;
