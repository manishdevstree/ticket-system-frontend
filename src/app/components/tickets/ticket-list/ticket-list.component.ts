import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent {
  users: any[] = [];
  tickets: any[] = [];
  filteredTickets: any[] = [];

  searchText = '';
  selectedStatus = 'ALL';

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadTickets();
    this.loadUsers();
  }

  loadTickets() {
    this.api.getTickets().subscribe((res: any) => {
      this.tickets = res.data;
      this.applyFilter();
    });
  }

  applyFilter() {
    this.filteredTickets = this.tickets.filter((t) => {
      const matchText =
        t.title.toLowerCase().includes(this.searchText.toLowerCase());

      const matchStatus =
        this.selectedStatus === 'ALL' ||
        t.status === this.selectedStatus;

      return matchText && matchStatus;
    });
  }

  updateStatus(id: number, event: any) {
    const status = event.target.value;

    this.api.updateStatus(id, status).subscribe(() => {
      this.loadTickets();
    });
  }

  loadUsers() {
  this.api.getUsers().subscribe((res: any) => {
    console.log("res",res);
    
    this.users = res;
  });
}

  view(id: number) {
    this.router.navigate(['/tickets', id]);
  }
assignUser(ticketId: number, userId: any) {
  console.log('ticket:', ticketId);
  console.log('user:', userId); // 👈 comes here

  this.api.assignTicket(ticketId, Number(userId)).subscribe(() => {
    this.loadTickets();
  });
}
}
