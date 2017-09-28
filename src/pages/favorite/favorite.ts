import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';
import { QuotePage } from '../quote/quote';
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

  constructor(private modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private quoteService : QuotesService) {
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
    this.quoteService.removeQuoteFromFavorites(q);
    // console.log(this.quoteService)
  }
}
