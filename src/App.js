import React, { Component } from 'react';
import Logo from './Components/Logo/Logo';
import Form from './Components/Form/Form';
import Navigation from './Components/Navigation/Navigation';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
    apiKey: '935e2a95aba443bca62193097a92dcfd'
});

class App extends Component {

    constructor() {
        super();
        this.state = {
            input: '',
            imageUrl: '',
            boundingBox: [],
        }
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value});
    }

    onSubmit = () => {
        this.setState({imageUrl: this.state.input});
        app.models.predict(
            Clarifai.FACE_DETECT_MODEL,
            this.state.input)
            .then(
                response => {
                this.setState({boundingBox: response.outputs[0].data.regions[0].region_info.bounding_box});
                // console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="">
                <Navigation />
                <Logo />
                <Form
                    onInputChange={this.onInputChange}
                    onSubmit={this.onSubmit} />
                <ImageLinkForm imageUrl = { this.state.imageUrl } boundingBox = { this.state.boundingBox } />
            </div>
        );
    }
}

export default App;
// https://cdn.shopify.com/s/files/1/0006/7118/7062/products/Convenient-packing-New-Style-Sexy-Girls-Seamless-Breast-Cleavage-Cup-Bra-For-Women-s-Party-Dress_1024x1024.jpg?v=1534215790
// https://www.pixelstalk.net/wp-content/uploads/2016/08/Cute-Girl-Images-For-Desktop-620x388.jpg
