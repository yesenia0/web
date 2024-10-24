import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule, RouterOutlet],
  template: `
    <header
      class="h-16 drop-shadow-lg bg-gray-50 px-16 w-full flex justify-between"
    >
      <a [routerLink]="['/']">
        <img class="p-2" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
      </a>
      <!-- <section class="h-14 place-content-center place-items-center">
        <form class="w-full">
          <input
            class="border border-primary p-2 rounded-lg mx-1 inline-block w-96 focus-visible:outline-gray-300"
            type="text"
            placeholder="Filter by city"
            #filter
          />
          <button
            class="border border-primary p-2 rounded-lg bg-primary text-white"
            type="button"
            (click)="filterResults(filter.value)"
          >
            Search
          </button>
        </form>
      </section> -->
    </header>
    <main>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
    <footer
      class="h-16 drop-shadow-lg bg-primary px-4 text-white flex justify-center items-center sticky bottom-0"
    >
      © 2024 House Rental
    </footer>
  `,
})
export class AppComponent {
  title = 'homes';
}
