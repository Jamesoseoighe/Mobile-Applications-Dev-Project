import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import {call,cog , people , help,home} from 'ionicons/icons';
import { Storage } from '@ionic/storage-angular';


import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent , IonGrid , IonRow , IonCol
  , IonImg , IonIcon , IonButton , IonButtons , IonSearchbar , IonNav , IonLabel , IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput ,
IonList, 
IonText, } from '@ionic/angular/standalone';

  

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid,IonRow , 
    IonCol , IonImg , IonIcon , IonButton , IonButtons , IonSearchbar , IonNav , IonLabel , IonCard ,
  IonCardHeader , IonCardTitle , IonCardContent , IonItem , IonInput , IonList , IonText],
})


export class ProfilePage implements OnInit {

  seller = {
    name: '',
    email: '',
    phone: ''
  };

  car = {
    brand: '',
    model: '',
    color: ''
  };

  constructor(private router:Router , private storage: Storage) { 
    addIcons({call,cog , people,help,home})
  }

  savedSeller: any;
  savedCar: any;

  ngOnInit() {
     // Initialize storage
     this.initStorage();
     // Load data from storage
     this.loadSellerData();
     this.loadCarData();
  
  }
  async initStorage() {
    await this.storage.create();
  }

  async loadSellerData() {
    const savedSeller = await this.storage.get('seller');
    if (savedSeller) {
      this.seller = savedSeller;
    }
  }

  async loadCarData() {
    const savedCar = await this.storage.get('car');
    if (savedCar) {
      this.car = savedCar;
    }
  }


  updateSellerName(event: any) {
    this.seller.name = event.detail.value;
  }

  updateSellerEmail(event: any) {
    this.seller.email = event.detail.value;
  }

  updateSellerPhone(event: any) {
    this.seller.phone = event.detail.value;
  }

  updateCarBrand(event: any) {
    this.car.brand = event.detail.value;
  }

  updateCarModel(event: any) {
    this.car.model = event.detail.value;
  }

 

  updateCarColor(event: any) {
    this.car.color = event.detail.value;
  }


  async saveSellerData() {
    await this.storage.set('seller', this.seller);
  }

  async saveCarData() {
    await this.storage.set('car', this.car);
  }

  btnClicked4(){

    console.log("btn Clicked")
    this.router.navigate(['home'])

  }

  btnClicked(){

    console.log("btn Clicked")
    this.router.navigate(['profile'])

  }
  btnClicked2(){

    console.log("btn Clicked")
    this.router.navigate(['contact'])

  }
  btnClicked3(){

    console.log("btn Clicked")
    this.router.navigate(['about'])

  }

}


