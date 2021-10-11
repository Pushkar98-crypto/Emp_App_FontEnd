import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs' ;
import {FormGroup, FormBuilder, Validators }  from '@angular/forms';


@Component({
  selector: 'app-admincom',
  templateUrl: './admincom.component.html',
  styleUrls: ['./admincom.component.css']
})
export class AdmincomComponent implements OnInit {

  public addForm: FormGroup
  public issubmitted:Boolean=false;
  public nam:any;
  public mail:any;
  public id:any;
  public desig:any;
  public passw:any;
  public visible:boolean;
  public apiEndpoint="https://localhost:44357/api/Emp";
  public employeeInfo:any=[]
  public payloaddata:any;
  public patchdata:any;
  public currentId:any;

  constructor(private router :Router, private http:HttpClient, private formbuilder:FormBuilder ) {
    this.addForm=this.formbuilder.group({
      empName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      department:[''],
      dateofJoin:['',Validators.required],
      image:[''],
      password:['',Validators.required],
    })
  }

  ngOnInit(): void {
    this.visible=true;

    this.Empdata();
  
   if (!(localStorage.getItem('data')))
   {
   localStorage.setItem('data',JSON.stringify(this.employeeInfo));
   }
   
   this.employeeInfo=JSON.parse(localStorage.getItem('data'));
   
  
  }

  // Showing Data on Load of application
  Empdata()
  {
    this.http.get(this.apiEndpoint).subscribe((data)=>
    {
      this.employeeInfo=data;
      console.log(this.employeeInfo)
    })
    
  }

// submitting  form data 

  submit()
  {
   this.issubmitted=true;
   this.payloaddata=this.addForm.value;
   this.http.post(this.apiEndpoint,this.payloaddata).subscribe((data)=>
   {
      this.employeeInfo=data;
   });
  
   this.Empdata();
  }


   // Deleting the Data
  delete(id)
  {
    console.log(id);
    this.http.delete(this.apiEndpoint+"?Empid="+id).subscribe((data)=>
    {
      this.Empdata()
    })

   
  }

  //Patch

  edit(id){
    console.log(id);
    this.id=id;
    for(var i=0;i<this.employeeInfo.length; i++)
    {
      if(this.employeeInfo[i].empid===id)
      {
        this.patchdata=this.employeeInfo[i];
        
      }
    }
   console.log(this.patchdata);
   this.addForm.patchValue(this.patchdata);
   console.log(this.patchdata.dateofJoin);
   this.addForm.value.dateofJoining=this.patchdata.dateofJoin;
    
   this.visible=false;
  }

   updating()
   {
    this.payloaddata=this.addForm.value;
    this.payloaddata['Empid']=this.id;

    console.log(this.payloaddata);
    this.http.put(this.apiEndpoint+"/"+this.id,this.payloaddata).subscribe((data)=>
    {
       this.employeeInfo=data;
       this.Empdata();
    });
  
    this.visible=true;

   
    
   }

   send(val)
   {
     console.log("coming");
      this.router.navigate(['adminlogin/admin/empdis/'+`${val.empid}`])
   }
 
   get control()
   {
     return this.addForm.controls
   }
   



}
