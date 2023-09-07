export interface IUser {
  email: string;
  name: string;
}
export interface IUserRequest {
	success: boolean;
	user: IUser;
	accessToken?: string;
	refreshToken?: string;
}