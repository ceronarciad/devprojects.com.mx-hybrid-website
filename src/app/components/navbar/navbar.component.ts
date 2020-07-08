import { Component, OnInit, HostListener } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {
    this.loadComponents();
   }

  
  ngOnInit() {
  }

  loadComponents(){ 
    $(document).ready(function(){
      var lastScrollTop = $(window).scrollTop();
      //alert("En donde estoy " + lastScrollTop);
      $(window).scroll(function(event){
         var st = $(this).scrollTop();

         if (st > lastScrollTop){
            $( "#header" ).addClass( "shadow", 1000 );
         }
        
         if(lastScrollTop < 10){
            $( "#header" ).removeClass( "shadow", 1000 );
          }
         
         lastScrollTop = st;
         console.log(lastScrollTop);
      });

  });
  }
}
