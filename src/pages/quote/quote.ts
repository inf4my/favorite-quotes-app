import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';

/**
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage implements OnInit {

  quote:{
    id: string,
    person: string,
    text: string
  }[];

  constructor(private alertCtrl: AlertController, private viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, private quoteService: QuotesService) {
  }

  ngOnInit(){
    this.quote = this.navParams.get('quote');
    // console.log(this.navParams.get('quote'))
  }

  removeFromFavorite(q){
    let alert = this.alertCtrl.create({
      title: 'Remove Quote',
      subTitle: 'Are you sure you want to remove the quote to favorites?',
      buttons:[
        {
          text:'Ok',
          handler: ()=>{
            this.quoteService.removeQuoteFromFavorites(q)
            this.viewCtrl.dismiss()
            // console.log(this.quoteService)
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
      // buttons: ['Dismiss']
    });
    alert.present();
    // console.log(this.quoteService)
  }

  closeModal(){
    this.viewCtrl.dismiss()
  }

}
