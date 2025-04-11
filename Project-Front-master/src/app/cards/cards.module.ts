import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { CardListComponent } from './card-list/card-list.component';
import { ApplyCardComponent } from './apply-card/apply-card.component';


@NgModule({
  declarations: [
    CardsComponent,
    CardListComponent,
    ApplyCardComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule
  ]
})
export class CardsModule { }
