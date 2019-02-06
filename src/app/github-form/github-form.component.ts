import { Component, OnInit } from "@angular/core";
import { GithubService } from "../services/github.service";

@Component({
  selector: "app-github-form",
  templateUrl: "./github-form.component.html",
  styleUrls: ["./github-form.component.css"]
})
export class GithubFormComponent implements OnInit {
  submitSearch(name) {
    console.log(name);
    this.GithubService.getProfileInfo(name);
    this.repoService.getRepoInfo(name);
  }
  constructor(
    private GithubService: GithubService,
    private repoService: GithubService
  ) {}
  ngOnInit() {}
}
