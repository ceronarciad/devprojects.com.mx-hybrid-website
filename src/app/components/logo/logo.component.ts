import { Component, OnInit, ElementRef, SimpleChanges } from '@angular/core';
import { ReturnDate } from 'src/app/utilities/functions/return-date';
import { DateData } from 'src/app/utilities/models/date';

declare const $;
@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  private dateNow: ReturnDate = new ReturnDate();
  private date: DateData = new DateData();

  constructor(private el: ElementRef) {
    this.dateNow.language = "en";
    this.date = this.dateNow.buildDate();
    this.date.Month = 101;
  }

  ngOnInit() {
    
    let myTag = this.el.nativeElement.querySelector("div"); 
    myTag.classList.remove('logo-default'); 

    switch (this.date.Month) {
      case 0:
        myTag.classList.add('logo-january'); 
        break;
      case 1:
          myTag.classList.add('logo-february'); 
          break;   
      case 2:
          myTag.classList.add('logo-march'); 
          break; 
      case 3:
          myTag.classList.add('logo-april'); 
          break;    
      case 4:
        myTag.classList.add('logo-may'); 
        break;
      case 5:
          myTag.classList.add('logo-june'); 
          break;   
      case 6:
          myTag.classList.add('logo-july'); 
          break; 
      case 7:
          myTag.classList.add('logo-august'); 
          break;
      case 8:
          myTag.classList.add('logo-september'); 
          break;       
      case 9:
          myTag.classList.add('logo-october'); 
          break;       
      case 10:
          myTag.classList.add('logo-november'); 
          break;
      case 11:
          myTag.classList.add('logo-december'); 
          break;       
      case 100:
          myTag.classList.add('logo-white'); 
          break;      
      case 101:
            myTag.classList.add('logo-white-glass'); 
            break;      
      case 102:
            myTag.classList.add('logo-black-glass'); 
              break;                                                                                    
      default:
        myTag.classList.add('logo-default'); 
        break;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
