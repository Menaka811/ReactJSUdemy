//import React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

//creating react component
//Function based component
//function key word is replaced by => in ES2015 module
const getbuttontxt=function(){
return "click on me!";
}
const App =()=>{
    return (
        <div>
        <label for="name">Enter name:</label>
        <input id="name" type="text"/>
    <button style={{backgroundColor:'blue',color:'white'}}> {getbuttontxt()}</button>
    </div>
    );  
};
//Take the react component and show it on the screen
ReactDOM.render(
<App/>,
document.querySelector('#root')
);