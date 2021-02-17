import home, { SET_IMAGES } from '../../../../src/reduxModules/home';
import { PENDING, SUCCESS } from '../../../../src/constants/actionStatus';

describe('home reducer', () => {
    const initialState = {
        fetchImagesPending: false,
        collection: [],
        isSearch: false
    };

    it('should return the initial state', () => {
        expect(home(undefined, undefined)).toStrictEqual(initialState);
    });

    it('shoud change the state during getting new images pending', () => {
        const expectedState = {
            ...initialState,
            fetchImagesPending: true
        };

        const action = {
            type: SET_IMAGES + PENDING
        };

        expect(home(undefined, action)).toStrictEqual(expectedState);
    });

    it('shoud change the state during getting new Images success', () => {
        const expectedState = {
            ...initialState,
            collection: []
        };

        const action = {
            type: SET_IMAGES + SUCCESS,
            payload: []
        };

        expect(home(undefined, action)).toStrictEqual(expectedState);
    });
});