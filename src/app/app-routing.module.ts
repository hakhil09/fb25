import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { EmiComponent } from './emi/emi.component';
import { MoneyintrestComponent } from './moneyintrest/moneyintrest.component';
import { CelsiusComponent } from './celsius/celsius.component';

const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'my-component',component:MyComponentComponent},
    {path:'dashboard',component:DashboardComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'rectangle', component: RectangleComponent },
  { path: 'circle', component: CircleComponent},
  { path: 'bmi', component: BmiComponent },
  {path: 'emi', component: EmiComponent },
  {path:'moneyintrest', component: MoneyintrestComponent},
  {path:'celsius', component:CelsiusComponent}

  
    
  
];
    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
