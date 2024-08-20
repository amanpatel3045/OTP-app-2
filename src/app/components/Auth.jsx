"use client"

import React, { useRef, useState } from "react";

import firebase from "../firebase";

const Auth = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationId, setVerificationId] = useState('');
    const recaptchaRef = useRef(null);

    const handleSendOtp = () => {

        if (recaptchaRef.current) {
            recaptchaRef.current.innerHTML = '<div id="recaptcha-container"></div>'
        }

        const verfier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            size: 'invisible'
        });
        firebase.auth().signInWithPhoneNumber(phoneNumber, verfier)
            .then(confirmationResult => {
                setVerificationId(confirmationResult.verificationId);
                //logic
            })
            .catch(error => {
                console.error('Error sending OTP:', error);
            })
    };

    return (
        <div>
            <h1>Phone OTP Authentication</h1>
            <div ref={recaptchaRef}></div>
            <input
                type="tel"
                placeholder="+911234567890"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
            />
            <button onClick={handleSendOtp}>Send OTP</button>
        </div>
    )
}

export default Auth;