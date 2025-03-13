import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
//two way databinding
mobile:string='+91';


  //property binding
   isData:boolean=true;

  age:number=45;
  name:string='xxxxx';
  click(){
    alert ("HELLOOOOOOOOO!");
}

submit(){
  alert("DANGER");

}

  num1:number=0;
  num2:number=0;
  result:Number=0;

  add(){
    console.log(this.num1,this.num2);
    this.result=this.num1+this.num2;
    console.log(this.result);
  }
  


}
