import React from "react";
import { Card } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <Card
      style={{ width: "100%" }}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta title={movie.Title} description={movie.Year} />
      <img alt="" src={movie.Poster} style={{ maxHeight: "400px" }} />
    </Card>
  );
};

export default MovieCard;
