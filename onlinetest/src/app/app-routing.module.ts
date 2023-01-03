import { Injectable, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsertestComponent } from './usertest/usertest.component';
import { UserResultComponent } from './user-result/user-result.component';

const routes: Routes = [
  {path : 'login', component : LoginComponent},  
  {path: '',   redirectTo: 'login', pathMatch: 'full'},  
  {path : 'userTest', component : UsertestComponent},
  {path : 'userResult', component : UserResultComponent}
];
@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`My App - ${title}`);
    }
  }
}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy }
  ]
})
export class AppRoutingModule { }
