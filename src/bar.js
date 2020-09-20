import React from 'react';
import './App.css';

function Bar(props) {
    return (
        <div
            className="bar"
            style={{
                width: `${props.width}vw`,
                height: `${props.height}vh`,
                backgroundColor: `${props.color}`,
                marginLeft: `${props.margin}vw`,
            }}
        >
        </div>
    );
  }
  
  export default Bar;
