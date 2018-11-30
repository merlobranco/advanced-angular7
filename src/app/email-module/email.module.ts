// Importing required modules for creating new modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importing components
import {  SaveEmailComponent } from './components/save/save-email.component';
import {  ShowEmailComponent } from './components/show/show-email.component';
import {  MainEmailComponent } from './components/main/main-email.component';

// Using ngModule for loading the components and the configuration of the modules
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SaveEmailComponent,
    ShowEmailComponent,
    MainEmailComponent
  ],
  exports: [MainEmailComponent]
})
export class EmailModule {}
