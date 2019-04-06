import {Component} from "@angular/core"; 
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
    templateUrl: "./login.component.html"
}) export class LoginComponent{
    //private titleLogin: string = "Login works";
    private username: string;
    private password: string;
    
    constructor(private authService: AuthService){

    }

    public login(): void{
        //alert("Estoy siendo logeado");
        let user: User = {
            username: this.username,
            password: this.password
        }
        this.authService.login(user).then((result:boolean) => {
            if (result){
                alert("Login Ok")
            }else{
                alert("Login fail")
            }
        })  
    }
}