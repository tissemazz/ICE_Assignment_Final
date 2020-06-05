import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { LadderComponent } from '../../ladder/ladder.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { TeamWinsComponent } from 'app/team-wins/team-wins.component';
import { NewsComponent } from 'app/news/news.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'team-wins',      component: TeamWinsComponent},
    { path: 'maps',           component: MapsComponent },
    { path: 'ladder',         component: LadderComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'news',           component: NewsComponent },
    
];
