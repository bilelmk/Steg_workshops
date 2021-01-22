import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../../services/http/authentication.service';
import { AlertService } from '../../services/in-app/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder ,
              private router: Router ,
              private loadingController : LoadingController ,
              private authenticationService : AuthenticationService ,
              private alertService : AlertService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      matricule   : ['', [Validators.required]],
    });
  }

  onLogin() {
    this.loadingController.create({
      message : 'Chargement . . . '
    }).then(
        (loading) => {
          loading.present() ;
          this.authenticationService.login({ matricule : this.loginForm.value.matricule}).subscribe(
              response => {
                  this.authenticationService.saveAuthData(response) ;
                  this.alertService.presentToast("Connexion réussite"   , "success-toast")
                  loading.dismiss() ;
                  this.router.navigate(['/formations']);
              },
              err => {
                  this.alertService.presentToast("Matricule Incorrect"  , "fail-toast")
                loading.dismiss() ;
              });
        }
    );
  }

}
