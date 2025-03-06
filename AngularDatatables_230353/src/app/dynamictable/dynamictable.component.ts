import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataTableDirective} from 'angular-datatables';
import { Observable, Subject } from 'rxjs';
import DataTables from 'datatables.net';
@Component({
  selector: 'app-dynamictable',
  imports: [],
  templateUrl: './dynamictable.component.html',
  styleUrl: './dynamictable.component.css'
})
export class DynamicTableComponent implements OnInit {
  users: any[] = [];
  dtOptions:any={}
  ;

  constructor(private http:HttpClient) {}

  ngOnInit(): void{
    this.dtOptions={
      pagingType:'full_numbers',
      pageLength:5,
      processing:true

    }; 
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
    .subscribe(data=>{
      this.users=data;

    });
    
    }
  }


