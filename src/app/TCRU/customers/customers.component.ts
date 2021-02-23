import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { CustomersService } from '../../Service/customers.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogCustomerComponent } from '../dialog-customer/dialog-customer.component';
import { ExcelService } from '../../Service/excel.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements AfterViewInit {

  dataArr: any;

  constructor(private http: HttpClient,
    private Customers: CustomersService,
    public dialog: MatDialog,
    private excel: ExcelService) { }

    openDialog(){
      let dialogRef = this.dialog.open(DialogCustomerComponent);

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

  displayedColumns: string[] = ['id', 'fritsname', 'lastname', 'address', 'phonenumber'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  downlondExcel() {

    // console.log('called');
     this.excel.downlondExcel();
   }

  getCustomer()
  {
    this.Customers.getData().subscribe(res=> {
      this.dataArr = res;
    })
  }

}