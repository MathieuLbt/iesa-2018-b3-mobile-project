import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';



/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  public myphotos : any;
  public base64Image : string;

  ngOnInit(){
    this.myphotos = [];
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private alertCtrl: AlertController) {
  }

  takePhoto(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {

      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.myphotos.push(this.base64Image);
      this.myphotos.reverse();
    }, (err) => {
      // Handle error
    });
  }

  removePhoto(index){
    let confirm = this.alertCtrl.create({
      title: 'Vous êtes sur de vouloir supprimer cette photo ?',
      message: '',
      buttons: [
        {
          text: 'Non',
          handler: () => {

          }
        },
        {
          text: 'Oui',
          handler: () => {
            this.myphotos.splice(index,1);
          }
        }
      ]
    });
    confirm.present();

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

}
