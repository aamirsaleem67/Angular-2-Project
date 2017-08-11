import { Directive,HostListener,ElementRef,Renderer } from '@angular/core';

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{
   toogle:boolean = false;
   @HostListener('click') onClick(){
        this.manage();
   } 
   constructor(private elf:ElementRef,private renderer:Renderer){
          
   }
   manage(){
    //    this.elf.nativeElement.className="open";
    //    console.log(this.elf.nativeElement.className);
      this.toogle = !this.toogle;
      this.renderer.setElementClass(this.elf.nativeElement,'open',this.toogle);
      console.log(this.elf.nativeElement.className);
   }

}