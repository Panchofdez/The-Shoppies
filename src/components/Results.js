import React from "react";
import { List, Avatar } from "antd";
import { useSelector } from "react-redux";

const Results = ({ setShowMovie }) => {
  const searchResults = useSelector((state) => state.movies);
  console.log("Results", searchResults);
  if (searchResults.length > 0) {
    return (
      <div style={{ overflowY: "scroll", height: "300px" }}>
        <List
          itemLayout="horizontal"
          dataSource={searchResults}
          renderItem={(movie) => (
            <List.Item onClick={() => setShowMovie(movie)}>
              <List.Item.Meta
                avatar={<Avatar src={movie.Poster} />}
                title={movie.Title}
              />
            </List.Item>
          )}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default Results;
