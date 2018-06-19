import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { TabsPage } from '../pages/tabs/tabs';
import {FeedPage} from '../pages/feed/feed';
import {TutorialPage} from '../pages/tutorial/tutorial';
import { LoginPage } from '../pages/login/login';
import {ImagepickerPage} from '../pages/imagepicker/imagepicker'

import {GamePage} from '../pages/game/game';
import {BookmarksPage} from '../pages/bookmarks/bookmarks';
import {SettingsPage} from '../pages/settings/settings';
import {ProfilePage} from '../pages/profile/profile';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Camera} from '@ionic-native/camera';
import {SignupPage} from '../pages/signup/signup';
import {DrawcanvasComponent} from '../components/drawcanvas/drawcanvas'
import { Auth } from '../providers/auth/auth';
import {IonicStorageModule} from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    FeedPage,
    LoginPage,
    SignupPage,
    TutorialPage,
    GamePage,
    BookmarksPage,
    SettingsPage,
    ProfilePage,
    ImagepickerPage,
    DrawcanvasComponent
  ],
  imports: [
    BrowserModule,
    HttpModule ,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    FeedPage,
    LoginPage,
    SignupPage,
    TutorialPage,
    GamePage,
    BookmarksPage,
    SettingsPage,
    ProfilePage,
    ImagepickerPage,
    DrawcanvasComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Auth
  ]
})
export class AppModule {}
