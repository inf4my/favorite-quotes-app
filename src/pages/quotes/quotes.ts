import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';

/**
 * Generated class for the QuotesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quote:{
    id: string,
    person: string,
    text: string
  }[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private quoteService : QuotesService, private alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    // console.log(this.navParams.data);
  }
  ngOnInit(){
     this.quote = this.navParams.data;
  }

  addToFavorite(text){
    let alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure you want to ad the quote to favorites?',
      buttons:[
        {
          text:'Ok',
          handler: ()=>{
            this.quoteService.addQuoteToFavorites(text)
            console.log(this.quoteService)
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
    // console.log(text);
  }

  removeFromFavorite(q){
    this.quoteService.removeQuoteFromFavorites(q);
    console.log(this.quoteService)
  }
}
