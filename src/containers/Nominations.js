import { useEffect } from "react";
import { Steps, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { updateNominations } from "../store/actions/nominations";
import { DeleteOutlined } from "@ant-design/icons";

const Nominations = () => {
  const dispatch = useDispatch();
  const nominations = useSelector((state) => state.nominations);

  useEffect(() => {
    if (localStorage.nominations) {
      const nominations = JSON.parse(localStorage.nominations);
      dispatch(updateNominations(nominations));
    }
  }, []);

  const showMovies = () => {
    const moviesArr = [];
    for (let i = 0; i < 5; i++) {
      let title = nominations[i] ? nominations[i].Title : `Movie ${i + 1}`;
      let year = nominations[i] ? nominations[i].Year : "";

      moviesArr.push(
        <Steps.Step
          key={i}
          title={title}
          description={year}
          subTitle={
            <Button
              shape="circle"
              size="small"
              icon={nominations[i] ? <DeleteOutlined /> : null}
              danger
              onClick={() => removeNomination(nominations[i])}
            ></Button>
          }
        />
      );
    }
    return moviesArr;
  };
  const removeNomination = (movie) => {
    const newNominations = nominations.filter((m) => {
      if (m.imdbID !== movie.imdbID) {
        return m;
      }
    });
    dispatch(updateNominations(newNominations));
  };

  return (
    <Steps
      current={nominations.length}
      direction="vertical"
      style={{ marginTop: "20px" }}
    >
      {showMovies()}
    </Steps>
  );
};

export default Nominations;
