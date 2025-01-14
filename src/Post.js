import React, {Component} from 'react';
import fire from "./Fire";
import FileUploader from 'react-firebase-file-uploader';


class Post extends Component {
  constructor(props) {
    super(props);
    this.updateInput=this.updateInput.bind(this);
    this.addData=this.addData.bind(this);
    this.handleUploadSuccess=this.handleUploadSuccess.bind(this);
    this.state = {
      image:"",
      imageURL:"",
      name: '',
      coment: '',
      allData: []
    };
  }
  handleUploadSuccess = filename =>{
      console.log(filename);
      this.setState({
        image:filename,
      })
      fire.storage().ref('photo').child(filename).getDownloadURL().then(url=>this.setState({
        imageURL:url
      }))
    }

  updateInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addData (e)  {
    e.preventDefault();
    const db = fire.firestore();
   // db.settings({
     // timestampsInSnapshots: true
   // });
    db.collection('SocialNetwork').add({
      date: new Date(),
      name: this.state.name,
      coment: this.state.coment,
      image:this.state.imageURL
    });
    this.setState({
      name: '',
      coment: ''
    });
  };

  
  render() {
    
    var listOfData = this.state.allData.map((val, i)=>{
      var name = val.name
      var coment = val.coment
      return (
        <li key={i}>{name} ({coment})</li>
      ) 
    })

    return (
      <div>
      <FileUploader
      accept = "image/*"
      name ='image'
      storageRef = { fire.storage().ref('photo') }
      onUploadSuccess = { this.handleUploadSuccess }
      />


        <form onSubmit={this.addData}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={this.updateInput}
            value={this.state.name} 
            autocomplete="off"
          />
          <br/>
          <input
            type="text"
            name="coment"
            placeholder="Comentario"
            onChange={this.updateInput}
            value={this.state.coment}
            
          />
          <br/>
          <button type="submit">Enviar</button>
        </form>

    
       

      </div>
      );
    }
   }

export default Post;