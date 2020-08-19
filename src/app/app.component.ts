import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    
    <div style="text-align:center;color:gray" class="content">
    <!--The content below is only a placeholder and can be replaced.
    <h1>
        {{title}}
      </h1>
    </div>
    <weather></weather>   
      <todo></todo>  
      <app-pnr></app-pnr>-->
      <product></product>   
      <!--<app-add-product></app-add-product> -->
      <app-view-carparts></app-view-carparts>
      <app-add-carpart></app-add-carpart>
  `,
  styles: [`
      #left{
        float:left;
        width:100px;
      }
  `]
})
export class AppComponent {
  title = 'TODO';
}
