import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
 
class DropzoneAreaExample extends Component{
  constructor(props){
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files){
    this.setState({
      files: files
    });
  }
  render(){
    return (
      <DropzoneArea
        filesLimit = "10"
        dropzoneText = "Arraste e solte um arquivo aqui ou clique"
        onChange={this.handleChange.bind(this)}
        />
    )
  }
}
 
export default DropzoneAreaExample;