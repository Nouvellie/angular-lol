import { Routes } from '@angular/router';
import { MiddleComponent } from './components/middle/middle.component';

export const ROUTES:Routes = [    
	{ path: '', component: MiddleComponent },
    { path: '**', pathMatch: 'full', redirectTo: ''},
]