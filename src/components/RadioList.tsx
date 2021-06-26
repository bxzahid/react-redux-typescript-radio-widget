import { FC, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { IRadioListItem } from "../interfaces";
import { setItem } from "../store/data";
import SelectRadio from "./SelectRadio";

/**
 * @name RadioList
 * @component
 */
const RadioList: FC = () => {
	const dispatch = useDispatch();

	const { data, selectedId } = useSelector(
		(state: RootStateOrAny) => state.data
	);

	const [state, setState] = useState(true);

	const clickHandler = (id: number, name: string): void => {
		dispatch(setItem(id, name));
		setState(!state);
	};

	return (
		<div className="list">
			<div className="list__child">
				{data.map((item: IRadioListItem) => {
					return (
						<div className="list__items--style" key={item.id}>
							<div className={state ? "d-none" : ""}>
								{selectedId === item.id && <SelectRadio />}
							</div>
							<div
								className="list__item list__item--style"
								onClick={() =>
									clickHandler(item.id, item.name)
								}>
								<p>{item.name}</p>
								<p>{item.frequency}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default RadioList;
