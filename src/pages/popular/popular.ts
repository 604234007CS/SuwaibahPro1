import { ApiKeyProvider } from './../../providers/api-key/api-key';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';


/**
 * Generated class for the PopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html',
})
export class PopularPage {

  moviesArray:any[];
  searchQuery: string = '';
  items: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private movie : ApiKeyProvider ) {
    this.loadLetest();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopularPage');
  }

  loadLetest(){
    this.movie.getMoviespop().subscribe(movies => {
      this.moviesArray = movies['results'];
      console.log(movies);
    });
  }

  getDetails(movie){
    this.navCtrl.push("DetailsMoviePage",movie);
  }


    getItems(ev: any) {
      //const val = ev.target.value;
      let val = ev.target.value;
      if (val != 0) {
        this.movie.searchMovie(val).subscribe(movies => {
          this.moviesArray = movies['results'];
        });
      }else {
        this.loadLetest()
    }
  }
  

  
}
