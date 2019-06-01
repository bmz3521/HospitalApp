import React from "react";
// import App from "...";
import LogIn from "../Login/logIn";
import WrappedRegistrationForm from "../Register/Register";
import Path2 from "../XD/Path2.svg";
import PicturesWall from "../UploadPic/Upload";
import { Layout, Menu, Breadcrumb, Icon, PageHeader } from "antd";
const { Header } = Layout;
function Regis() {
  return (
    <div>
      <br />
      <body className="form-login">
        <PicturesWall />
        <WrappedRegistrationForm />
      </body>
    </div>
  );
}

export default Regis;
