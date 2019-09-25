import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { ApiKeyProvider } from '../../providers/api-key/api-key';

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  movieVideo:any=[];
  videos:any=[];
  movie:any;
  url = 'https://www.youtube.com/watch?v=';
  constructor(public navCtrl: NavController, public navParams: NavParams,private youtube: YoutubeVideoPlayer,private movieAPi : ApiKeyProvider) {
  }

  ionViewDidLoad() {
    this.movieVideo = this.navParams.data;
    this.movieAPi.getVideos(this.movieVideo).subscribe((movie_data:any=[])=>{
     console.log(this.movieVideo);
      this.videos=movie_data['results'];
      console.log(this.videos);
    });
}

openVideo(keyOpen){
 //this.youtube.openVideo(keyOpen);
 window.open('https://www.youtube.com/watch?v='+keyOpen);
}

}
