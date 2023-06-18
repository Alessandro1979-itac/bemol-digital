import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-form-page-user',
  templateUrl: './form-page-user.component.html',
  styleUrls: ['./form-page-user.component.scss'],
})
export class FormPageUserComponent implements OnInit {
  id?: number;
  name: string = '';
  email: string = '';
  password: string = '';
  cpf: string = '';
  phone: string = '';
  birth: string = '';
  postcode: string = '';
  st: string = '';
  city: string = '';
  neighborhood: string = '';
  street: string = '';
  number: string = '';

  constructor(
    private userService: UserService,
    private actRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    // this.actRoute.params.subscribe((res) => {
    //   if (res['id'] !== undefined) {
    //     this.id = res['id'];
    //     this.edit();
    //   }
    // });
  }

  // edit() {
  //   this.userService.edit(this.id as number).subscribe(
  //     (response) => {
  //       this.fill(response);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

  // fill(data: any) {
  //   this.name = data.name;
  //   this.email = data.email;
  //   this.password = data.password;
  //   this.cpf = data.cpf;
  //   this.phone = data.phone;
  //   this.birth = data.birth;
  //   this.postcode = data.address.postcode;
  //   this.st = data.address.st;
  //   this.city = data.address.city;
  //   this.neighborhood = data.address.neighborhood;
  //   this.street = data.address.street;
  //   this.number = data.address.number;
  // }

  // save() {
  //   let userDTO = new UserDTOModel(
  //     this.name,
  //     this.email,
  //     this.password,
  //     this.cpf,
  //     this.phone,
  //     this.birth,
  //     this.postcode,
  //     this.st,
  //     this.city,
  //     this.neighborhood,
  //     this.street,
  //     this.number,
  //     this.id.toString()
  //   );

  //   if (this.id !== undefined) {
  //     this.update(userDTO);
  //   } else {
  //     this.new(userDTO);
  //   }
  // }

  // new(userDTO: UserDTOModel) {
  //   this.userService.store(userDTO).subscribe(
  //     (response) => {
  //       this.route.navigate(['user', '']);
  //     },
  //     (err) => {}
  //   );
  // }

  // update(userDTO: UserDTOModel) {
  //   this.userService
  //     .update(userDTO, this.id as number)
  //     .subscribe((response) => {
  //       this.route.navigate(['user', '']);
  //       (err) => {
  //         console.log(err);
  //       };
  //     });
  // }

  // back() {
  //   this.route.navigate(['user', '']);
  // }
}
