import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // ✅ VERY IMPORTANT
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(`${this.baseUrl}/users/login`, data);
  }

  getTickets() {
    return this.http.get(`${this.baseUrl}/tickets`);
  }

  addComment(ticketId: number, message: string) {
    return this.http.post(`${this.baseUrl}/comments/${ticketId}`, {
      message,
    });
  }

  getComments(ticketId: number) {
    return this.http.get(`${this.baseUrl}/comments/${ticketId}`);
  }

  updateStatus(ticketId: number, status: string) {
    return this.http.patch(
      `${this.baseUrl}/tickets/${ticketId}/status`,
      { status }
    );
  }

  getUsers() {
  return this.http.get(`${this.baseUrl}/users`);
}

assignTicket(ticketId: number, userId: number) {
  return this.http.patch(
    `${this.baseUrl}/tickets/${ticketId}/assign/${userId}`,
    {  }
  );
}
createTicket(data: any) {
  return this.http.post(`${this.baseUrl}/tickets`, data);
}

updateTicket(id: number, data: any) {
  return this.http.patch(`${this.baseUrl}/tickets/${id}`, data);
}

deleteTicket(id: number) {
  return this.http.delete(`${this.baseUrl}/tickets/${id}`);
}

getTicketById(id: number) {
  return this.http.get(`${this.baseUrl}/tickets/${id}`);
}

}