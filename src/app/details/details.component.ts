import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article class="p-16 h-screen">
      <img
        class="sm:px-2 w-full h-[400px] sm:w-1/2 sm:h-[600px] object-cover rounded-t-3xl sm:rounded-b-3xl float-right"
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{ housingLocation?.name }}"
        crossorigin
      />
      <section class="listing-description">
        <h2 class="text-5xl font-bold mb-4">{{ housingLocation?.name }}</h2>
        <p
          class="text-2xl mb-4 before:content-[url('/assets/location-pin.svg')] flex"
        >
          {{ housingLocation?.city }}, {{ housingLocation?.state }}
        </p>
      </section>
      <section class="mb-5">
        <h2 class="text-secondary text-2xl mb-4">
          About this housing location
        </h2>
        <ul>
          <li class="text-sm">
            Units available: {{ housingLocation?.availableUnits }}
          </li>
          <li class="text-sm">
            Does this location have wifi: {{ housingLocation?.wifi }}
          </li>
          <li class="text-sm">
            Does this location have laundry: {{ housingLocation?.laundry }}
          </li>
        </ul>
      </section>
      <section>
        <h2 class="font-bold text-2xl mb-4">Apply now to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <div>
            <label
              class="text-secondary font-bold uppercase text-xs"
              for="first-name"
              >First Name</label
            >
            <input
              class="text-base mb-4 p-2 w-1/2 pr-2 border-b-2"
              id="first-name"
              type="text"
              formControlName="firstName"
            />
          </div>
          <div>
            <label
              class="text-secondary font-bold uppercase text-xs"
              for="last-name"
              >Last Name</label
            >
            <input
              class="text-base mb-4 p-2 w-1/2 pr-2 border-b-2"
              id="last-name"
              type="text"
              formControlName="lastName"
            />
          </div>
          <div>
            <label
              class="text-secondary font-bold uppercase text-xs"
              for="email"
              >Email</label
            >
            <input
              class="text-base mb-4 p-2 w-1/2 pr-2 border-b-2"
              id="email"
              type="email"
              formControlName="email"
            />
          </div>
          <button
            type="submit"
            class="p-4 border border-primary bg-primary text-white rounded-lg"
          >
            Apply now
          </button>
        </form>
      </section>
    </article>
  `,
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
