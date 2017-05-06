import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePreviewUrl: '',
      imageDrop: [],
      file: [],
    }
  }

  previewImage(e) {
    e.preventDefault();

    let reader = new FileReader();
    let image = e.target.files[0];

    reader.onloadend = (e) => {
      this.setState({
        file: image,
        imagePreviewUrl: reader.result,
        });
      }

    reader.readAsDataURL(image)
  }

  onDrop(files) {
    console.log(files);
    let reader = new FileReader();
    reader.onloadend = (e) => {
      this.setState({
        imageDrop: reader.result,
      });
    }
    reader.readAsDataURL(files[0])
  }

  render() {
    const { imagePreviewUrl } = this.state;

    let $imagePreview = null;

    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} className="img-thumbmail" alt="preview-img" />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="App">
        <input type="file" name="image" onChange={(e)=>this.previewImage(e)}/>
        <div>
          {$imagePreview}
        </div>
        <div className="dropzone">
          <aside>
            <h2>Dropped files</h2>
            <Dropzone onDrop={this.onDrop.bind(this)}>
              <p>Try dropping some files here, or click to select files to upload.</p>
            </Dropzone>
            <ul>
              <img src={this.state.imageDrop} className="img-thumbmail" alt="preview-img" />
            </ul>
          </aside>
        </div>
      </div>
    );
  }
}

export default App;
