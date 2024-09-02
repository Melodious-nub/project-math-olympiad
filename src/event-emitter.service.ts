import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  invokeFirstComponentFunction = new EventEmitter();    
  subsVar: Subscription=new Subscription();    
    
  constructor() { }    
    
  onFirstComponentButtonClick() {    
    this.invokeFirstComponentFunction.emit();    
  }    
}
