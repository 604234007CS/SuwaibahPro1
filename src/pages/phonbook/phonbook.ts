import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhonbookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phonbook',
  templateUrl: 'phonbook.html',
})
export class PhonbookPage {

  contactArray = [ {name: 'Kan',telephone: '0882372538',imageUrl: 'assets/imgs/Koala.jpg'},
                   {name: 'Tar',telephone: '0986866014',imageUrl: 'assets/imgs/Penguins.jpg'},
                   {name: 'Bah',telephone: '0935951819',imageUrl: 'assets/imgs/Chrysanthemum.jpg'} ,
                   {name: 'Far',telephone: '0916466030',imageUrl: 'assets/imgs/Desert.jpg'},
                   {name: 'Sma',telephone: '0888342938',imageUrl: 'assets/imgs/Hydrangeas.jpg'}
                ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhonbookPage');
  }

  viewDetails(item){
    this.navCtrl.push("PhonebookDeteilPage",item)
}


}
