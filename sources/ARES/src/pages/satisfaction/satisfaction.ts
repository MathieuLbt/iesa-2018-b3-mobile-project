import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the SatisfactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-satisfaction',
  templateUrl: 'satisfaction.html',
})
export class SatisfactionPage {
  contact = {
    name: '',
    description: '',
    email: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer) {

  }


contactEmail() {
  this.emailComposer.isAvailable().then((available: boolean) => {
    if (available) {
      //Now we know we can send
    }
  });

  let email = {
    to: 'solenne.daguerre@gmail.com',
    cc: '',
    attachments: [
      'file://img/logo.png',
      'res://icon.png',
      'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
      'file://README.pdf'
    ],
    subject: 'Satisfaction',
    body: 'todo.description',
    isHtml: true
  }
  // Send a text message using default options
  this.emailComposer.open(email);


// // add alias
//    this.email.addAlias('gmail', 'com.google.android.gm');
//
// // then use alias when sending email
//    this.email.open({
//      app: 'gmail',
//      ...
//    });



}

  ionViewDidLoad(){
    console.log('ionViewDidLoad SatisfactionPage');
  }

  onNewContact(form) {
    console.log(form.value);
    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        //Now we know we can send
      }
    });

    let email = {
      to: 'solenne.daguerre@gmail.com',
      attachments: [
        'file://img/logo.png',
        'res://icon.png',
        'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        'file://README.pdf'
      ],
      subject: form.value.name,
      body: form.value.description,
      isHtml: true
    };
    // Send a text message using default options
    this.emailComposer.open(email);
  }

}




