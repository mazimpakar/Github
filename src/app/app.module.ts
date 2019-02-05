import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GithubComponent } from "./github/github.component";
import { GithubFormComponent } from "./github-form/github-form.component";
import { UserComponent } from './user/user.component';
import { RepostoryComponent } from './repostory/repostory.component';

@NgModule({
  declarations: [AppComponent, GithubComponent, GithubFormComponent, UserComponent, RepostoryComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
