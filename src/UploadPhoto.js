import React, {Component} from 'react';
import fire from "./Fire";
import FileUploader from 'react-firebase-file-uploader';


class UploadPhoto extends Component {
	constructor(props){
		super(props);


		this.state = {
			image:"",
			imageURL:"",
			progress:0
		}
	}
		handleUploadStart = () =>{
			this.setState({
				progress:0
			})
		}
		handleUploadSuccess = filename =>{
			console.log(filename);
			this.setState({
				image:filename,
				progress:100
			})
			fire.storage().ref('photo').child(filename).getDownloadURL().then(url=>this.setState({
				imageURL:url
			}))
		}

	render(){

		return(
			 <div className="container">
            <label>Cargando</label>
                <p>{this.state.progress}</p>
                {this.state.image && <img src= { this.state.imageURL}/>}

                <FileUploader 
                accept = "image/*"
                name ='image'
                storageRef = { fire.storage().ref('photo') }
                onUploadStart = { this.handleUploadStart }
                onUploadSuccess = { this.handleUploadSuccess }
                />


            </div>
        );
    }
}
			

export default UploadPhoto;