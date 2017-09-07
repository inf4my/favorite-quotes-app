import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LibraryPage } from '../library/library';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  library=LibraryPage;

  constructor(public navCtrl: NavController) {

  }

}
