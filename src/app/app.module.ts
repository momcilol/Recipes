import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeItemComponent } from './components/recipes/recipe-item/recipe-item.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from './services/search.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChipsMultiSelectComponent } from './components/chips-multi-select/chips-multi-select.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { IngredientComponent } from './components/recipes/recipe-detail/ingredient/ingredient.component';
import { EquipmentComponent } from './components/recipes/recipe-detail/equipment/equipment.component';
import { StepComponent } from './components/recipes/recipe-detail/step/step.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ApiKeyInterceptor } from './services/api-key.interceptor';
import { RegisterDialogComponent } from './components/user/register/register-dialog/register-dialog.component';
import { UserService } from './services/user.service';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { AuthGuard } from './guards/auth.guard';
import { CdkModule } from './cdk/cdk.module';
import { WeekPlanComponent } from './components/meal-planner/week-plan/week-plan.component';
import { ItemComponent } from './components/meal-planner/item/item.component';
import { AddMealComponent } from './components/meal-planner/add-meal/add-meal.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeItemComponent,
    RecipeListComponent,
    ChipsMultiSelectComponent,
    RecipeDetailComponent,
    IngredientComponent,
    EquipmentComponent,
    StepComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    LayoutComponent,
    RegisterDialogComponent,
    SnackbarComponent,
    WeekPlanComponent,
    ItemComponent,
    AddMealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CdkModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    SearchService,
    UserService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
