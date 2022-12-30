import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-success',
  templateUrl: './add-success.component.html',
  styleUrls: ['./add-success.component.css'],
})
export class AddSuccessComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  reloadPage(): void {
    window.location.reload();
  }
}
