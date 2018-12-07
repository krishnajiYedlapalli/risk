import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { 

    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  });

  }

  ngOnInit() {
  }

}
