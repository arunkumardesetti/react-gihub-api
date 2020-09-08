import React from "react";
import { connect } from "react-redux";
import * as reactStore from "../store/actions/action";
import ShowProfile from "./ShowProfile";
import "../App.css";
import { Layout, Input, Button } from 'antd';
import {GithubOutlined} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const Api = props => {
  const handleChange = e => {
    props.handleUsername(e);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    props.submitForm(e, props.username);
  };

  if (props.grabbedData === true) {
    return <ShowProfile />;
  }

  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="brand" ><span style={{ padding: '10px', fontSize:30}}><GithubOutlined /></span>Compare GitHub Profile</div>
    </Header>
    <Content className="site-layout" style={{ padding: '50px 50px 0px 50px', marginTop: 64}}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 430 }}>
      <div className="getData">
      <label className="searchlabel" >Enter a GitHub Username :</label>
      <Input
        type="text"
        placeholder="Github Username"
        name="username"
        onChange={handleChange}
        id="username"
        autoComplete="off"/>  
        <Button type="primary" shape="round" onClick={handleSubmitForm}>
          Search
        </Button>
      </div>
      <div className="errmsg">
      <h4 style={{ color:"red" }}>{props.message}</h4>
      </div>
      <div className="gitbg">
      <GithubOutlined />
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
    message: state.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUsername: e => dispatch(reactStore.handleUsername(e)),
    submitForm: (e, username) => dispatch(reactStore.submitForm(e, username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Api);
