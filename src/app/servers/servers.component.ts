import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
  
})
export class ServersComponent implements OnInit {
  //   pshow=false;
  //   data="LocalHost"
  //   allowDisable=false
  //   servers=['TestServer1','TestServer2']
  decide=false
  a=0
  count=[0]
   constructor(private http:HttpClientModule) {   }

  ngOnInit() {
  }
 
  // onServer(event:Event){
  //   this.data=(<HTMLInputElement>event.target).value
  // }
  // click(){
  //   this.servers.push(this.data)
  //   this.pshow=true
  //   }
  onClick(){
    this.a++
  this.decide=!this.decide
  this.count.push(this.a)
  }
  
  }


