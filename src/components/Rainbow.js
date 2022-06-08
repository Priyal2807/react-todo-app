import { React } from 'react';
const Rainbow = (Wrp) => {
    const colours = ['red', 'pink', 'green', 'black', 'blue']
    const randomColor = colours[Math.floor(Math.random() * 4)]
    const className = randomColor + '-text';

    return (props) => {
        return (
            <div className={className}>
               <Wrp/>
            </div>
            )
    }
}
export default Rainbow;