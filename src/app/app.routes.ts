import { Routes } from '@angular/router';
import { CreateCardComponent } from './components/cards/create-card/create-card.component';
import { CardListComponent } from './components/cards/card-list/card-list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'listCard',
        pathMatch: 'full',
    },
    {
        path: 'createCard',
        component: CreateCardComponent
    },
    {
        path: 'listCard',
        component: CardListComponent
    },
];
