import React from 'react';

import Navbar from '../partials/Navbar';
import Footer from '../partials/Footer';




const SubTitulo = (props) => {
  
  let subTitulosItens = props.subTitulos
  if(!props.subTitulos){subTitulosItens=[]}

  const espaco = () => { 
    return <h1> teste</h1>
  }

  return (
    <h4 style={{fontWeight: "530", marginTop: "0", marginBottom: "0", color: "grey"}}>
      Apollo Lunar  
      {subTitulosItens.map((item) => {
        return <> > {item}  </>
      })}
    </h4>
  )

}

const Titulo = (props) => {
  return(
    <h2 style={{fontWeight: "550", marginTop: "3px"}}>{props.titulo}</h2>
  )
}


const Layout = (props) => {
  
    return (
      <>
        <Navbar />
        
        <div className="mainWrap">
          <div className="maxScreenWidth">
            
            <br></br>
            
            <SubTitulo subTitulos={props.subTitulos} />

            <Titulo titulo={props.titulo}/>
            
            {props.children}

          </div>
        </div>
        
        <Footer />
      </>
    );
  };


  export default Layout;  