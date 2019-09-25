import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-minproject-1',
  templateUrl: 'minproject-1.html',
})
export class Minproject_1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Minproject_1Page');
  }

  nowMovie(){
    this.navCtrl.push("NowMoviePage");
  }

  upComing(){
    this.navCtrl.push("UpComingPage");
  }

  popular(){
    this.navCtrl.push("PopularPage");
  }

  topRated(){
    this.navCtrl.push("TopRatedPage");
  }
}
