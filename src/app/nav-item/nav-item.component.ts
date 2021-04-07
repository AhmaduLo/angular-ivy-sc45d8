import { Component, EventEmitter, OnInit } from "@angular/core";
import { Input, Output } from "@angular/core";

@Component({
  selector: "app-nav-item",
  templateUrl: "./nav-item.component.html",
  styleUrls: ["./nav-item.component.css"]
})
export class NavItemComponent implements OnInit {
  @Input() item;
  @Output() clcikedItem = new EventEmitter;
  constructor() {}

  ngOnInit() {}
}
