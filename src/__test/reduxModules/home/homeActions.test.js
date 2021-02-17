import home, { SET_IMAGES, actionFetchNewestData } from '../../../../src/reduxModules/home';

import { PENDING, SUCCESS } from '../../../../src/constants/actionStatus';

import { makeMockStore, moxiosInit } from '../../_utils';

describe('Challenge Actions', () => {
    moxiosInit();
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('sends successful api request link action actionFetchNewestData', async() => {
        const store = makeMockStore({});

        await store.dispatch(actionFetchNewestData());
        let actual = store.getActions();

        console.log(actual);
  
        let expected = [
            {
                type: SET_IMAGES + PENDING
            }, {
                type: SET_IMAGES + SUCCESS,
                payload: {}
            }
        ]
        
        expect(actual).toMatchObject(expected);
    });
})