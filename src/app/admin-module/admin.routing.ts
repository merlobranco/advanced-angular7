import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AdminMainComponent } from './components/main/admin-main.component';
import { AdminListComponent } from './components/list/admin-list.component';
import { AdminAddComponent } from './components/add/admin-add.component';
import { AdminEditComponent } from './components/edit/admin-edit.component';


const adminRoutes: Routes = [
  {
    path: 'admin-panel',
    component: AdminMainComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: AdminListComponent},
      {path: 'add', component: AdminAddComponent},
      {path: 'edit', component: AdminEditComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModuleRouting {}
