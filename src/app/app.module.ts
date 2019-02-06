// iimport { BrowserModule } from '@angular/platform-browser';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { UserComponent } from "./components/user/user.component";
import { RepostoryComponent } from "./components/repostory/repostory.component";
import { GithubService } from "./services/github.service";
@NgModule({
  declarations: [AppComponent, UserComponent, RepostoryComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClient],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule {}
