import React from 'react';
import Rainbow from './Rainbow'
const About = (props) => {
    console.log(props.history);
    return (
        <div className="container">
            <p className="blue lighten-2">This is a simple one page app with React </p>
        </div>
        )
}
export default Rainbow(About)