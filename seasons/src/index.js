import React from 'react';
import ReactDOM from 'react-dom';
import SeasonalDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    // constructor(props){
    //     super(props);
    //     //This is the only time we do direct assignment to this.state
    //     this.state={lat: null,errmsg:''};

    // }
    state={lat: null,errmsg:''};
    componentDidMount(){
        console.log('My component was rendered to the screen');
        window.navigator.geolocation.getCurrentPosition(
            (position)=>this.setState({lat:position.coords.latitude}),
            (error)=> this.setState({errmsg:error.message})
                );
    }
    componentDidUpdate(){
        console.log('My component updated- it rerendered');
    }
    renderContent(){
        if (this.state.lat && !this.state.errmsg){
            return <SeasonalDisplay lat={this.state.lat} />;
        }
        if (!this.state.lat && this.state.errmsg){
            return <div>Error: {this.state.errmsg}</div>
        }
        return <Spinner message="Please accept the location request"/>
    }
    render()
        {
            return <div>{this.renderContent()}</div>;
             


        }
    
}
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);