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

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="PetQuest Login"
                        />
                        <TextField
                            hintText="Enter your phone number"
                            floatingLabelText="Phone Number"
                            onChange={(event, newValue) => this.setState({phoneNum: newValue})}
                        />
                        <br/>
                        <RaisedButton label="Sign Up" primary={true} style={style}
                                      onClick={(event) => this.handleClick(event)}/>
                        <RaisedButton label="Login" primary={true} style={style}
                                      onClick={(event) => this.handleClick(event)}/>
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