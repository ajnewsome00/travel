import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'accountOptions',
        loadChildren: () => import('../account-options/account-options.module').then(m => m.AccountOptionsPageModule)
      },
      {
        path: 'editAccount',
        loadChildren: () => import('../edit-account/edit-account.module').then(m => m.EditAccountPageModule)
      },
      {
        path: 'editTrip',
        loadChildren: () => import('../edit-trip/edit-trip.module').then(m => m.EditTripPageModule)
      },
      {
        path: 'editTrip/:id',
        loadChildren: () => import('../edit-trip/edit-trip.module').then(m => m.EditTripPageModule)
      },
      {
        path: 'editEvent',
        loadChildren: () => import('../edit-event/edit-event.module').then(m => m.EditEventPageModule)
      },
      {
        path: 'editEvent/:id',
        loadChildren: () => import('../edit-event/edit-event.module').then(m => m.EditEventPageModule)
      },
      {
        path: 'event/:id',
        loadChildren: () => import('../event/event.module').then(m => m.EventPageModule)
      },
      {
        path: 'list/:id',
        loadChildren: () => import('../list/list.module').then(m => m.ListPageModule)
      },
      {
        path: 'trip/:id',
        loadChildren: () => import('../trip/trip.module').then(m => m.TripPageModule)
      },
      {
        path: 'blank',
        loadChildren: () => import('../blank/blank.module').then(m => m.BlankPageModule)
      },
      {
        path: 'account/:id',
        loadChildren: () => import('../account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: 'group/:id',
        loadChildren: () => import('../group/group.module').then(m => m.GroupPageModule)
      },
      {
        path: 'editGroup',
        loadChildren: () => import('../edit-group/edit-group.module').then(m => m.EditGroupPageModule)
      },
      {
        path: 'editGroup/:id',
        loadChildren: () => import('../edit-group/edit-group.module').then(m => m.EditGroupPageModule)
      },
      {
        path: 'chat/:id',
        loadChildren: () => import('../chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: 'search/:id',
        loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab2',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab2',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
