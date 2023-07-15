import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';


const matModules = [
  MatInputModule,
  MatButtonModule,
  MatTabsModule,
  MatToolbarModule,
  MatSlideToggleModule,
  MatIconModule
]

@NgModule({
  imports: [matModules],
  exports: [matModules]
})

export class MaterialModule { }
