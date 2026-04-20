import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent {
 ticketId!: number;
  ticket: any;
  comments: any[] = [];
  newComment = '';

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    this.ticketId = Number(this.route.snapshot.paramMap.get('id'));

    this.loadTicket();
    this.loadComments();
  }

  loadTicket() {
    this.api.getTicketById(this.ticketId).subscribe((res: any) => {
      this.ticket = res.data || res;
    });
  }

  loadComments() {
    this.api.getComments(this.ticketId).subscribe((res: any) => {
      this.comments = res.data || res;
    });
  }

  addComment() {
    if (!this.newComment) return;
    
    this.api.addComment(this.ticketId, this.newComment)
      .subscribe(() => {
        this.newComment = '';
        this.loadComments();
      });
  }
}
