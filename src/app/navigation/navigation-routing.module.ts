import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation.component';

const routes: Routes = [
  {path: '', component: NavigationComponent , children:[

    { path: 'relacoes', loadChildren: () => import('./relacoes/relacoes.module').then(m => m.RelacoesModule) },
    
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
