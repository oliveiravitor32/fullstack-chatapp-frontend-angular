import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { PersonalCardComponent } from '../components/personal-card/personal-card.component';
import { PersonalIconComponent } from '../components/personal-icon/personal-icon.component';

@NgModule({
  declarations: [
    SideBarComponent,
    PersonalCardComponent,
    PersonalIconComponent,
  ],
  imports: [CommonModule],
  exports: [SideBarComponent, PersonalCardComponent, PersonalIconComponent],
})
export class SharedComponentsModule {}
