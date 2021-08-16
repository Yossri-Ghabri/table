import { Component, OnInit } from '@angular/core';
import {SmartTableService} from "./smart-table.service";
import {LocalDataSource} from "ng2-smart-table";


@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.css']
})
export class SmartTableComponent implements OnInit {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i> plus',
      createButtonContent: '<i class="nb-checkmark"></i> sup',
      cancelButtonContent: '<i class="nb-close"></i> close',
    },
    edit: {
      editButtonContent: '<i class="fab fa-accessible-icon"></i> edit',
      saveButtonContent: '<i class="nb-checkmark"></i> confirm',
      cancelButtonContent: '<i class="nb-close"></i> close',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i> delete ',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      },
    },
    class: 'table table-bordered'
  };
  source: LocalDataSource = new LocalDataSource();


  constructor(private service: SmartTableService ) {
    const data = this.service.getData();
    this.source.load(data);
  }

  ngOnInit(): void {
  }

  onDeleteConfirm(event:any): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
