import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtienViewerComponent } from './protien-viewer/protien-viewer.component';

const routes: Routes = [
  {path: "protein-view", component: ProtienViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
