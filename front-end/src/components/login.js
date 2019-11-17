import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React from 'react';
import {Redirect} from 'react-router-dom'
import {Toaster, Intent} from '@blueprintjs/core'
import config from "./firebase";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNum: ''
        };
    }

    phoneSignIn() {
        var appVerifier = new config.auth.RecaptchaVerifier('recaptcha-container');
        var phoneNumber = document.getElementById('phone-number').value;
        config.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
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

    handleSignUp(event) {
        alert('Button clicked!');
    }

    handleLogin(event) {
        alert('Button clicked!');
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
                            hintText="ex: (555) 555-5555"
                            floatingLabelText="Phone Number"
                            style={textStyle}
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

const textStyle = {
    marginTop: 9
};
export default Login;