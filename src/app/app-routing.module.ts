import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'add-itinerary', loadChildren: './add-itinerary/add-itinerary.module#AddItineraryPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'itinerary/:id', loadChildren: './itinerary/itinerary.module#ItineraryPageModule' },
  { path: 'detail', loadChildren: './detail-itinerary/detail-itinerary.module#DetailItineraryPageModule' },
  { path: 'change-name', loadChildren: './change-name/change-name.module#ChangeNamePageModule' },
  { path: 'statistiques/:id', loadChildren: './statistiques/statistiques.module#StatistiquesPageModule' },
  { path: 'add-statistiques/:id', loadChildren: './add-statistiques/add-statistiques.module#AddStatistiquesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
