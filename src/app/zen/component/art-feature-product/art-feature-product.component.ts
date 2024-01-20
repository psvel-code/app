import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-art-feature-product',
  templateUrl: './art-feature-product.component.html',
  styleUrls: ['./art-feature-product.component.scss']
})
export class ArtFeatureProductComponent {


  @HostBinding("style.--height1") height1: string = '1200px';
  @HostBinding("style.--height2") height2: string = '800px';
  @HostBinding("style.--height2-1") height2_1: string = '800px';
  @HostBinding("style.--height3") height3: string = '700px';
  @HostBinding("style.--height4") height4: string = '600px';
  @HostBinding("style.--height5") height5: string = '780px';


len!:number;
featureProducts=[
{image:"https://img.freepik.com/premium-vector/face-cubism-pattern-design-illustration_628782-135.jpg", price:'250',name:'new horixons'},
// {image:"https://img.freepik.com/premium-vector/face-cubism-pattern-design-illustration_628782-135.jpg", price:'250',name:'freedom'},
// {image:"https://img.freepik.com/premium-vector/face-cubism-pattern-design-illustration_628782-135.jpg", price:'250',name:'lost in thought'},
// {image:"https://img.freepik.com/premium-vector/face-cubism-pattern-design-illustration_628782-135.jpg", price:'250',name:'custom neglace'},
// {image:"https://img.freepik.com/premium-vector/face-cubism-pattern-design-illustration_628782-135.jpg", price:'250',name:'new horizons'},
// {image:"https://img.freepik.com/premium-vector/face-cubism-pattern-design-illustration_628782-135.jpg", price:'250',name:'falling sky'},
// // {image:"https://img.freepik.com/premium-vector/face-cubism-pattern-design-illustration_628782-135.jpg", price:'250',name:'art6'},
// {image:"https://img.freepik.com/premium-vector/face-cubism-pattern-design-illustration_628782-135.jpg", price:'250',name:'art6'},
]

ngOnInit(){
  this.len=this.featureProducts.length;

  if(this.len==5 ){
    this.height5='700px';
  }
  else if(this.len==4){
    this.height1='1030px'
    this.height2 ='720px';
    this.height2_1='740px';
    this.height3='660px';
    this.height4='530px';
    this.height5='550px'
  }
  else if(this.len>2){
    this.height1='650px';
    this.height2 ='600px';
    this.height2_1='420px';
    this.height3='380px';
    this.height4='330px';
    this.height5='470px';
  }
  else if(this.len==1){
    this.height1='450px';
this.height2_1='360px';
this.height3='310px';
this.height4='230px';
this.height5='240px'
  }
}
}
