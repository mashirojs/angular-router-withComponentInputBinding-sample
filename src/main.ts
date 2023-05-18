import 'zone.js/dist/zone';
import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  RouterOutlet,
  RouterLink,
  Routes,
  withComponentInputBinding,
} from '@angular/router';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    forwardRef(() => ChildComponent),
    RouterOutlet,
    RouterLink,
  ],
  template: `
    <ul>
      <li> <a routerLink="/child/tarou" >ichiro</a> </li>
      <li> <a routerLink="/child/jirou" >jirou</a> </li>
    </ul>
    <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
}

@Component({
  standalone: true,
  selector: 'app-child',
  template: `<div>{{ name }}</div>`,
})
class ChildComponent {
  @Input({ required: true }) name!: string;
}

const routes: Routes = [
  {
    path: 'child/:name',
    component: ChildComponent,
  },
];

bootstrapApplication(App, {
  providers: [provideRouter(routes, withComponentInputBinding())],
});
