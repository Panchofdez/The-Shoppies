import React from "react";
import { Row, Col, Layout, PageHeader } from "antd";
import Searchbar from "../components/Searchbar";
import Results from "./Results";
import Nominations from "./Nominations";
import Background from "../images/background.jpg";

const { Content, Sider } = Layout;

const App = () => {
  return (
    <Layout
      style={{
        flex: 1,
        minHeight: "100%",
      }}
    >
      <Sider
        breakpoint="sm"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        width={300}
        style={{
          flex: 1,
          backgroundColor: "#F0F8FF",
        }}
      >
        <Row style={{ marginTop: "50px", position: "sticky", top: 0 }}>
          <Col span={2}></Col>
          <Col span={20}>
            <h3 style={{ marginTop: "10px" }}>Your Nominations</h3>
            <Nominations />
          </Col>
          <Col span={2}></Col>
        </Row>
      </Sider>
      <Layout style={{ backgroundColor: "white" }}>
        <Content>
          <PageHeader
            style={{
              background: `url(${Background}) `,

              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              paddingTop: "70px",
            }}
          >
            <h2
              style={{ color: "white", fontWeight: "bold", fontSize: "30px" }}
            >
              The Shoppies
            </h2>
            <Content style={{ color: "white", marginBottom: "15px" }}>
              Nominate 5 movies for the upcoming Shoppies awards
            </Content>
          </PageHeader>
          <Row
            style={{
              paddingTop: "35px",
              paddingBottom: "35px",
            }}
          >
            <Col xs={1}></Col>
            <Col xs={22}>
              <Searchbar />
              <Row gutter={16} style={{ marginTop: "20px" }}>
                <Col span={24} style={{ overflow: "hidden" }}>
                  <Results />
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
