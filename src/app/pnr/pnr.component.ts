import { Component, OnInit } from '@angular/core';
import { PnrService } from '../pnr.service';

@Component({
  selector: 'app-pnr',
  template: `
  <form (ngSubmit)="check()">
  Enter pnr No : <input type="number" name="pnrNo" [(ngModel)]=pnrNo/> <br />
  <button type="submit" > Show Status</button>
  </form>
  <div *ngIf="data">
    PNR No: {{ data.pnrNo }}  <br />
    Train No: {{ data.trainNo }}  <br />
    Trave Date: {{ data.travelDate }}  <br />
    <table boder='1'>
      <tr> <th> Name</th> <th> Gender </th> <th> Status </th> </tr>
      <tr *ngFor="let p of data.passengers">
        <td> {{ p.name }} </td>
        <td> {{ p.gender }} </td>
        <td> {{ p.status }} </td>
      </tr>
    </table>
  </div>

  `,
  styles: [
  ]
})
export class PnrComponent implements OnInit {
  pnrNo : number;
  data: any;
  constructor(private pnrServ: PnrService) { }

  check(){
    this.pnrServ.fetchPnrStatus(this.pnrNo).subscribe(data => {
      //alert(JSON.stringify(datathis.data = data;
      
      this.data = data;
      

    })
  }
  ngOnInit(): void {
  }

}