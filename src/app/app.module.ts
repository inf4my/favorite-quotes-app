import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LibraryPage } from '../pages/library/library';
import { TabsPage } from '../pages/tabs/tabs';
import { FavoritePage } from '../pages/favorite/favorite';
import { QuotesPage } from '../pages/quotes/quotes';
import { QuotesService } from '../services/quotes';
import { QuotePage } from '../pages/quote/quote';
import { SkripsiPage } from '../pages/skripsi/skripsi';
import { SettingsPage } from '../pages/settings/settings';
import { SettingsServices } from '../services/settings';
import { DispPage } from '../pages/disp/disp';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LibraryPage,
    TabsPage,
    FavoritePage,
    QuotesPage,
    QuotePage,
    SettingsPage,
    SkripsiPage,
    DispPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LibraryPage,
    TabsPage,
    FavoritePage,
    QuotesPage,
    QuotePage,
    SettingsPage,
    SkripsiPage,
    DispPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QuotesService,
    SettingsServices,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
