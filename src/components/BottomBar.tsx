import { FC } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

/**
 * @name BottomBar
 * @component
 */
const BottomBar: FC = () => {
	const { selectedName } = useSelector((state: RootStateOrAny) => state.data);

	return (
		<div className="bottom">
			{selectedName !== "" && (
				<>
					<h3 className="bottom--title">CURRENTLY PLAYING</h3>
					<p className="bottom--station-name">{selectedName}</p>
				</>
			)}
		</div>
	);
};

export default BottomBar;
