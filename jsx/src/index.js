//import react and reactDom libraries
import React from 'react';
import ReactDom from 'react-dom';

function getbuttonText()
{
    return 'click on me!'
}
//create a react componenet
const App = function(){
    //const buttonText = 'Click Me!';

    return (
        <div>
        <label className="label" htmlFor="name"> Enter name:</label>
        <input id="name" type="text"/>
        <button style={{backgroundColor: 'blue', color:'white'}}>
    {getbuttonText()}</button>
      </div>)
};


//Take the react componenet and show it on the screen
ReactDom.render(
    <App />,
   document.querySelector('#root') 
);  