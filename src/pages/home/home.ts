import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	userData:any;

  constructor(private facebook: Facebook) {

  }

	loginWithFB() {
	    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
	      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
	        this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
	      });
	    });
	  }

}
