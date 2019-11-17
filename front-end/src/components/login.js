import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNum: ''
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
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
                        <RaisedButton label="Sign Up" primary={true} style={style}
                                      onClick={event => this.handleSignUp(event)}/>
                        <RaisedButton label="Login" primary={true} style={style}
                                      onClick={event => this.handleLogin(event)}/>
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