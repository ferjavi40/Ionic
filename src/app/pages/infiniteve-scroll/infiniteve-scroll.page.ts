import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infiniteve-scroll',
  templateUrl: './infiniteve-scroll.page.html',
  styleUrls: ['./infiniteve-scroll.page.scss'],
})
export class InfiniteveScrollPage implements OnInit {

  data: any [] = Array(20);
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    console.log(event);
    setTimeout(()=>{ 
      if(this.data.length>50){
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled=true;
        return
      }
      let data2 = Array(20);
      this.data.push(...data2);
      this.infiniteScroll.complete();
    },1500)
    
  }

}
