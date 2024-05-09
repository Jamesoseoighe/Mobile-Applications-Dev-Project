import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { addIcons } from 'ionicons';
import { cog, call, people, help, home } from 'ionicons/icons';
import { carService } from '../Services/remote.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol
  , IonImg, IonIcon, IonButton, IonButtons, IonSearchbar, IonNav, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, IonList, IonItem, IonItemGroup, IonItemDivider, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, 
    IonCol, IonImg, IonIcon, IonButton, IonButtons, 
    IonSearchbar, IonNav, RouterLinkWithHref, 
    IonCardTitle, IonCardSubtitle, IonCardHeader, 
    IonCard, IonList, IonItem, IonItemGroup, IonItemDivider, CommonModule, IonLabel, FormsModule],
})
export class HomePage implements OnInit {

  cars: any[] = [];
  filteredCars: any[] = [];
  searchTerm: string = ''; // Define the searchTerm property here

  constructor(private router: Router, private carService: carService) {
    // Add ionicons to the component
    addIcons({ call, cog, people, help, home });
  }

  ngOnInit() {
    // Initialize filteredCars with all cars when component initializes
    this.filteredCars = this.cars;

    // Retrieve car data from service
    this.carService.GetCarData().subscribe(
      (data) => {
        this.cars = data.results;
        this.filteredCars = data.results;
      }
    );
  }

  // Function to filter cars based on searchTerm
  search() {
    if (!this.searchTerm.trim()) {
      // If searchTerm is empty, show all cars
      this.filteredCars = this.cars;
    } else {
      // Filter cars based on searchTerm
      this.filteredCars = this.cars.filter(car =>
        car.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  // Navigation functions
  btnClicked4() {
    console.log("btn Clicked");
    this.router.navigate(['home']);
  }

  btnClicked() {
    console.log("btn Clicked");
    this.router.navigate(['profile']);
  }

  btnClicked2() {
    console.log("btn2 Clicked");
    this.router.navigate(['contact']);
  }

  btnClicked3() {
    console.log("btn2 Clicked");
    this.router.navigate(['about']);
  }
}
