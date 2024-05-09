import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { IonApp, IonRouterOutlet  } from '@ionic/angular/standalone';
import { PushNotifications, PushNotificationSchema, PermissionStatus } from '@capacitor/push-notifications';


const platform = Capacitor.getPlatform();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})


export class AppComponent{
  constructor() {
    this.initializeApp();
  }


  

  async initializeApp() {

    if (platform !== 'web') {
      const pushNotifications = PushNotifications;
      const permissionResult = await pushNotifications.requestPermissions();
      if (permissionResult.receive === 'granted') {
        pushNotifications.register();
      }
  
      // Listen for incoming notifications
      pushNotifications.addListener('pushNotificationReceived',
        (notification: PushNotificationSchema) => {
          console.log('Push received', notification);
          // Handle the incoming notification here
        }
      );
    } 

    
   
  }

}


