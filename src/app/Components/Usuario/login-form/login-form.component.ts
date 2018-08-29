import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../models/usuario';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'republic-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private usuarioService: UsuarioService) { }

  usuarios: Usuario[];
  usuario: Usuario = {
    Login: "",
    Nome:"",
    Email: "",
    Senha: "",
    Id: 0
  };
  

  ngOnInit() {
    this.usuarioService.getAll()
      .subscribe(response =>  
        // this.usuarios = response.json());
        console.log(response.json()));
  }

  SalvarEditar() {
    //implementar função de salvar aqui
    console.log(this.usuario.Login);
    console.log(this.usuario.Email);
    console.log(this.usuario.Senha);
    alert("os dados foram salvos");
  }
}