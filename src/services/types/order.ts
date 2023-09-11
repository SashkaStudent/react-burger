export interface IOrder {
		_id: string;
		ingredients: string[],
		status: string;
		name: string;
		createdAt: string;
		updatedAt: string;
		number: number;
}

export interface IOrderRequest {
	success: boolean;
	orders:  IOrder[];
}

export interface IOrders {
	success: boolean;
	orders: IOrder[];
	total: string;
	totalToday: string;
}