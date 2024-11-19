import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";

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

			<Random min={1} max={8} />
			<BoxColor color={[255, 0, 0]} />
			<BoxColor color={[128, 255, 0]} />
			<div className="cc-cards">
				<CreditCard
					type="Visa"
					number="0123456789018845"
					expirationMonth={3}
					expirationYear={2021}
					bank="BNP"
					owner="Maxence Bouret"
					bgColor="#11aa99"
					color="white"
				/>

				<CreditCard
					type="Master Card"
					number="0123456789010995"
					expirationMonth={3}
					expirationYear={2021}
					bank="N26"
					owner="Maxence Bouret"
					bgColor="#eeeeee"
					color="#222222"
				/>

				<CreditCard
					type="Visa"
					number="0123456789016984"
					expirationMonth={12}
					expirationYear={2019}
					bank="Swedbank"
					owner="Firstname Lastname"
					bgColor="#ddbb55"
					color="white"
				/>
			</div>
			<div className="ratings">
				<Rating>0</Rating>
				<Rating>1.49</Rating>
				<Rating>1.5</Rating>
				<Rating>3</Rating>
				<Rating>4</Rating>
				<Rating>5</Rating>
			</div>
		</div>
	);
}

export default App;
