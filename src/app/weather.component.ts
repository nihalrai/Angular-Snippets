import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'weather',
    template: `
        <form (ngSubmit)="process()">
            Enter city name : <input name="city" [(ngModel)]=city />
            <button type="submit">Search</button>
    </form>
    `   
})

export class WeatherComponent {
    city: string;
    API_KEY: string = "XXXXXXXXXXXXXXXXXXXXXXXX";
    url: string;
    
    constructor(private http:HttpClient) {
        
    }
    
    process(){
        var url="https://api.openweathermap.org/data/2.5/weather?q="+ this.city +"&appid=" + this.API_KEY;
        this.http.get(url).subscribe(this.processData);
    }
    processData(data){    
        let jsonObject = JSON.stringify(data) as Object;
        console.log(jsonObject.toString());
        alert(jsonObject.toString());
    }
}

