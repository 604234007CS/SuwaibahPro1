import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
/**
 * Generated class for the PhonebookDeteilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phonebook-deteil',
  templateUrl: 'phonebook-deteil.html',
})
export class PhonebookDeteilPage {
  contact = { name: '', telephone: '', imageUrl: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams,private mysms:SMS) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookDetailPage');
    this.contact = this.navParams.data;
    console.log(this.contact);
  }

  sms() {
    this.mysms.send(this.contact.telephone,"Hello world");
  }

  call() {
    window.open('tel:'+this.contact.telephone);
  }

}
