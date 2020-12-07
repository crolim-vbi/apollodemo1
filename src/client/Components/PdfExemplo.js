import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';



const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

export default function Sample() {
  
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
                    
                  />
                ),
              )
            }
          </Document>
        </div>
  );
}
