import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({

  imports: [MatButtonModule, MatCheckboxModule, MatSidenavModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule],
  
})
export class MaterialModule { }