import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from '../../shared/services/in-app/spinner.service';
import { SnackbarService } from '../../shared/services/in-app/snackbar.service';
import { AuthService } from '../../shared/services/http/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error : string = null ;

  constructor(private formBuilder: FormBuilder , private router: Router , private authService : AuthService ,
              private spinnerService: SpinnerService , private snackbarService : SnackbarService ) {}

  ngOnInit(): void  {
    this.loginForm = this.formBuilder.group({
      username   : ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    this.spinnerService.activate();
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      response => {
          this.router.navigate(['/home']);
          this.snackbarService.openSnackBar('Connexion réussie' , 'green-snackbar')
      },
      err => {
        this.spinnerService.deactivate();
        this.snackbarService.openSnackBar('Erreur : Vérifiez votre nom d\'utilisateur et votre mot de passe\n' , 'red-snackbar')
      });
  }
}
