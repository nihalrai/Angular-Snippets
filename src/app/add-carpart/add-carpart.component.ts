import { Component, OnInit } from '@angular/core';
import { CarpartsService } from '../carparts.service';

@Component({
  selector: 'app-add-carpart',
  template: `
    <form (ngSubmit)="addCarPart()">
      Enter part No : <input type = "number" name="t1" [(ngModel)]=carPart.partNo /><br />
      Enter Part Name : <input type = "text" name="t2" [(ngModel)]=carPart.name /><br />
      Enter Car Model : <input type = "text" name="t3" [(ngModel)]=carPart.carModel /><br />
      Enter Price : <input type = "number" name="t4" [(ngModel)]=carPart.price /><br />
      Enter Quantity : <input type = "number" name="t5" [(ngModel)]=carPart.quantity /><br />
      <button type = "submit">Add</button>
    </form>
  `,
  styles: [
  ]
})
export class AddCarpartComponent {

  carPart: CarPart = new CarPart();
  constructor(private service: CarpartsService) { }

  addCarPart(){
    this.service.addCarPart(this.carPart).subscribe(data =>{
      alert(JSON.stringify(data));
    })
  }

}

export class CarPart {

  partNo: number;
  name: string;
  carModel: string;
  price: number;
  quantity: number;

}