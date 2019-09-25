import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiKeyProvider } from '../../providers/api-key/api-key';
import { TextToSpeech } from '@ionic-native/text-to-speech';

/**
 * Generated class for the DetailsMoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-movie',
  templateUrl: 'details-movie.html',
})
export class DetailsMoviePage {
 moviedata:any=[];
 
   constructor(public navCtrl: NavController, public navParams: NavParams,private movieApi:ApiKeyProvider,private tts: TextToSpeech ) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsMoviePage');
    this.moviedata = this.navParams.data;
    console.log(this.moviedata);
}

openVideo(movie){
    this.navCtrl.push("VideoPage",movie);
}

 talk(textOrOptions){
   console.log(textOrOptions);
  this.tts.speak(textOrOptions)
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));

}

}
