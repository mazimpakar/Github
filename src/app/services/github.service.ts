import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../user";
import { environment } from "../../environments/environment";
import { Repos } from "../repos";

@Injectable({
  providedIn: "root" //we declare that this service should be created by the root application injector.
})
export class GithubService {
  repos: Repos;
  user: User;

  private username: string;
  items;
  constructor(private http: HttpClient) {
    console.log("service is now ready!");
    this.username = "mazimpakar";
    this.user = new User(" ", " ", " ", " ", " ", 0, " ");
    this.repos = new Repos(" ", " ", " ", " ", " ");
  }
  getProfileInfo(username) {
    interface ApiResponse {
      name: string;
      login: string;
      avatar_url: string;
      email: string;
      location: string;
      public_repos: number;
      html_url: string;
      // return this.http.get("https://api.github.com/users/" + this.username)
    }
    const promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(environment.apiUrl + username + environment.apikey)
        .toPromise()
        .then(github => {
          this.user.name = github.name;
          this.user.login = github.login;
          this.user.avatar_url = github.avatar_url;
          this.user.email = github.email;
          this.user.location = github.location;
          this.user.public_repos = github.public_repos;
          this.user.html_url = github.html_url;

          console.log(github);
          resolve();
        });
    });
    return promise;
  }
  getRepoInfo(username) {
    interface ApiResponse {
      name: string;
      homepage: string;
      description: string;
      html_url: string;
      clone_url: string;
    }
    this.http
      .get<ApiResponse>(environment.apiUrl + username + environment.apiRepokey)
      .subscribe(response => {
        this.items = response;
      });
  }
}
