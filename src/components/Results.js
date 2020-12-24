import React, { useState } from "react";
import { List, Avatar, Button, message, Modal } from "antd";
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
        8
      );
    }
  };

  const isNominated = (movie) => {
    for (let i = 0; i < nominations.length; i++) {
      if (nominations[i].imdbID == movie.imdbID) {
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
        <Modal
          visible={visible}
          title={showMovie.Title}
          onCancel={() => setVisible(false)}
          footer={[
            isNominated(showMovie) ? null : (
              <Button
                shape="round"
                size="medium"
                key="nominate"
                type="primary"
                onClick={() => addNomination(showMovie)}
              >
                Nominate
              </Button>
            ),
          ]}
        ></Modal>
      </div>
    );
  } else {
    return null;
  }
};

export default Results;
