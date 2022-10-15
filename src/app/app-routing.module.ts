import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextComponent } from './text/text.component';

const routes: Routes = [
  {path:'branchInvertor',
  component:TextComponent},
  {path:'',redirectTo:'branchInvertor',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
