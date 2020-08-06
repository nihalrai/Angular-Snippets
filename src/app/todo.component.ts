import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'todo',
    template: `
        <div id="myDIV" class="header">
        <h2 style="margin:5px">TODO</h2>
            <input type="text" id="myInput" [(ngModel)]=tempStore name="tempStore">
        <span (click)="addTask()" class="addBtn">Add</span>
        </div>
        <div id="myUL">
        <ul >
            <div id="null" *ngFor="let p of tasks">
                <li>{{ p | titlecase}}</li>
            </div>
        </ul>
    `,
    styles: [`
        body {
            margin: 0;
            min-width: 250px;
            font-family: Muli;
        }

        #id{

        }
        
        * {
            box-sizing: border-box;
        }

        
        ul {
            margin: 0;
            padding: 0;
        }

        
        ul li {
            cursor: pointer;
            position: relative;
            padding: 12px 8px 12px 40px;
            list-style-type: none;
            background: #eee;
            font-size: 18px;
            transition: 0.2s;
        
        
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        
        ul li:nth-child(odd) {
            background: #f9f9f9;
        }


        ul li:hover {
            background: #ddd;
        }

        
        ul li.checked {
            background: #888;
            color: #fff;
            text-decoration: line-through;
        }
        .close {
            position: absolute;
            right: 0;
            top: 0;
            padding: 12px 16px 12px 16px;
        }

        .close:hover {
            background-color: #f44336;
            color: white;
        }

        
        .header {
            background-color: grey;
            padding: 30px 40px;
            color: white;
            text-align: center;
        }

        
        .header:after {
            content: "";
            display: table;
            clear: both;
        }

        
        input {
            margin: 0;
            border: none;
            border-radius: 0;
            width: 75%;
            padding: 10px;
            float: left;
            font-size: 16px;
        }

        
        .addBtn {
            padding: 10px;
            width: 25%;
            background: #d9d9d9;
            color: #555;
            float: left;
            text-align: center;
            font-size: 16px;
            cursor: pointer;
            transition: 0.3s;
            border-radius: 0;
        }

        .addBtn:hover {
            background-color: #bbb;
        }
    `]
})
export class TodoComponent implements OnInit{
    tasks = new Set();
    toggle:boolean = false;
    
    tempStore:string;

    ngOnInit(){
        
    }

    addTask(){
        this.tasks.add(this.tempStore);
        this.tempStore = '';
    }

}