import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams, Platform } from "ionic-angular";
import { Geolocation } from "@ionic-native/geolocation";

/**
 * Generated class for the SiteMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare const google: any;

@IonicPage()
@Component({
  selector: "page-geo",
  templateUrl: "geo.html"
})
export class GeoPage implements OnInit {
  @ViewChild("map") mapElement: ElementRef;
  map: any;

  lat: number;
  lng: number;

  userLocation: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    public platform: Platform
  ) {}

  ngOnInit() {
    this.getUserLocation().then(() => {
      this.platform.ready().then(() => {
        this.initMap();
      });
    });
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 30,
      center: this.userLocation
    });
  }

  async getUserLocation() {
    await this.geolocation
      .getCurrentPosition({ enableHighAccuracy: true })
      .then(resp => {
        this.userLocation = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
        this.lat = resp.coords.latitude;
        this.lng =resp.coords.longitude;
      })
      .catch(error => {
        console.log("Erreur", error);
      });

    let watch = this.geolocation.watchPosition();
    watch.subscribe(data => {
      //
    });
  }
}
