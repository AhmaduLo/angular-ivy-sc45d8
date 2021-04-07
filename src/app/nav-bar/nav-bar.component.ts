import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  listLinks = [
    {
      title: "Accueil",
      link: "/",
      count: 0
    },
    {
      title: "Pricing",
      link: "/price",
      count: 0
    },
    {
      title: "Showcase",
      link: "/show",
      count: 0
    },
    {
      title: "About",
      link: "/about",
      count: 0
    }
  ];

  showItemClicked = "none";

  constructor() {}

  ngOnInit() {}

  onClikedItem(titleLink) {
    this.showItemClicked = titleLink;
  }
}
