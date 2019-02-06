import { Injectable } from "@angular/core";
import { Github } from "../github";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GithubService {
  constructor(private http: HttpClient) {}
}
