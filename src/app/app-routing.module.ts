import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { AuthGuradService } from './auth-gurad.service';

const appRouters: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', canActivate: [AuthGuradService], component: UsersComponent },
  { path: 'users/:id/:name', component: UserComponent },
  {
    path: 'servers',
    canActivate: [AuthGuradService],
    component: ServersComponent,
  },
  { path: 'servers/:id/edit', component: EditServerComponent },
  { path: 'not-found', component: PageNotFoundComponent },

  { path: '**', redirectTo: '/not-found' },
];
@NgModule({
  imports: [RouterModule.forRoot(appRouters)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
