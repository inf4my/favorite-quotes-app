import { Component } from '@angular/core';
import { IonicPage, Toggle, NavController, NavParams } from 'ionic-angular';

import { SettingsServices } from '../../services/settings';

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settingsSvc: SettingsServices,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onToggle(toggle: Toggle){
    this.settingsSvc.setBackground(toggle.checked);
  }

  isChecked(){
    return this.settingsSvc.isAltBackground();
  }

}
