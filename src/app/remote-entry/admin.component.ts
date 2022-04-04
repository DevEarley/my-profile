import { Component } from '@angular/core';

@Component({
  selector: 'mfe-poc-my-profile-admin',
  template: `<div class="admin">
    <h2>my-profile's Admin Component (LOCALHOST:1234)</h2>
  </div>`,
  styles: [
    `
      .admin {
        background-color: #305514;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class AdminComponent {}
