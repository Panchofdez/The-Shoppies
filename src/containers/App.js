import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Steps } from "antd";
import Searchbar from "../components/Searchbar";
import { useSelector } from "react-redux";
import Results from "../components/Results";
import MovieCard from "../components/MovieCard";

const App = () => {
  const [showMovie, setShowMovie] = useState();
  return (
    <div>
      <Row
        style={{
          paddingTop: "50px",
          height: "70%",
        }}
      >
        <Col span={5}>col-6</Col>
        <Col span={14}>
          <h1>The Shoppies</h1>
          <Searchbar />
          <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
            <Col span={12} style={{ overflow: "hidden" }}>
              <Results setShowMovie={setShowMovie} />
            </Col>
            <Col span={12}>
              <MovieCard movie={showMovie} />
            </Col>
          </Row>
        </Col>
        <Col span={5}>col-6</Col>
      </Row>
      <Row
        style={{
          backgroundColor: "grey",
          width: "100%",
          flex: 1,
        }}
      >
        <Col span={2}></Col>
        <Col span={20}>
          <h2>Your Nominations</h2>
          <Steps>
            <Steps.Step title="Movie 1" description="This is a description." />
            <Steps.Step title="Movie 2" description="This is a description." />
            <Steps.Step title="Movie 3" description="This is a description." />
            <Steps.Step title="Movie 4" description="This is a description." />
            <Steps.Step title="Movie 5" description="This is a description." />
          </Steps>
        </Col>
        <Col span={2}></Col>
      </Row>
    </div>
  );
};

export default App;
