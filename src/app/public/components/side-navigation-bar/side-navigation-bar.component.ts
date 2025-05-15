import { Component } from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatListItem, MatNavList} from '@angular/material/list';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-side-navigation-bar',
  imports: [
    MatSidenavContainer,
    MatToolbar,
    MatIcon,
    MatSidenavContent,
    MatIconButton,
    MatSidenav,
    MatNavList,
    RouterOutlet,
    MatListItem,
    RouterLink,
    LanguageSwitcherComponent
  ],
  templateUrl: './side-navigation-bar.component.html',
  styleUrl: './side-navigation-bar.component.css'
})
export class SideNavigationBarComponent {

}
