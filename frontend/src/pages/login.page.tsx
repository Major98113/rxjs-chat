import React from 'react';
import { toast } from 'react-toastify';
import { map } from "rxjs/operators";

import { LoginForm } from "../components/Login";

import UserService from "../api/user.service";

export default class LoginPage extends React.Component {

    handleLogin = ( username, password ) => {
        const sub$ = UserService.login( username, password )
            .pipe( map( ( response: any ) => response.data ) )
            .subscribe(
                ( token ) => console.log({ token }),
                ( error ) => toast.error("Incorrect username or password"),
            () => sub$.unsubscribe()
        )
    };

    render(){
        return(
            <LoginForm handleLogin={this.handleLogin} />
        );
    }
};
