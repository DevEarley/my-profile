import { Component } from '@angular/core';

@Component({
  selector: 'mfe-poc-my-profile-entry',
  template: `<div class="remote-entry">
    <h2>my-profile's Remote Entry Component (LOCALHOST)</h2>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #551430;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
