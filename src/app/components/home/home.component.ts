import { Component, OnInit } from '@angular/core';
import { Observable, of, interval, fromEvent} from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ HomeService ]
})
export class HomeComponent implements OnInit {

  title = "tt";
  

  constructor(private homeService:HomeService) { }

  ngOnInit() {
    let refreshButton = document.querySelector('.refresh');
    this.homeService.RxBindClick(refreshButton);  
  }


  button2Click(){
    this.homeService.RxRequest();
  }


  
  


}
