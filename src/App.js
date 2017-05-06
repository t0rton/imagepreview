import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePreviewUrl: '',
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
      </div>
    );
  }
}

export default App;
