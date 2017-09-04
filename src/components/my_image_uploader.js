import React, { Component } from 'react';
//import {Container, Row, Col} from 'reactstrap';


export default class ImageUpload extends React.Component {
    constructor(props) {
            super(props);
            this.state = {file: '',imagePreviewUrl: ''};
    }

    _handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        //debug
        //console.log(files);
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.props.cb(file);
            console.log('onloadended');
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
        //call back provided from the parent
    }
    _handleImageClicked(e){
        /*
        var index = this.ps.indexOf(this.state.file);
        if (index > -1) {
            this.ps.setState({images: this.ps.images.splice(index, 1)});
        }
        */
        
        this.props.removeCb(this.state.file);
        this.setState({
            file: '',
            imagePreviewUrl: ''
        });

    }

    render() {
        //render a square with a plus sign in it 
        //when clicked , opens file select , once selected , square turns into thumbnail
        //somehow bubble up the file to the parent component so it could be uploaded

        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
        $imagePreview = (
     
                    <img src={imagePreviewUrl} onClick={(e)=>this._handleImageClicked(e)} className="thumbnail"/>
        
                    );
        } else {
        $imagePreview = (
            <div>
                <label htmlFor="upload-photo" className="pluslabel col-xs-2">+</label>
                <input 
                                    type="file" 
                                    name="photo" 
                                    id="upload-photo" 
                                    className="upload-photo col-xs-2" 
                                    onChange={(e)=>this._handleImageChange(e)} 
                                    />
            </div>
        );
        }
        return (
            <div className={this.props.display? "" : "invisible"}>
                {$imagePreview}
                
            </div>
        );

    }
}







//how to use it 

/*

   addImage(file,i){
            var newObj =_.cloneDeep(this.state.images); 
            newObj[i ] = file; 
            this.setState({images:newObj } )
      }
    removeImage(file, i){
        this.setState({images: _.omit(this.state.images,i )});
    }
    


{ _.times(3, (i) =>  { return <ImageUpload 
                cb=      {(file)=>{ this.addImage(file, i); }} 
                removeCb={(file)=>{ this.removeImage(file, i)}}
                key={i} 
                display={this.state.images[i] || i <= _.size(this.state.images)}
                />  }) }


*/