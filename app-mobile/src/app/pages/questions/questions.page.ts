import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController} from '@ionic/angular';
import { QuestionService } from '../../services/http/question.service';
import { ActivatedRoute , Router} from '@angular/router';
import { AuthenticationService } from '../../services/http/authentication.service';
import { ResponseService } from '../../services/http/response.service';
import { Agent } from '../../classes/Agent';
import { Formation } from '../../classes/Formation';
import {AlertService} from '../../services/in-app/alert.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {

  questions = [] ;
  current_question ;
  formation_id ;

  constructor(private loadingController : LoadingController ,
              private questionService : QuestionService ,
              private route : ActivatedRoute ,
              private authenticationService : AuthenticationService ,
              private alertController : AlertController ,
              private responseService : ResponseService ,
              private alertService : AlertService ,
              private router : Router
  ) { }

  ngOnInit() {
    this.formation_id = Number (this.route.snapshot.paramMap.get('id'))
    this.loadingController.create({
      message : 'Chargement . . . '
    }).then(
        (loading) => {
          loading.present();
          this.questionService.getAllByFormation(this.formation_id).subscribe(
              response => {
                this.questions = response ;
                if(this.questions.length > 0) {
                    this.current_question = this.questions[0]
                }
                loading.dismiss();
              },
              error => {
                loading.dismiss() ;
              }
          )
        }
    )
  }

  getQuestionIndex(id : number){
      return this.questions.findIndex( question => {
          return question.question_id == id
      }) + 1
  }

    getPrev() {
        let id = this.questions.findIndex(question => {
                return question.question_id == this.current_question.question_id ;
        })
        this.current_question = this.questions[id-1]
    }

    getNext() {
      if(this.current_question?.question_id == this.questions[this.questions.length - 1]?.question_id){
          this.recap() ;
          return null ;
      }
      let id = this.questions.findIndex(question => {
          return question.question_id == this.current_question.question_id ;
      })
      this.current_question = this.questions[id+1]
    }

    isFirst() {
        return this.current_question?.question_id == this.questions[0]?.question_id
    }

    selectChoix(event: any) {
      this.current_question.choix_id = event.detail.value
    }

    onSendResponse(){
        this.loadingController.create({
            message : 'Chargement . . . '
        }).then(
            (loading) => {
                loading.present();
                  this.authenticationService.getAuthData().then(
                      res => {
                          let agent = new Agent ; agent.id = res.id
                          let formation = new Formation() ; formation.id = this.formation_id
                          let response : any  = { }
                          response.agent = agent ;
                          response.formation = formation ;
                          response.responseDetail = this.getResponseDetails()
                          this.responseService.create(response) .subscribe(
                              res => {
                                  loading.dismiss();
                                  this.router.navigate(['/formations'] ) ;
                                  this.alertService.presentToast("Votre réponse a été envoyé avec succès"   , "success-toast")

                              },
                              error => {
                                  loading.dismiss();
                                  this.alertService.presentToast("Erreur lors de l'envoie"   , "fail-toast")
                              }
                          )
                      }
                  )
            }
        )
    }


    async recap() {
        const alert = await this.alertController.create({
            message: "Vous avez terminé le questionnaire. " +
                     "Vous voulez envoyer vos reponses ?",
            buttons: [
                {
                    text: 'Annuler' ,
                    role: 'cancel' ,
                    cssClass: 'secondary',
                }, {
                    text: 'Envoyer',
                    handler: () => {
                        this.onSendResponse() ;
                    }
                }
            ]
        });
        await alert.present();
  }

    getResponseDetails(){
      let responses = [];
      for(let question of this.questions){
          responses.push({
              choix_reponse : { id : question.choix_id },
              question : { question_id : question.question_id}
          })
      }
      return responses ;
    }
}
