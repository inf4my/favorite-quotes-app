import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { SkripsiPage } from '../pages/skripsi/skripsi';
import { SettingsPage } from '../pages/settings/settings';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = SkripsiPage;
  skripsiPage = SkripsiPage;
  tabsPage = TabsPage;
  settingsPage = SettingsPage

  @ViewChild('sideMenuContent') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      this.nav.setRoot(this.skripsiPage);
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}

