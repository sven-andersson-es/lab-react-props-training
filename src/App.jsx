import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";

function App() {
	return (
		<div className="App">
			<h1> LAB | React Training</h1>

			<IdCard
				lastName="Doe"
				firstName="John"
				gender="male"
				height={178}
				birth={new Date("1992-07-14")}
				picture="https://randomuser.me/api/portraits/men/44.jpg"
			/>

			<IdCard
				lastName="Delores"
				firstName="Obrien"
				gender="female"
				height={172}
				birth={new Date("1988-05-11")}
				picture="https://randomuser.me/api/portraits/women/44.jpg"
			/>

			<Greetings lang="fr">Marta</Greetings> 
			{/* https://reacttraining.com/blog/jsx-the-confusing-parts#children-props */}
			<Greetings lang="de">John</Greetings>

			<Random min={1} max={8}  />
			<BoxColor color={[255,0,0]} />
			<BoxColor color={[128,255,0]} />
			
		</div>
	);
}

export default App;
