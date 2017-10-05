import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DispPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disp',
  templateUrl: 'disp.html',
})
export class DispPage implements OnInit {

  data : any;

  constructor(private viewCtrl:ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.data = this.navParams.data;
    console.log(this.data);
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad DispPage');
  // }

}
