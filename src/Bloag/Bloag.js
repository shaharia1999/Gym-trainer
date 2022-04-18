import React from 'react';

const Bloag = () => {
    return (
        <div>
            <h1>Difference between authorization and authentication ??</h1>
            <h3><b>Ans :</b></h3>
            <div>
                <h4>Authentication</h4>
                <li>In authentication process, the identity of users are checked for providing the access to the system.</li>
                <li>	In authentication process, users or persons are verified.</li>
                <li>It is done before the authorization process.</li>
                <li>	It needs usually user’s login details.</li>
            </div>
            <div>
                <h4>Authorization</h4>
                <li>While in authorization process, person’s or user’s authorities are checked for accessing the resources.</li>
                <li>While in this process, users or persons are validated.</li>
                <li>While this process is done after the authentication process.</li>
                <li>While it needs user’s privilege or security levels.</li>
            </div>

            <h1> Why are you using firebase? What other options do you have to implement authentication??</h1>
            <h3>ANS :</h3>
            <p> Firebase is used for many purposes that can help your apps to develop, grow and make it a quality app.
            Moreover, Firebase is made with a developer in mind to solve all the issues they might face when making an app.
            </p>
            <h3>Oteher Alternative </h3>
            <li>Back4App</li>
            <li>Parse</li>
            <li>AWS Amplify</li>
            <li>Backendless</li>
            <li>Kuzzle</li>
            <h1>What other services does firebase provide other than authentication??</h1>
            <li>Cloud Firestore.</li>
            <li>Cloud Functions.</li>
            <li>Authentication.</li>
            <li>Hosting.</li>
            <li>Cloud Storage.</li>
            <li>Google Analytics.</li>
            <li>Cloud Messaging.</li>
           
       
        </div>
    );
};

export default Bloag;