import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dialog-customer',
  templateUrl: './dialog-customer.component.html',
  styleUrls: ['./dialog-customer.component.css']
})
export class DialogCustomerComponent implements OnInit {

  @ViewChild('labelImport')
  labelImport: ElementRef
  fileToUpload: File = null;

  constructor() { }

  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
    this.fileToUpload = files.item(0);
    console.log("file input has changed. The file is")
  }

  ngOnInit(): void {
  }

}
