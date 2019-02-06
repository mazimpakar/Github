import { Component, OnInit } from "@angular/core";
import { GithubService } from "../services/github.service";

@Component({
  selector: "app-github-form",
  templateUrl: "./github-form.component.html",
  styleUrls: ["./github-form.component.css"]
})
export class ProfileFormComponent implements OnInit {
  submitSearch(name) {
    this.profileService.getProfileInfo(name.target.value);
    this.repoService.getReposInfo(name.target.value);
  }
  constructor(
    private profileService: GithubService,
    private repoService: GithubService
  ) {}
  ngOnInit() {}
}
