export interface IRadioListItem {
	id: number;
	name: string;
	frequency: string;
}

export interface IMetaAction {
	type: string;
	payload: {
		isLoading: boolean;
		toastMessage: string;
	};
}

export interface IErrorAction {
	type: string;
	payload: {
		error: string;
	};
}
