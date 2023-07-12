import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginGuard } from './core/guards/login.guard';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { TrendingBooksComponent } from './components/home/trending-books/trending-books.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: InitialPageComponent, canActivate: [LoginGuard] },
  {
    path: 'trending-books',
    component: TrendingBooksComponent,
    canActivate: [AuthGuard],
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
