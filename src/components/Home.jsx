import Slider from "./Home/Slider";
import WhoAmI from "./Home/WhoAmI";
import NewMotors from "./Home/NewMotors";
import ShortIntro from "./Home/ShortIntro";
import MostSell from "./Home/MostSell";
import ShortNote from "./Home/ShortNote";

const Home = () => {
	return (
		<>
			<Slider />
			<WhoAmI />
			<NewMotors />
			<ShortNote />
			<MostSell />
			<ShortIntro />
		</>
	);
};

export default Home;
