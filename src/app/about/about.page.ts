import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { ToastController } from '@ionic/angular';
// Importing ionicons icons for use in the component
import {cog, call , people , help , home} from 'ionicons/icons';
import { IonHeader, IonToolbar, IonTitle, IonContent , IonGrid , IonRow , IonCol
  , IonImg , IonIcon , IonButton , IonCardContent, IonButtons , IonSearchbar , IonNav, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, IonList, IonItem, IonItemGroup, IonItemDivider, IonLabel} from '@ionic/angular/standalone';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid,IonRow , 
    IonCol , IonImg , IonIcon , IonButton , IonButtons , 
    IonSearchbar , IonNav ,  
    IonCardTitle , IonCardSubtitle , IonCardHeader , 
    IonCard , IonList , IonItem , IonItemGroup , IonItemDivider , CommonModule, IonLabel , FormsModule , IonCardContent],
})
export class AboutPage{

  constructor(private router:Router,private toastController: ToastController) {
     // Adding icons to the component
    addIcons({cog,call , people,help , home})
   }

   btnClicked4() {
    console.log("btn Clicked");
    this.router.navigate(['home']);
  }



 // navigate to the profile page
 btnClicked(){

  console.log("btn Clicked")
  this.router.navigate(['profile'])

}

// navigate to the contact page
btnClicked2(){

  console.log("btn Clicked")
  this.router.navigate(['contact'])

}

//navigate to the about page
btnClicked3(){

  console.log("btn Clicked")
  this.router.navigate(['about'])

}
}
