import { Injectable } from '@angular/core';
import { getJSON } from 'jquery';
import { Observable } from 'rxjs';
import { of } from 'rxjs'
import { from, fromEvent } from 'rxjs'
import { map, flatMap, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  requestStream: Observable<any>;
  refreshClickStream: Observable<any>;

  constructor() {
    this.requestStream = of('https://api.github.com/users');
    
  }
  
 


  RxBindClick(event) {
    this.refreshClickStream = fromEvent(event,'click');
    this.requestStream = this.refreshClickStream.pipe(
      map(
        () => {
          let randomOffset = Math.floor(Math.random()*500);
          return 'https://api.github.com/users?since=' + randomOffset;
        }
      ),
      startWith('https://api.github.com/users')
    );
    console.log('dd');
    
    this.requestStream.subscribe(x => console.log(x));
    
  }


  RxRequest() {
    var requestStream = of('https://api.github.com/users');
    var responseStream = requestStream.pipe(
      flatMap(function(requestUrl){
        return from(getJSON(requestUrl));
      })
    );
    responseStream.subscribe(x => console.log(x));

    /**
    requestStream.subscribe(function(requestUrl) {
      // execute the request
      var responseStream = Observable.create(function(observer){
        getJSON(requestUrl)
        .done(function(response){observer.next(response);})
        .always(function(){observer.complete()});
      });
      responseStream.subscribe(function(response){
        console.log(response);
      });

    });
    */
  }


}
