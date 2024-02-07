import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MemberEntityApi, UserListService } from './user-list.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule, HttpClientModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [UserListService],
})
export class AppComponent {
  title = 'github-users';
  orgName: string = '';
  usuarios!: MemberEntityApi[];
  constructor(private userListService: UserListService) {}

  ngOnInit() {
    /*   this.githubService.getOrganizationMembers(this.orgName).subscribe(
      (data) => {
        this.usuarios = data;
      },
      (error) => {}
    ); */
  }

  obtenerUsuarios(org: string) {
    this.userListService.getMembers(org).subscribe((data) => {
      console.log(`Respuesta de la api - `, data);
      this.usuarios = data;
      console.log(`Datos guardados - `, this.usuarios);
    });
  }

  getUsuario(id: string) {
    this.userListService.getMember(id).subscribe((data) => {
      console.log(data);
    });
  }

  /*   buscarUsuarios() {
    if (this.orgName) {
      this.githubService.getOrganizationMembers(this.orgName).subscribe(
        (data) => {
          this.usuarios = data;
        },
        (error) => {}
      );
    }
  } */
}

//
//
