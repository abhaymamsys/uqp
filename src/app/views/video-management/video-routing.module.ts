import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { VideoComponent } from './video.component';

const routes: Routes = [
  {
    path: '',
    component: VideoComponent,
    data: {
      title: 'Video'
    }
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule {}
