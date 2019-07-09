import React, {Component} from 'react';
import Fire from './Fire';
import firestore from 'firebase/firestore'

class Post extends Component{
	state={
		post:[]
	}

	componentDidMount(){
		let db=Fire.firestore();
		db.settings({timestampsInSnapshots:true});
		db.collection('post').get().then((snapShots)=>{
			this.setState({
				post:snapShots.docs.map(doc=>{
					console.log(doc.id);
				})
			})
		})
	}

	render(){
		return(
			<div>
			</div>
			);
	}
}
export default Post;