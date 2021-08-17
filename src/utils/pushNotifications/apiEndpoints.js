const firebaseService = 'https://iid.googleapis.com/iid/';

const apiEndpoints = {
    firebaseTokenDetails: `${firebaseService}info/{0}?details=true`,
    firebaseBatchAddApi: `${firebaseService}v1:batchAdd`,
    mapTopicWithFirebaseInstance: `${firebaseService}v1/{0}/rel/topics/{1}`,
    firebaseBatchRemove: `${firebaseService}v1:batchRemove`,

    formatUrl(url) {
        // eslint-disable-next-line prefer-rest-params
        const args = Array.prototype.slice.call(arguments, 1);
        return url.replace(/{(\d+)}/g, (match, number) => (args[number] ? args[number] : match));
    },
};

export default apiEndpoints;
