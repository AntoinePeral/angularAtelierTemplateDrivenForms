import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  email!: string;
  password!: string;
  login: boolean = false;
  labelEmail: boolean =false;
  labelPassword: boolean= false;
  showPassword: boolean = false;

  showLabelEmail(){
    this.labelEmail= true;
  }

  toggleShowPassword(){
    this.showPassword= !this.showPassword;
    
  }

  showLabelPassword(){
    this.labelPassword=true;
  }

  clearInputEmail(){
    this.email = '';
    
  }
  clearInputPassword(){
    this.password = '';

  }

  onSubmit(){
    console.log('Formulaire bien envoyé');
    this.login = true;

    setTimeout(()=>{
      this.login = false;
    },5000)
    
  }

}
