import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkripsiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skripsi',
  templateUrl: 'skripsi.html',
})
export class SkripsiPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  skripsiForm: FormGroup;
  pembimbingForm: FormGroup;

  ngOnInit(){
    this.initializeForm();
  }

  private initializeForm(){
    this.skripsiForm = new FormGroup({
      nama: new FormControl(null, Validators.required),
      nim: new FormControl(null, Validators.required),
      judul: new FormControl(null, Validators.required),
      classOf: new FormControl(2014, Validators.required),
      nama1: new FormControl(null, Validators.required),
      nama2: new FormControl(null, Validators.required),
      lintas: new FormControl(null, Validators.required)
    })
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SkripsiPage');
  // }

}
