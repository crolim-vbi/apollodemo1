import React, { useState, PureComponent } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import throttle from "lodash.throttle"



const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {width: null}
    this.throttledSetDivSize = throttle(this.setDivSize, 500)
  }

  componentDidMount () {
    this.setDivSize()
    window.addEventListener("resize", this.throttledSetDivSize)
  }

  componentWillUnmount () {
    window.removeEventListener("resize", this.throttledSetDivSize)
  }

  setDivSize = () => {
    this.setState({width: this.pdfWrapper.getBoundingClientRect().width})
  }

  render() {
    return (
      <div id="row" style={{display: "flex", overflow: "hidden"}}>
        <div id="placeholderWrapper" style={{}}/>
        <div id="pdfWrapper" style={{width: "66%"}} ref={(ref) => this.pdfWrapper = ref}>
          <PdfComponent wrapperDivSize={this.state.width} />
        </div>
      </div>
    )
  }
}

 function PdfComponent(props) {
  
  const file = ('./PdfExemplo.pdf');
  const [numPages, setNumPages] = useState(null);


  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
        <div>
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {
              Array.from(
                new Array(numPages),
                (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    scale="1.5"
                    pageIndex={1} 
                    width={props.wrapperDivSize}
                  />
                ),
              )
            }
          </Document>
        </div>
  );
}
