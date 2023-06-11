import Card from "./components/card/Card";
import { CARDS } from "./constants/cards";

const App = () => {

	return(
		{CARDS.map((card)=>(
			<Card
				key={card.id}
				color={card.color}
				title={card.title}
				text={card.text}
				src={card.src}
				alt={card.alt}

			/>
		))};
	);	
};

export default App;
