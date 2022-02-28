import React from "react";
import { app } from "../firabse-app";

export const Form = () => {

    const [fileUrl, setfileUrl] = React.useState("");
    //const [docus,setDocus] = React.useState([]);

    const submitHandler = async (e:any) => {
      e.preventDefault();
      const userData = {
        username: e.target.username.value,
        surname: e.target.surname.value,
        email: e.target.email.value,
        fileUrl: fileUrl
      }
      
      try { 
        await app.firestore().collection("users").add(userData);
        console.log("archivo cargado:");
      } catch (err) { 
        console.log(err)
      };
      
    }

    const fileHandler = async (e:any)=> {

      const file = e.target.files[0];
      const storageRef =  app.storage().ref();
      const filePath = storageRef.child(file.name);
      await filePath.put(file);
      console.log("file cargado:",file.name);
      const linkUrl = await filePath.getDownloadURL();
      setfileUrl(linkUrl);
  
    }

    return (
        
        <>
        <form onSubmit={submitHandler}>
          <div className="input-field col s12 l6">
            <input type="text" id="username" name="username" className="validate"/>
            <label htmlFor="username">Primer Nombre</label>
          </div>
          <div className="input-field col s12 l6">
            <input type="text" id="surname" name="surname" className="validate"/>
            <label htmlFor="surname">Segundo Nombre</label>
          </div>
          <div className="input-field col s12">
            <input type="email" id="email" name="email" className="validate"/>
            <label htmlFor="email" data-error="Correo Inválido" data-success="Correcto">Email</label>
          </div>
          <div className="input-field col s12">
            <input type="file" id="file" className="validate" onChange= {fileHandler}/>
          </div>
          <button className="btn waves-effect waves-light blue" type="submit" name="action">Enviar
          </button>
        </form>
        </>
    )
}

function err(err: any) {
  throw new Error("Function not implemented.");
}


function setfileUrl(linkUrl: string) {
  throw new Error("Function not implemented.");
}
