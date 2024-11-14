/* To generate a random integer within a specific range, use the following formula:

```js
const min = 1;
const max = 10;
const randomInteger = Math.floor(Math.random() * (max-min + 1)) + min;
console.log(randomInteger);
``` */

const randomizer = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
    
}

export default function Random(props) {
    return (
        <div className="random">Random value between {props.min} and {props.max} => {randomizer(props.min,props.max)}</div>
    )
}