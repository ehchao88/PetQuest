import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React from 'react';
import {Redirect} from 'react-router-dom';
import config from "./firebase";
import * as firebase from "firebase";
import './style/login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNum: '',
            code: ''
        };

    }

    phoneSignIn() {
        var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        var phoneNumber = document.getElementById('phone-number').value;
        config.auth().signInWithPhoneNumber(phoneNumber.toString(), appVerifier)
            .then(function (confirmationResult) {
                alert('Enter your confirmation code.');
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
            }).catch(function (error) {
            console.log(error);
            // Error; SMS not sent
            // ...
            alert("Invalid phone number!");
        });
    }

    submitCode() {
        var code = document.getElementById('confirmation-code').value;
        window.confirmationResult.confirm(code).then(function (result) {
            // User signed in successfully.
            this.renderRedirect();
            // ...
        }).catch(function (error) {
            // User couldn't sign in (bad verification code?)
            // ...
        });
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/dashboard' />
        }
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
                        <TextField
                            id="confirmation-code"
                            hintText="6-digit code"
                            floatingLabelText="Code"
                            onChange={(event, newValue) => this.setState({phoneNum: newValue})}
                        />
                        <RaisedButton label="Submit" primary={true} style={style}
                                      onClick={() => this.submitCode()}/>
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