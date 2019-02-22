import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ImportantNumbersComponent } from './important-numbers/important-numbers.component';
import { PhonebookComponent } from './phonebook/phonebook.component';

const routes: Routes = [
{

	path: "",component: HomePageComponent
},
{
	path: "important-numbers",component: ImportantNumbersComponent
},
{
	path: "phonebook",component: PhonebookComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
