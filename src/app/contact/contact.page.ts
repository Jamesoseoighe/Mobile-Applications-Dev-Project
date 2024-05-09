import { Component, OnInit, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, NG_VALUE_ACCESSOR, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';
import { cog, call, people, help, home } from 'ionicons/icons';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol
  , IonImg, IonIcon, IonButton, IonCardContent, IonButtons, IonSearchbar, IonNav, 
  IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, IonList, IonItem, IonItemGroup, 
  IonItemDivider, IonLabel, IonSelectOption, IonToggle, IonSelect } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContactPage),
      multi: true
    }
  ],

  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, 
    IonCol, IonImg, IonIcon, IonButton, IonButtons, 
    IonSearchbar, IonNav,  
    IonCardTitle, IonCardSubtitle, IonCardHeader, 
    IonCard, IonList, 
    IonItem, ReactiveFormsModule, IonItemGroup, 
    IonItemDivider, CommonModule, IonToggle, IonSelect, IonSelectOption, IonLabel, FormsModule, IonCardContent],
})
export class ContactPage implements OnInit {

  settingsForm: FormGroup;

  darkModeEnabled: boolean = false;
  pushNotificationEnabled: boolean = false;
  selectedTheme: string = 'light';

  constructor(private router: Router, private formBuilder: FormBuilder, private toastController: ToastController, private storage: Storage) { 
    // Add ion icons to the component
    addIcons({call, people, help, home, cog})
    // initialize the settings form with default values
    this.settingsForm = this.formBuilder.group({
      darkModeEnabled: [false],
      pushNotificationEnabled: [false],
      selectedTheme: ['light'],
      selectedLanguage: ['en']
    });
  }

  ngOnInit() {
    // initialize Ionic storage
    this.storage.create(); 
    // load saved settings when component initializes
    this.loadSettings();
  }

  // Load saved settings from storage
  async loadSettings() {
    const settings = await this.storage.get('settings');
    if (settings) {
      this.settingsForm.setValue(settings);
    }
  }

  // Toggle dark mode and update settings
  toggleDarkMode() {
    const body = document.body;
    this.darkModeEnabled = !this.darkModeEnabled;

    if (this.darkModeEnabled) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }

  // Save settings to storage
  async saveSettings() {
    await this.storage.set('settings', this.settingsForm.value);
    this.presentToast('Settings saved successfully');
  }

  // Toggle push notifications and save settings
  async togglePushNotifications(event: CustomEvent) {
    this.pushNotificationEnabled = event.detail.checked;
    await this.saveSettings();
  }

  // Present a toast message
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  // Navigation 
  btnClicked4() {
    console.log("btn Clicked")
    this.router.navigate(['home'])
  }

  btnClicked() {
    console.log("btn Clicked")
    this.router.navigate(['profile'])
  }

  btnClicked2() {
    console.log("btn Clicked")
    this.router.navigate(['contact'])
  }

  btnClicked3() {
    console.log("btn Clicked")
    this.router.navigate(['about'])
  }
}
