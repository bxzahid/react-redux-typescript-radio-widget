import { FC } from "react";

/**
 * @name SelectRadio
 * @component
 */
const SelectRadio: FC = () => {
	return (
		<div className="middle">
			<img
				className="middle__icon--minus"
				src="icons/minus.png"
				alt="Minus Icon"
			/>
			<img
				className="middle__icon--radio"
				src="icons/radio.png"
				alt="Radio Icon"
			/>
			<img
				className="middle__icon--plus"
				src="icons/plus.png"
				alt="Plus Icon"
			/>
		</div>
	);
};

export default SelectRadio;
