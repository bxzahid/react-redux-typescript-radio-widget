import { FC } from "react";
import BottomBar from "./components/BottomBar";
import RadioList from "./components/RadioList";
import TopBar from "./components/TopBar";

/**
 * App component is the root of our application.
 *
 * @component
 */
const App: FC = () => {
	return (
		<div className="app">
			<div className="container">
				<TopBar />
				<RadioList />
				<BottomBar />
			</div>
		</div>
	);
};

export default App;
