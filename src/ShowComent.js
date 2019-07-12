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
    db.settings({
      timestampsInSnapshots: true
    });
    var wholeData = []
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
  	var listOfData = this.state.allData.map((val, i)=>{
      var name = val.name
      var coment = val.coment
      return (

<div class="card border-success cardPost">
    <div class="card-body">
       	
        <h5 class="card-title" key={i}>{name}</h5>
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