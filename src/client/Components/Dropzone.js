import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
import { createStyles, makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';


const classes  = makeStyles(theme => createStyles({
  previewChip: {
    minWidth: 160,
    maxWidth: 210
  },
}));
 


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
      <>



        <div style={{margin: "0 auto 25px", maxWidth: "960px2"}} id="Dropzone">
           <Paper  elevation={2} style={{borderRadius: "4px", padding: "25px 30px"}}>
              {/* <a class="meuTitulo" style={{color: "dimgray", marginBottom: "25px"}}>Carregue os Arquivos</a>
              <br></br><br></br> */}
              <DropzoneArea
                filesLimit = "100"
                dropzoneText = "Arraste e solte os seus documentos aqui ou clique para inseri-los"
                onChange={this.handleChange.bind(this)}


                showPreviews={true}
                showPreviewsInDropzone={false}
                useChipsForPreview
                previewGridProps={{container: { spacing: 1, direction: 'row' }}}
                previewChipProps={{classes: { root: classes.previewChip } }}
                previewText="Selected files"        
                
              />
          </Paper>
        </div>


     

      </>
      
    )
  }
}
 
export default DropzoneAreaExample;


