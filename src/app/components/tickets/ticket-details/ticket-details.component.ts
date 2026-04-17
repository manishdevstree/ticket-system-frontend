import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent {
ticket: any;
  comments: any[] = [];
  message = '';

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.loadTicket(id);
    this.loadComments(id);
  }

  loadTicket(id: number) {
    this.api.getTickets().subscribe((res: any) => {
      this.ticket = res.data.find((t: any) => t.id == id);
    });
  }

  loadComments(id: number) {
    this.api.getComments(id).subscribe((res: any) => {
      this.comments = res;
    });
  }

  addComment() {
    const id = this.route.snapshot.params['id'];

    this.api.addComment(id, this.message).subscribe(() => {
      this.message = '';
      this.loadComments(id);
    });
  }
}
