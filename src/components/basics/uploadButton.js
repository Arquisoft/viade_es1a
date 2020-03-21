import React from "react";
import ReactFileReader from "react-file-reader";

export default class UploadButton extends React.Component {
  handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function (e) {
      // Use reader.result
      //Aqui habria que parsear el archivo y mostrarlo en el mapa
      alert(reader.result)
    }
    reader.readAsText(files[0]);
  }

  render() {
    return (
        <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.*'}>
            <button className="btn">Upload</button>
        </ReactFileReader>
    );
  }
}
