import combineThunks from '../utils/combineThunks';

import { ROUTE_HOME } from '../constants/routes';

import { actionFetchNewestData } from '../reduxModules/home';

// add cancel api call
const cancelCommonThunks = [];

const routesMap = {
    [ROUTE_HOME] : {
        path: '/',
        thunk: combineThunks(
            actionFetchNewestData(),
            ...cancelCommonThunks,
        )
    },
    '@route/ERROR_400' : '/error400',
    '@route/ERROR_401' : '/error401',
    '@route/ERROR_404' : '/error404',
    '@route/ERROR_500' : '/error500'
};

export default routesMap;