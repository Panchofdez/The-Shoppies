import { Input } from "antd";
import { searchMovies } from "../store/actions/movies";
import { useDispatch } from "react-redux";

const Searchbar = () => {
  const dispatch = useDispatch();
  return (
    <Input.Search
      size="large"
      placeholder="Search for your favorite movies"
      allowClear
      onSearch={(value) => dispatch(searchMovies(value))}
      className="elevated"
    />
  );
};

export default Searchbar;
