import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./Upload.css";
import { Upload, Icon, Modal } from "antd";

class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: "",
    imageUrl: "",
    fileList: []
  };

  handleCancel = () => {
    this.setState({ previewVisible: false });
  };

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
      checkData: true
    });
  };

  handleChange = ({ fileList }) => {
    this.setState({ fileList });
  };

 
  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload 
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length === 0 ? uploadButton : null}
        </Upload>
        <Modal
          visible={previewVisible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default PicturesWall;

{
  /* <Upload
action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
listType="picture-card"
fileList={fileList}
onPreview={this.handlePreview}
onChange={this.handleChange}
>
{fileList.length >= 3 ? null : uploadButton}
</Upload>
<Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
<img alt="example" style={{ width: '100%' }} src={previewImage} />
</Modal> */
}
