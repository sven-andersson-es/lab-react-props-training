//"de", "en", "es" or "fr"
const hello = (lang) => {
    switch (lang) {
        case "de":
            return "Hallo";
        case "en":
            return  "Hello";
        case "es":
            return "Hola";
        case "fr":
            return "Bonjour";
        default:
            return "Hello";
    }
     
};

function Greetings(props) {

    return (
        <div className="greeting">
            {hello(props.lang)} {props.children}
            {/* https://reacttraining.com/blog/jsx-the-confusing-parts#children-props */}
        </div>
    )
}

export default Greetings;
