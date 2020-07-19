import {actions, Follow, unFollow} from "./users-reduser";
import {usersAPI} from "../api/users-api";
import {APIResponseType, ResultCodesEnum} from "../api/api";

jest.mock('../api/users-api');
const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
	dispatchMock.mockClear();
	getStateMock.mockClear();
	usersAPIMock.follow.mockClear();
	usersAPIMock.unFollow.mockClear();
});

const result: APIResponseType = {
	resultCode: ResultCodesEnum.Success,
	messages: [],
	data: {}
}

usersAPIMock.follow.mockReturnValue(Promise.resolve(result));
usersAPIMock.unFollow.mockReturnValue(Promise.resolve(result));

test('Success follow thunk', async () => {
	const thunk = Follow(1);

	await thunk(dispatchMock, getStateMock, {});
	expect(dispatchMock).toBeCalledTimes(3);
	expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1));
	expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1));
	expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1));
});

test('success unfollow thunk', async () => {
	const thunk = unFollow(1);

	await thunk(dispatchMock, getStateMock, {});
	expect(dispatchMock).toBeCalledTimes(3);
	expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1));
	expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1));
	expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1));
});

