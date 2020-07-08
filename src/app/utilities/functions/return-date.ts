import { DateData } from '../models/date';
import { SimpleChanges } from '@angular/core';

export class ReturnDate {
    public language: string  = "es";    
    public date = new DateData();

    public constructor(){
    }
    
    ngOnChanges(changes: SimpleChanges): void {
        
    }

    public buildDate(){
        var dateNow = new Date();
        var months = new Array();
        var days = new Array();
        var year = dateNow.getFullYear();
        var month = dateNow.getMonth();  
        var day = dateNow.getDate();   

        switch (this.language) {
            case "es":
                months = new Array("Enero", "Febrero", "Marzo",
                "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
                "Octubre", "Noviembre", "Diciembre"); 
                days = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
                break;
            case "en":
                months = new Array("January", "February", "March",
                "April", "May", "June", "July", "August", "September",
                "October", "November", "December"); 
                days = new Array("Sunday", "Monday", "Thuesday", "Wednesday", "Thuersday", "Friday", "Saturday");                
                    break;
                
            default:
                break;
        }
        
        var monthDescription = months[month];     
        var dayDescription = days[day]; 
        
        this.date.Year = year;
        this.date.Month = month
        this.date.MonthDescription = monthDescription;
        this.date.Day = day;
        this.date.DayDescription = dayDescription;

        return this.date;
    }
    
}
