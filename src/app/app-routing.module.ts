import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekPlanComponent } from './components/meal-planner/week-plan/week-plan.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'recipe-list', component: RecipeListComponent},
  {path: 'recipe-detail/:id', component: RecipeDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'meal-plan', component: WeekPlanComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/recipe-list', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
