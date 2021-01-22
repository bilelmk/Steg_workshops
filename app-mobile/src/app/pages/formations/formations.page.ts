import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { FormationService } from '../../services/http/formation.service';
import { AuthenticationService } from '../../services/http/authentication.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.page.html',
  styleUrls: ['./formations.page.scss'],
})
export class FormationsPage implements OnInit {

  formations = [] ;

  constructor(private loadingController : LoadingController ,
              private formationService : FormationService ,
              private authenticationService : AuthenticationService) { }

  ngOnInit() {}

  ionViewWillEnter() {
      this.loadingController.create({
          message : 'Chargement . . . '
      }).then(
          (loading) => {
              loading.present();
              this.authenticationService.getAuthData().then(
                  user => {
                      this.formationService.getFormations(user.id).subscribe(
                          response => {
                              this.formations = response ;
                              loading.dismiss();
                          },
                          error => {
                              loading.dismiss() ;
                          }
                      )
                  }
              )

          }
      )
  }

    onLogout() {
        this.authenticationService.logout() ;
    }

    getFormations(event){
        this.loadingController.create({
            message : 'Chargement . . . '
        }).then(
            (loading) => {
                loading.present();
                this.authenticationService.getAuthData().then(
                    user => {
                        this.formationService.getFormations(user.id).subscribe(
                            response => {
                                event.target.complete();
                                this.formations = response ;
                                loading.dismiss();
                            },
                            error => {
                                event.target.complete();
                                loading.dismiss() ;
                            }
                        )
                    }
                )

            }
        )
    }
}
