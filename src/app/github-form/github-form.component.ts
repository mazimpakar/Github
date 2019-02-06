// import { Component, OnInit } from "@angular/core";
// import { Github } from "../github";

// @Component({
//   selector: "app-github-form",
//   templateUrl: "./github-form.component.html",
//   styleUrls: ["./github-form.component.css"]
// })
// export class GithubFormComponent implements OnInit {
//   // newUser = new User(0, "");
//   newUserName: string;
//   theUser: any;
//   constructor() {}

//   ngOnInit() {}
// }

import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
// import { User } from "../../models/user.model";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  @Input()
  user: User;
}
