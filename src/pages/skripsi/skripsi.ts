import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { DispPage } from '../disp/disp';

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

  dispPage = DispPage;

  constructor(private modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  skripsiForm: FormGroup;

  ngOnInit(){
    this.initializeForm();
  }

  private initializeForm(){
    this.skripsiForm = new FormGroup({
      nama: new FormControl(null, Validators.required),
      nim: new FormControl(null, Validators.required),
      judul: new FormControl(null, Validators.required),
      classOf: new FormControl("2014", Validators.required),
      pembimbing: new FormArray([new FormControl(null, Validators.required),new FormControl(null),new FormControl(false)])
    })
  }

  onSubmit() {
    //console.log(this.studentForm.value);
    let modal = this.modalCtrl.create(this.dispPage, this.skripsiForm.value);
    modal.present();
  }

}
