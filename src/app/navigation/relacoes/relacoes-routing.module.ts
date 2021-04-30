import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelacoesComponent } from './relacoes.component';

const routes: Routes = [
  { path: '', component: RelacoesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelacoesRoutingModule { }
