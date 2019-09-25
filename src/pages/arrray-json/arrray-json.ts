import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-arrray-json',
  templateUrl: 'arrray-json.html',
})
export class ArrrayJsonPage {
  gameArray=[];
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.loadGameData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArrrayJsonPage');
  }
  loadGameData(){
    let url ='http://localhost/shop/getAllGames_7.php';
    this.http.get(url).subscribe((data: any) => {
        console.log(data);
        this.gameArray=data.games;
        
      },(error)=>{
        console.log(error);
      }
      );
  }
  

}
