import React, { Component } from 'react';
import fire from './Fire';
import './ShowComent.css'


class ShowComent extends Component { 
	constructor(props) {
    super(props);
    this.state = {
      allData: []
    }
  }
  componentWillMount(){
  	const db = fire.firestore();
    //db.settings({timestampsInSnapshots: true
    //});
    let wholeData = []
    db.collection('SocialNetwork').get()
    .then(snapshot => {
    snapshot.forEach(doc => {
    wholeData.push(doc.data())
    });
      this.setState({allData: wholeData})
    })
    .catch(error => {
    console.log('Error!', error);
    })
  }
  render(){
  	let listOfData = this.state.allData.map((val, i)=>{
    let name = val.name
    let coment = val.coment
    let image = val.image
      return (
	<div className="card cardPost">
  <button>Eliminar</button>
    <button>Editar</button>
  <img className="card-img-top" key={i} src= {image}/>
  <div className="card-body">
  <h5 className="card-title" key={i}>{name}</h5>
    <p class="card-text" key={i}>{coment}</p>

  </div>
</div>
      ) 
    })
	 return(
	<div>
       <ul>{listOfData}</ul>
    </div>
      );
    }
   }
export default ShowComent;