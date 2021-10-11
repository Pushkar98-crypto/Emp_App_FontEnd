import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {FormGroup, FormBuilder, Validators }  from '@angular/forms';

@Component({
  selector: 'app-employeecom',
  templateUrl: './employeecom.component.html',
  styleUrls: ['./employeecom.component.css']
})
export class EmployeecomComponent implements OnInit {

  constructor(private activatedRoute :ActivatedRoute, private http:HttpClient, private formbuilder:FormBuilder ) { 
    this.UpdateForm=this.formbuilder.group({
      empName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      department:[''],
      dateofJoin:['',Validators.required],
      image:[''],
      password:['',Validators.required],
    })
  }

  public UpdateForm: FormGroup;
  public nam:any;
  public mail:any;
  public id:any;
  public desig:any;
  public passw:any;
  public tempdata=[];
  public visitedid:any;
  public specificdata:any=[];
  public employeeInfo=[];
  public apiEndpoint="https://localhost:44357/api/Emp";

  ngOnInit(): void {
    this.accessroutes()
  }

  accessroutes()
  {
    this.activatedRoute.params.subscribe((data)=>
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
        
          

    })
  }
  
  updating(id)
   {
    this.employeeInfo=JSON.parse(localStorage.getItem('data'));
    console.log(id);
    for(var i=0;i<this.employeeInfo.length;i++)
    {
      if(this.employeeInfo[i].empid===id)
      {
        this.employeeInfo[i].name=this.nam
        this.employeeInfo[i].email=this.mail
        this.employeeInfo[i].des=this.desig
       

      }
    }
    
  
  }
  

}
