import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Forum from 'src/models/forum/Forum';

@Component({
  selector: 'app-boardcreate',
  templateUrl: './boardcreate.component.html',
  styleUrls: ['./boardcreate.component.scss']
})
export class BoardcreateComponent implements OnInit {

  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;
  file : File;
  forum: Forum;
  createForm : FormGroup;
  imgURL: any;

  constructor(private formBuilder: FormBuilder) { 
    this.forum = new Forum();
    this.createForm = formBuilder.group({
      name: [ this.forum.name, [Validators.required]], 
      description: [ this.forum.description , [Validators.required]],
      image: [ this.file , [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  private uploadFiles() {  
    this.fileUpload.nativeElement.value = '';  
    this.uploadFile(this.file);
  }

  uploadFile(file: File) {  
    const formData = new FormData();  
    formData.append('file', file);   
    console.log(file);
  }

  onClick() {  
    const fileUpload = this.fileUpload.nativeElement;fileUpload.onchange = () => {  
      this.file =  fileUpload.files[0]
      var reader = new FileReader();
      reader.readAsDataURL(this.file); 
      reader.onload = (_event) => { 
        this.imgURL = reader.result; 
        console.log(this.imgURL)
      }
      this.uploadFiles();  
    };  
    fileUpload.click();  
  }

  onSubmitRegister(createForm: FormData){
    console.log(createForm)
  }

}
