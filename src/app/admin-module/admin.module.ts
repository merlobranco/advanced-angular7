// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminModuleRouting } from './admin.routing';


// Components
import { AdminMainComponent } from './components/main/admin-main.component';
import { AdminListComponent } from './components/list/admin-list.component';
import { AdminAddComponent } from './components/add/admin-add.component';
import { AdminEditComponent } from './components/edit/admin-edit.component';

@NgModule({
  declarations: [
    AdminMainComponent,
    AdminListComponent,
    AdminAddComponent,
    AdminEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AdminModuleRouting
  ],
  exports: [
    AdminMainComponent,
    AdminListComponent,
    AdminAddComponent,
    AdminEditComponent
  ],
  providers: []
})
export class AdminModule {}
