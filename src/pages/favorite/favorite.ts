import { Component, OnInit } from '@angular/core';
import { IonicPage, AlertController, NavController, ToastController, NavParams, ModalController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';
import { QuotePage } from '../quote/quote';
import { SettingsServices } from '../../services/settings';
/**
 * Generated class for the FavoritePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage implements OnInit {
  NextPage = QuotePage;

  quotes:{
    id: string,
    person: string,
    text: string
  }[];

  constructor(private toastCtrl:ToastController,private settingsSvc: SettingsServices,private alertCtrl:AlertController, private modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private quoteService : QuotesService) {
  }

  ngOnInit(){
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad FavoritePage');
  // }

  dispFull(q){
    let modal = this.modalCtrl.create(this.NextPage,{quote: q});
    modal.present();
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
    // this.quoteService.removeQuoteFromFavorites(q);
    // console.log(this.quoteService)
  }

  addNewQuote(){
    let alert = this.alertCtrl.create({
      title: 'Add New Quote',
      inputs:[
        {
          name: 'person',
        },
        {
          name: 'text',
        }
      ],
      buttons:[
        {
          text:'Ok',
          handler: data=>{
            if( data.person.trim() !=''
            && data.text.trim() !=''
            && data.person.trim() != null
            && data.text.trim() !=null){
              this.quoteService.addNewQuotes(data)
              this.presentToast()
              // console.log(data.person)
              // console.log(data.text)
            }
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
  }

  setBgColor(){
    return this.settingsSvc.isAltBackground()? 'altQuoteBackground' : 'quoteBackground';
  }

  presentToast(){
    const toast = this.toastCtrl.create({
      message:'quote has been added',
      duration : 2000,
      position: 'bottom'
    })

    toast.present()
  }
}
