import React from "react";
import { connect } from "react-redux";
import "../App.css";
import { Layout, Breadcrumb, Card } from 'antd';

const { Header, Content, Footer } = Layout;

const ShowProfile = props => {
  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="brand" >Compare GitHub Profile</div>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><a href="/">Home /</a></Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
      <div className="getData">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={props.image_url} alt="" />}>
        <h2><span style={{ color:"grey" }} > Username : </span> {props.username}</h2>
        <h3><span style={{ color:"grey" }} >Repositories : </span> {props.repos}</h3>
        <h3><span style={{ color:"grey" }} >Following : </span> {props.following}</h3>
        <h3><span style={{ color:"grey" }} >Followers : </span> {props.followers}</h3>
        </Card>
    </div>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  );
};

const mapStateToProps = state => {
  return {
    username: state.username,
    repos: state.repos,
    following: state.following,
    followers: state.followers,
    grabbedData: state.grabbedData,
    image_url: state.image_url
  };
};

export default connect(
  mapStateToProps,
  null
)(ShowProfile);
