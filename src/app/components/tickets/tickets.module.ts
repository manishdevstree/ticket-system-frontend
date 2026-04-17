import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketsRoutingModule } from './tickets-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TicketListComponent,
    TicketDetailsComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    FormsModule
  ]
})
export class TicketsModule { }
