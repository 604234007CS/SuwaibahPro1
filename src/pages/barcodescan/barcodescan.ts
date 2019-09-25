import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
/**
 * Generated class for the BarcodescanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barcodescan',
  templateUrl: 'barcodescan.html',
})
export class BarcodescanPage {
  scanText = " ";
  scanFormat="";

  constructor(public navCtrl: NavController, public navParams: NavParams,private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodescanPage');
  }

  scan(){
    
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log('Barcode data', barcodeData);
      this.scanText=barcodeData.text;
      this.scanFormat=barcodeData.format;
     }).catch(err => {
         console.log('Error', err);
     });
  }


}
