import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  city: string;
  state: string;

  constructor(
    private storage: Storage,
    private router: Router
    ) {

      this.storage.get('location').then((val) => {
      if (val != null) {
        const location = JSON.parse(val);
        this.city = location.city;
        this.state = location.state;
      } else {
        this.city = 'Rawalpindi';
        this.state = 'PK';
      }
    });
  }

  async saveForm() {
    const location = {
      city: this.city,
      state: this.state
    };

    this.storage.set('location', JSON.stringify(location));
    this.router.navigateByUrl('');
  }
}
