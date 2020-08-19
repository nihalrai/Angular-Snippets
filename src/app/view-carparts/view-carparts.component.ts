import { Component, OnInit } from '@angular/core';
import { CarpartsService } from '../carparts.service';

@Component({
  selector: 'app-view-carparts',
  template: `
    <button (click)="viewCarParts()"> View CarParts</button>
    <table *ngIf="toggle">
      <tr>
        <div *ngFor="let c of data">
            <td>{{ c.partNo }}</td>  
            <td>{{ c.name }}</td>  
            <td>{{ c.carModel }}</td>  
            <td>{{ c.price }}</td>  
            <td>{{ c.quantity }}</td>  
        </div>
      </tr>
    </table>
  `,
  styles: [
  ]
})
export class ViewCarpartsComponent implements OnInit {
  data:any;
  toggle:boolean=true;

  constructor(private service: CarpartsService) { }

  ngOnInit(): void {
  }

  viewCarParts(){
    if(this.toggle){
      this.toggle = !this.toggle;
      this.service.fetchCarParts().subscribe(data => {
      this.data = data;
    })}
    else {
      this.toggle = !this.toggle;
      
    }
  }
}
