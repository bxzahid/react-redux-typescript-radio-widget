import { FC } from "react";

/**
 * @name TopBar
 * @component
 */
const TopBar: FC = () => {
	return (
		<div className="top">
			<img
				className="top__icon--back-arrow"
				src="icons/back-arrow.png"
				alt="Back Arrow"
			/>
			<h1 className="top--title">STATIONS</h1>
			<img
				className="top__icon--switch"
				src="icons/switch.png"
				alt="Switch"
			/>
		</div>
	);
};

export default TopBar;
