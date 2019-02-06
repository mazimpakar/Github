// import { Component, OnInit } from '@angular/core';
import { GithubService } from "../services/github.service";

@Component({
  selector: "app-github-form",
  templateUrl: "./github-form.component.html",
  styleUrls: ["./github-form.component.css"]
})
export class GithubFormComponent implements OnInit {
  submitSearch(name) {
    this.githubService.getProfileInfo(name.target.value);
    this.reposService.getReposInfo(name.target.value);
  }
  constructor(
    private githubService: GithubService,
    private reposService: GithubService
  ) {}
  ngOnInit() {}
}
