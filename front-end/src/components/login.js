import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React from 'react';
import config from "./firebase";
import * as firebase from "firebase";
import './style/login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNum: ''
        };

    }

    phoneSignIn() {
        var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        var phoneNumber = document.getElementById('phone-number').value;
        console.log(phoneNumber);
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(confirmationResult => {
                alert('Enter your confirmation code.');
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
            }).catch(function (error) {
            // Error; SMS not sent
            // ...
            alert("Invalid phone number!");
        });
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="PetQuest Login"
                        />
                        <TextField
                            id="phone-number"
                            hintText="Enter your phone number"
                            floatingLabelText="Phone Number"
                            onChange={(event, newValue) => this.setState({phoneNum: newValue})}
                        />
                        <br/>
                        <RaisedButton label="Login" primary={true} style={style}
                                      onClick={() => this.phoneSignIn()}/>
                        <div id="recaptcha-container"></div>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 15,
};
export default Login;
