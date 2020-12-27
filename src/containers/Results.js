import React, { useState } from "react";
import {
  List,
  Avatar,
  Button,
  message,
  Row,
  Col,
  Drawer,
  Descriptions,
  Empty,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { updateNominations } from "../store/actions/nominations";
import { fetchMovie } from "../store/actions/movies";

const Results = () => {
  const searchResults = useSelector((state) => state.movies);
  const nominations = useSelector((state) => state.nominations);
  const showMovie = useSelector((state) => state.showMovie);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const addNomination = (movie) => {
    if (nominations.length === 5) {
      message.error("Only allowed up to 5 nominations!");
      return;
    }
    const newNominations = [...nominations, movie];
    dispatch(updateNominations(newNominations));
    if (newNominations.length === 5) {
      message.success(
        "Congratulations! You have successfully nominated 5 movies",
        5
      );
    }
  };

  const isNominated = (movie) => {
    for (let i = 0; i < nominations.length; i++) {
      if (nominations[i].imdbID === movie.imdbID) {
        return true;
      }
    }
    return false;
  };
  if (searchResults.length > 0) {
    return (
      <div>
        <List
          itemLayout="horizontal"
          dataSource={searchResults}
          renderItem={(movie) => (
            <List.Item
              className="movieresults"
              style={{ paddingLeft: 5 }}
              actions={[
                isNominated(movie) ? null : (
                  <Button
                    shape="round"
                    size="small"
                    key="list-loadmore-nominate"
                    type="primary"
                    onClick={() => addNomination(movie)}
                  >
                    Nominate
                  </Button>
                ),
                <Button
                  shape="round"
                  size="small"
                  key="list-loadmore-more"
                  onClick={() => {
                    dispatch(fetchMovie(movie.imdbID));
                    setVisible(true);
                  }}
                >
                  More
                </Button>,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={movie.Poster} />}
                title={movie.Title}
              />
            </List.Item>
          )}
        />

        <Drawer
          title={`${showMovie.Title} ${showMovie.Year}`}
          placement="right"
          closable={true}
          onClose={() => setVisible(false)}
          visible={visible}
          width={500}
          bodyStyle={{ padding: 0 }}
        >
          <Row>
            <Col span={9} style={{ padding: 10 }}>
              <img
                alt="poster"
                src={showMovie.Poster}
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col span={15} style={{ padding: 10 }}>
              <Descriptions column={2} size="small" bordered>
                <Descriptions.Item label="Genre" span={2}>
                  {showMovie.Genre}
                </Descriptions.Item>
                <Descriptions.Item label="Actors" span={2}>
                  {showMovie.Actors}
                </Descriptions.Item>
                <Descriptions.Item label="Director" span={2}>
                  {showMovie.Director}
                </Descriptions.Item>
                <Descriptions.Item label="Awards" span={2}>
                  {showMovie.Awards}
                </Descriptions.Item>
                <Descriptions.Item label="Rated">
                  {showMovie.Rated}
                </Descriptions.Item>
                <Descriptions.Item label="Rating">
                  {showMovie.imdbRating}
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
          <Row style={{ padding: 15 }}>
            <Col span={24}>
              <p>{showMovie.Plot}</p>
            </Col>
            {isNominated(showMovie) ? null : (
              <Button
                shape="round"
                size="small"
                key="list-loadmore-nominate"
                type="primary"
                onClick={() => {
                  addNomination(showMovie);
                  setVisible(false);
                }}
              >
                Nominate
              </Button>
            )}
          </Row>
        </Drawer>
      </div>
    );
  } else {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }
};

export default Results;
