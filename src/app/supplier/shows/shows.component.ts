
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { SupplierService } from '../../service/supplier.service';
import { HttpClient } from '@angular/common/http';


/** Constants used to fill up our data base. */
// const COLORS: string[] = [
//   'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
//   'aqua', 'blue', 'navy', 'black', 'gray'
// ];
// const NAMES: string[] = [
//   'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
//   'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
// ];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent  {

  materialList: any[]=[];
  imageDirectoyPath:any = 'http://127.0.0.1:5000/public/image/';
  material_id: string;
  Search: string;
  materialMessage: string;
  dataArr: any;
  material_name:any;
  page:any = 1;
  limit: any = 5;
  skip: any;
  categoryArr:any;
  totalCount: any;
  constructor(private http: HttpClient,
    private SupplierService: SupplierService,) {

  }
  ngOnInit(): void {
    this.getMeterial();
  }
  getMeterial(){
   
    this.SupplierService.getData().subscribe(res=>{
      // this.spinner.hide();
      this.dataArr=res;
    })
  }

//   deleteMaterial(id){
//     if (confirm('คุณต้องการลบหรือไม่ ?') === true)
//     this.SupplierService.deletesupplier(id).subscribe(result => {
//       this.getData();
//       // this.spinner.show();
//       // this.toastr.success('ลบข้อมูลวัตถุดิบสำเร็จ!'); 
//     },
//     err => {
//     // this.toastr.error('ลบล้มข้อมูลวัตถุดิบเหลว!');
//     // this.spinner.show();
//     console.log(err);
//     });
// }

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   }
}
