import React, {Component} from 'react';
import fire from "./Fire";
import UploadPhoto from "./UploadPhoto";

class Post extends Component {
  constructor(props) {
    super(props);
    this.updateInput=this.updateInput.bind(this);
    this.addData=this.addData.bind(this);
    this.state = {
      name: '',
      coment: '',
      allData: []
    };
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
      coment: this.state.coment
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
    <UploadPhoto/>
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



<div class="card" cardPost">
  <img class="card-img-top" key={i} src='{image}' alt="Card image cap">
  <div class="card-body">
  <h5 className="card-title" key={i}>{name}</h5>
    <p class="card-text" key={i}>{coment}</p>
  </div>
</div>