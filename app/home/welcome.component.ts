import { Component } from 'angular2/core';

@Component({
    templateUrl: 'app/home/welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = "Welcome";
    imageUrl: string = "https://support.bigcommerce.com/servlet/rtaImage?eid=ka61300000004XP&feoid=00N1300000BR3CT&refid=0EM130000000qWG";
}