import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import styled from '@emotion/styled';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import request from '../../utils/pushNotifications/requestUtils';
import API_ENDPOINT from '../../utils/pushNotifications/apiEndpoints';

import AppHome from '../appHome';

import { ROUTE_HOME } from '../../constants/routes';

const ViewRootContainer = styled('div')({
    
    backgroundColor: '#26282f',
    padding: '0 20px'
});

const routePage = location => { 
    switch (location.type) {
        case ROUTE_HOME:
            return (<AppHome />);
    }
}

const ViewRoot = ({ location }) => {

    useEffect(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyDl9q3ZaPe2XsUPy34igTAl0CowV9VuYTc",
            authDomain: "sample-push-notif-6773b.firebaseapp.com",
            databaseURL: "https://sample-push-notif-6773b-default-rtdb.firebaseio.com",
            projectId: "sample-push-notif-6773b",
            storageBucket: "sample-push-notif-6773b.appspot.com",
            messagingSenderId: "277287690276",
            appId: "1:277287690276:web:d020fb62f2e95846eaf8b1",
            measurementId: "G-B1LG454F1P"
        };

        firebase.initializeApp(firebaseConfig);

        const FIREBASE_MESSAGING = firebase.messaging();
        const vapidKey = 'BIphr8pLKVNAg8pnuXpPmtuJ4lAx0c5F5DyLXHTBxtJrfgiYHmRO605kZA3ieNuCmDV0T0mbEqmqYdgppnz5dpA';

        const handleTokenRefresh = (token) => {
            console.log('test', token)
            return request
                .doGetFirebase(API_ENDPOINT.formatUrl(API_ENDPOINT.firebaseTokenDetails, window.firebaseToken))
                .then((resp) => resp.json())
                .then(() => token)
                .catch((e) => console.log(`handleRefreshToken Error: ${e.message}`));
        };

        Notification.requestPermission()
            .then(() => FIREBASE_MESSAGING.getToken({ vapidKey }))
            .then(async (token) => handleTokenRefresh(token))
            .catch((err) => {
                console.log('error getting permission :(', err);
            });

        FIREBASE_MESSAGING.onMessage((payload) => {
            console.log('Message received. ', payload);
        });
    }, [])

    

    const [headerHeight, setHeaderHeight] = useState(window.innerWidth < 920 ? 100 : 200);
 
    const resizeHeader = useCallback(() => {
        if(window.innerWidth < 920){
            if(headerHeight !== 100){
                setHeaderHeight(100);
            }
        } else if (headerHeight !== 200){
            setHeaderHeight(200);
        }
    }, [headerHeight])

    useEffect(() => {
        window.addEventListener("resize", resizeHeader);

        return () =>{
            window.removeEventListener("resize", resizeHeader);
        }

       
    },[resizeHeader])

    switch (location.type) {

        case ROUTE_HOME:
            return (
                <ViewRootContainer>
                    <Scrollbars 
                        autoHeight 
                        autoHeightMax={`calc(100vh - ${headerHeight}px)`}
                        autoHeightMin={`calc(100vh - ${headerHeight}px)`}
                    >
                        {routePage(location)}
                    </Scrollbars>
                </ViewRootContainer>
            );
        default:
            return null;
    }
}

export default connect(state => ({
    location: state.location
}))(ViewRoot);