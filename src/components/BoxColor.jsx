export default function BoxColor(props){
    const {color: [red, green, blue]} = props;
    return (
        <div className="box-color" style={{backgroundColor: `rgb(${red},${green},${blue})`}}>rgb({red},{green},{blue})</div>
    )
}