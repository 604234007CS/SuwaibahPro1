import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-post-json',
  templateUrl: 'post-json.html',
})
export class PostJsonPage {
  returnMg = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostJsonPage');
  }


  signUp(_name, _surname, _email) {
    let jsonData;
    jsonData = {
      name: _name,
      surname: _surname,
      email: _email
    };
    console.log(jsonData);
    let url = 'http://localhost/shop/ion-post-json-object.php';
    this.http.post(url,jsonData).subscribe(
      (data: any)=>{
        this.returnMg= data.message;

      }
    );
  }



}
