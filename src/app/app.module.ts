// iimport { BrowserModule } from '@angular/platform-browser';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { AppComponent } from "./app.component";

import { GithubService } from "./services/github.service";

import { GithubFormComponent } from "./github-form/github-form.component";
import { GithubComponent } from "./github/github.component";
@NgModule({
  declarations: [AppComponent, GithubFormComponent, GithubComponent],
  imports: [BrowserModule, HttpClient],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule {}
