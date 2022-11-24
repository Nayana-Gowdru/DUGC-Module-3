import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  ExcelData:any;

  constructor() { }

  ngOnInit(): void {
  }
  ReadExcel(event:any)
  {
    let file=event.target.files[0];

    let fileReader= new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = (e)=>{
      var workBook=XLSX.read(fileReader.result,{type:'binary'});
      var sheetNames = workBook.SheetNames;
      this.ExcelData=XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]])
      console.log(this.ExcelData)

    }
  }
// fileToUpload: File = null;

// onFileSelect(files: FileList) {
//     this.fileToUpload = files.item(0);
// }

// // call this method when you want the upload to begin
// uploadFile(fileToUpload: File): Observable<boolean> {
//     const endpoint = 'backend-upload-url';
//     const formData: FormData = new FormData();
//     formData.append('file', fileToUpload, fileToUpload.name);
//     return this.httpClient
//       .post(endpoint, formData)
//       .map(() => { return true; })
//       .catch((e) => this.handleError(e));
// }
}
