// simply manages the views as called by the app's router in app.module.ts

import { Component } from '@angular/core';
import { GameStateService } from './services/game-state.service';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';

@Component({
    selector: 'app-root',
    template: `
        <h1>{{title}}</h1>
        <router-outlet></router-outlet>`,
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
    title = 'Match Master';
}
