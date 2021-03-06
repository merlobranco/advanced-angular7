// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminModuleRouting } from './admin.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AdminMainComponent } from './components/main/admin-main.component';
import { AdminListComponent } from './components/list/admin-list.component';
import { AdminAddComponent } from './components/add/admin-add.component';
import { AdminEditComponent } from './components/edit/admin-edit.component';

// Services
import { UserService } from '../services/user.service';

// Guards
import { AdminGuardService } from '../services/admin.guard.service';

// Pipes
import { SearchPipeService } from './pipes/search.pipe.service';

@NgModule({
  declarations: [
    AdminMainComponent,
    AdminListComponent,
    AdminAddComponent,
    AdminEditComponent,
    SearchPipeService
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AdminModuleRouting,
    BrowserAnimationsModule
  ],
  exports: [
    AdminMainComponent,
    AdminListComponent,
    AdminAddComponent,
    AdminEditComponent
  ],
  providers: [
    UserService,
    AdminGuardService,
  ]
})
export class AdminModule {}
