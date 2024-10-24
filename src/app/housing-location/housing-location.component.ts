import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <section class="bg-accent rounded-3xl pb-7">
      <img
        class="h-60 w-full object-cover rounded-t-3xl"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
      <h2 class="text-2xl font-bold text-primary pt-3 px-5">{{ housingLocation.name }}</h2>
      <p class="text-lg p-5 pt-3 before:content-[url('/assets/location-pin.svg')] flex">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      <a
        class="flex justify-center text-primary after:content-['›︎'] after:ml-2"
        [routerLink]="['/details', housingLocation.id]"
        >
        Learn More
      </a>
    </section>
  `,
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
