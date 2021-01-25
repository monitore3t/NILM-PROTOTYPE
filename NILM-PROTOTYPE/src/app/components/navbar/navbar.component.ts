import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() name: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  
  salir() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

  cambioElemento(a: String)
  {
    if(a == "1"){
       this.name = "Consumo Electrodomésticos";
    } else{
       this.name = "Potencia Total";
    }

  }

  }
