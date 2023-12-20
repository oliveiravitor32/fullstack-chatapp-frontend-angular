import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarMenuComponent } from '../components/side-bar-menu/side-bar-menu.component';
import { PersonalCardComponent } from '../components/personal-card/personal-card.component';
import { PersonalIconComponent } from '../components/personal-icon/personal-icon.component';
import { HeaderComponent } from '../components/header/header.component';
import { SharedMaterialModule } from './shared-material.module';

@NgModule({
  declarations: [
    SideBarMenuComponent,
    PersonalCardComponent,
    PersonalIconComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, SharedMaterialModule],
  exports: [
    SideBarMenuComponent,
    PersonalCardComponent,
    PersonalIconComponent,
    HeaderComponent,
  ],
})
export class SharedComponentsModule {}
