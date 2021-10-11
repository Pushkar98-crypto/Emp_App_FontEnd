import { JsonPipe } from '@angular/common';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {FormGroup, FormBuilder, Validators }  from '@angular/forms';

@Component({
  selector: 'app-empdisplay',
  templateUrl: './empdisplay.component.html',
  styleUrls: ['./empdisplay.component.css']
})
export class EmpdisplayComponent implements OnInit {

  constructor(private activatedRoute :ActivatedRoute,private http:HttpClient, private formbuilder:FormBuilder) { 
    this.UpdateForm=this.formbuilder.group({
      empName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      department:[''],
      dateofJoin:['',Validators.required],
      image:[''],
      password:['',Validators.required],
    })
  }

  public UpdateForm: FormGroup
  public nam:any;
  public mail:any;
  public id:any;
  public desig:any;
  public passw:any;
  public tempdata=[];
  public visitedid:any;
  public specificdata:any=[];
  public employeeInfo:any=[];
  public isvisible:boolean=false;
  public apiEndpoint="https://localhost:44357/api/Emp";
  public payloadData:any;
  
  

  ngOnInit(): void {
   
    this.accessroutes()
   
    
    
  }

  accessroutes()
  {
    this.activatedRoute.params.subscribe((data)=>
    {
           this.visitedid=data.id;
           this.http.get(this.apiEndpoint+"/"+this.visitedid).subscribe((data)=>
           {
                this.specificdata=data;
                console.log(this.specificdata)
                this.UpdateForm.patchValue(this.specificdata);
           })
          

    })
  }
  
  updating()
   {
    this.payloadData=this.UpdateForm.value;
    this.visitedid=Number(this.visitedid);
    this.payloadData['Empid']=this.visitedid;

    console.log(this.payloadData);
    this.http.put(this.apiEndpoint+"/"+this.visitedid,this.payloadData).subscribe((data)=>
    {
       this.employeeInfo=data;
       this.accessroutes();
    });
    
  }

  showupdate()
  {
    this.isvisible=true;
  }
  
   
  
}
