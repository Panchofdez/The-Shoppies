import styled from "styled-components";
import { Input, Button } from "antd";
import { searchMovies } from "../store/actions/movies";
import { useDispatch } from "react-redux";

const Searchbar = () => {
  const dispatch = useDispatch();
  return (
    <Input.Search
      placeholder="input search text"
      allowClear
      onSearch={(value) => dispatch(searchMovies(value))}
      addonAfter={
        <Button onClick={() => dispatch(searchMovies(""))}>Clear</Button>
      }
    />
  );
};

export default Searchbar;
