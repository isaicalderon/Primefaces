import {Component} from "@angular/core";

@Component({
    templateUrl: "./login.component.html"
}) export class LoginComponent{
    //private titleLogin: string = "Login works";
    private username: string;
    private password: string;
    
    public login(): void{
        alert("Estoy siendo logeado");
    }
}