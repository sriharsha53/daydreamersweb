import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Injectable()
export class Auth {

  public token: any;
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
  TOKEN = 'token';
  USER_ID='userID';
  emulator_url ='http://10.0.2.2/';
  localhost_url = 'http://localhost:3000/';
  constructor(public http: Http,public events: Events, public storage: Storage) {

  }

  checkAuthentication() {

    return new Promise((resolve, reject) => {

      //Load token if exists
      this.storage.get(this.TOKEN).then((value) => {

        this.token = value;

        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', this.token);

        let options = new RequestOptions({ headers: headers });

        this.http.get(this.localhost_url+'auth/protected', options)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    });
  }

  createAccount(details) {

    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(this.localhost_url+'auth/signup', JSON.stringify(details), { headers: headers })
        .subscribe(res => {

          let data = res.json();
          this.storage.set(this.TOKEN, data.token);
          this.storage.set(this.HAS_LOGGED_IN, true);
          this.storage.set(this.USER_ID, data.user._id);
          this.events.publish('user:signup');
          resolve(data);

        }, (err) => {
          reject(err);
        });

    });

  }

  login(credentials) {

    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post( this.localhost_url+'/auth/login', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {

          let data = res.json();
          this.storage.remove(this.TOKEN);
          this.storage.set(this.TOKEN, data.token);
          this.storage.set(this.HAS_LOGGED_IN, true);
          this.storage.set(this.USER_ID, data.user._id);
          this.events.publish('user:login');
          resolve(data);

          resolve(res.json());
        }, (err) => {
          this.storage.set(this.TOKEN, '');
          this.storage.set(this.HAS_LOGGED_IN, false);
          this.storage.set(this.USER_ID, '');
          reject(err);
        });

    });

  }

  logout() {
    this.storage.set(this.TOKEN, '');
    this.storage.set(this.HAS_LOGGED_IN, false);
    this.storage.set(this.USER_ID, '');
    this.events.publish('user:logout');
  }

}
