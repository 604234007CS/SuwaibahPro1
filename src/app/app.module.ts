import { Minproject_1Page } from './../pages/minproject-1/minproject-1';
import {HttpClientModule} from '@angular/common/http';
import { JsonMenuPage } from './../pages/json-menu/json-menu';
import { CameraPage } from './../pages/camera/camera';
import { FlashPage } from './../pages/flash/flash';
import { LoginPage } from './../pages/login/login';
import { BarcodescanPage } from './../pages/barcodescan/barcodescan';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Flashlight } from '@ionic-native/flashlight';
import { BatteryStatus } from '@ionic-native/battery-status';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ApiKeyProvider } from '../providers/api-key/api-key';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { TextToSpeech } from '@ionic-native/text-to-speech';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BarcodescanPage,
    LoginPage,
    FlashPage,
    CameraPage,
    JsonMenuPage,
    Minproject_1Page
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BarcodescanPage,
    LoginPage,
    FlashPage,
    CameraPage,
    JsonMenuPage,
    Minproject_1Page
   
  ],
  providers: [
    StatusBar,
    SplashScreen,SMS,BarcodeScanner,Flashlight,BatteryStatus,Camera,YoutubeVideoPlayer,TextToSpeech,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiKeyProvider
  ]
})
export class AppModule {}
