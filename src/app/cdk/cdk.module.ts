import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ClipboardModule } from '@angular/cdk/clipboard';


const CDKModules = [
  ScrollingModule,
  ClipboardModule
]

@NgModule({
  imports: [CDKModules],
  exports: [CDKModules]
})
export class CdkModule { }
