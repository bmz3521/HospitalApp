import React from "react";
import "./App.css";
import LogIn from "./components/Login/logIn";
import WrappedRegistrationForm from "./components/Register/Register";
import PicturesWall from "./components/UploadPic/Upload";
import Regis from "./components/Register/RegisterMock";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon, PageHeader } from "antd";
import ProFile from "./components/ProFile/ProFile";
const { Header } = Layout;
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  _render = () => {
    localStorage.getItem("myData");
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <body className="form-login">
            <Route path="/" exact component={LogIn} />
            <Route path="/login" exact component={LogIn} />
            <Route path="/register" exact component={Regis} />
            <Route path="/Profile" exact component={ProFile} />
          </body>
        </div>
      </Router>
    );
  }
}

export default App;
