import { Component } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "stripe";
  navMenus: any[];
  mainMenu: any[];

  constructor(http: Http) {
    http
      .get(
        "https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4"
      )
      .subscribe(response => {
        this.navMenus = response.json();
        console.log(this.navMenus);
        this.mainMenu = Object.keys(this.navMenus);
        console.log(this.mainMenu);
      });
  }
}
