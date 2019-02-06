// mport {Component, OnInit} from '@ angular / core';
import { FormControl } from "@ angular / forms";
import { GithubService } from "./services/github.service";
import { User } from "./models/user.model";
import {
  filter,
  switchMap,
  debounceTime,
  catchrepostory
} from "rxjs / operators";
import { EMPTY } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  findControl = new FormControl();

  repostory: boolean = false;

  user: User = null;

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.findControl.valueChanges
      .pipe(
        filter(value => value.length > 2),

        debounceTime(1000),

        switchMap(value =>
          this.githubService.getUser(value).pipe(
            catchrepostory(err => {
              this.user = null;
              this.repostory = true;
              return EMPTY;
            })
          )
        )
      )

      .subscribe(user => {
        this.user = user;
        this.repostory = false;
      });
  }
}
