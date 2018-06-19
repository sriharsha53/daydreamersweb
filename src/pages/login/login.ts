import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController} from 'ionic-angular';
import { Auth } from '../../providers/auth/auth';
// import { DrawcanvasComponent } from '../../components/drawcanvas/drawcanvas';
// import {FeedPage} from '../feed/feed';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string;
  password: string;
  loading: any;
  constructor(public navCtrl: NavController, public authService: Auth, public loadingCtrl: LoadingController) {
 
  }
  
  ionViewDidLoad() {
 
    this.showLoader();

    //Check if already authenticated
    this.authService.checkAuthentication().then((res) => {
        this.loading.dismiss();
        this.navCtrl.setRoot(TabsPage);
    }, (err) => {
        this.loading.dismiss();
    });

}

login(){
 
  this.showLoader();

  let credentials = {
      email: this.email,
      password: this.password
  };

  this.authService.login(credentials).then((result) => {
      this.loading.dismiss();
      console.log(result);
      this.navCtrl.setRoot(TabsPage);
  }, (err) => {
      this.loading.dismiss();
      console.log(err);
  });

}

launchSignup(){
  this.navCtrl.push(SignupPage);
}

showLoader(){

  this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
  });

  this.loading.present();

}
}


