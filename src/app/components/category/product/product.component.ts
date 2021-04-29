import { Iproduct } from './../../../interfaces/iproduct';
import { Component, Input, OnInit, OnChanges, ElementRef } from '@angular/core';
declare var $:any;



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit, OnChanges { 

  @Input() selectFromCategory:number;

  products: Iproduct[]
  tempAmount: number
  display = "none"
  cartProducts: Iproduct[]
  shipping : number
  finalPrice :number
  allProducts: Iproduct[]
  catSelected : boolean
  constructor() {
    this.products = [
      // ---------------------cloth------------------------------
      {id:1, name: "trousers", img: "https://www.cordings.co.uk/media/catalog/product/cache/90cced69a688d3fb8b4ac2887336c7a4/t/r/tr005khaki_2.jpg", price: 200, quantity:0, cat_id:1},
      {id:2, name: "tall dress", img: "https://cdn.yoursclothing.com/Images/ProductImages/Big/d7c13293-aaf3-46_193029_A.jpg", price: 350, quantity:10, cat_id:1},
      {id:3, name: "short dress", img: "https://images-na.ssl-images-amazon.com/images/I/61oMHFNtK7L._AC_UX342_.jpg", price: 350, quantity:30, cat_id:1},
      {id:4, name: "jeans", img: "https://media.missguided.com/i/missguided/G1807070_03?fmt=jpeg&fmt.jpeg.interlaced=true&$product-page__main--2x$", price: 150, quantity:5, cat_id:1},
      {id:5, name: "sporty", img: "https://ae01.alicdn.com/kf/HTB1NO80XIfrK1RkSmLyq6xGApXax.jpg", price: 250, quantity:0, cat_id:1},
      // -------------toys-------------------------
      {id:6, name: "bike", img: "https://cdn.shopify.com/s/files/1/0405/1117/6862/products/iDgH1HjAQvazAkwD8z3H_Islabikes-Rothan-Orange-Childrens_Balance_Bike_1200x1200.jpg?v=1598356996", price: 1200, quantity:4, cat_id:2},
      {id:7, name: "doll", img: "https://media.4rgos.it/s/Argos/7124446_R_SET?$Main768$&w=620&h=620", price: 350, quantity:10, cat_id:2},
      {id:8, name: "remote car", img: "https://shop.landrover.com/media/catalog/product/cache/6e8e24cc73e2eff11526e72b5f24c033/l/r/xlr_rr_sport_1-14_51lgty918wta_main_1.jpg.pagespeed.ic.2EyUxc_-Cl.jpg", price: 550, quantity:7, cat_id:2},
      // -------------HOMe-------------------------
      {id:9, name: "Chair", img: "https://cf4.s3.souqcdn.com/item/2019/02/25/46/01/57/51/item_L_46015751_364198543f84f.jpg", price: 2200, quantity:4, cat_id:3},
      {id:10, name: "bed", img: "https://ii1.pepperfry.com/media/catalog/product/h/e/1100x1210/hero-queen-size-bed-in-wenge-finish-by--home-hero-queen-size-bed-in-wenge-finish-by--home-qmfryg.jpg", price: 4000, quantity:1, cat_id:3},
      {id:11, name: "mirror", img: "https://eurekastreetfurniture.com.au/attachments/Product/9631/MIRRORBANDASIL.jpg?ts=1613610095", price: 1000, quantity:7, cat_id:3},
      {id:12, name: "organizer", img: "https://www.containerstore.com/catalogimages/364807/SU_19_Like-it-Translucent_Details__R.jpg?width=1200&height=1200&align=center", price: 630, quantity:0, cat_id:3},
      // -------------------electronics------------------------
      {id:13, name: "labTop", img: "https://previews.123rf.com/images/yodiyim/yodiyim1408/yodiyim140800169/30986416-digital-device-labtop-on-white-background.jpg", price: 20000, quantity:4, cat_id:4},
      {id:14, name: "mobile", img: "https://cf1.s3.souqcdn.com/item/2020/10/07/13/18/84/11/1/item_L_131884111_b431d6d760a70.jpg", price: 5000, quantity:2, cat_id:4},
      {id:15, name: "iphone 7", img: "https://muraselon.com/wp-content/uploads/2020/11/960x0.jpg", price: 23000, quantity:5, cat_id:4},
      // -------------------appliances------------------------
      {id:16, name: "tv", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafbTJQvPfXHhHY7OrZOSovoibmfNUX3joImI2h77k0nFL6LC08MF-dNSp6PIcy9abLRU&usqp=CAU", price: 15000, quantity:10, cat_id:5},
      {id:17, name: "coffe machine", img: "https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=ROHVSa06", price: 3200, quantity:7, cat_id:4},
      {id:18, name: "fridge", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMF_aE2aApen2JhsbCVmRPmVOflccdZR4IwA&usqp=CAU", price: 30000, quantity:0, cat_id:5},



      // ---------------------cloth------------------------------
      {id:1, name: "trousers", img: "https://www.cordings.co.uk/media/catalog/product/cache/90cced69a688d3fb8b4ac2887336c7a4/t/r/tr005khaki_2.jpg", price: 200, quantity:0, cat_id:6},
      {id:2, name: "tall dress", img: "https://cdn.yoursclothing.com/Images/ProductImages/Big/d7c13293-aaf3-46_193029_A.jpg", price: 350, quantity:10, cat_id:6},
      {id:3, name: "short dress", img: "https://images-na.ssl-images-amazon.com/images/I/61oMHFNtK7L._AC_UX342_.jpg", price: 350, quantity:30, cat_id:6},
      {id:4, name: "jeans", img: "https://media.missguided.com/i/missguided/G1807070_03?fmt=jpeg&fmt.jpeg.interlaced=true&$product-page__main--2x$", price: 150, quantity:5, cat_id:6},
      {id:5, name: "sporty", img: "https://ae01.alicdn.com/kf/HTB1NO80XIfrK1RkSmLyq6xGApXax.jpg", price: 250, quantity:0, cat_id:6},
      // -------------toys-------------------------
      {id:6, name: "bike", img: "https://cdn.shopify.com/s/files/1/0405/1117/6862/products/iDgH1HjAQvazAkwD8z3H_Islabikes-Rothan-Orange-Childrens_Balance_Bike_1200x1200.jpg?v=1598356996", price: 1200, quantity:4, cat_id:6},
      {id:7, name: "doll", img: "https://media.4rgos.it/s/Argos/7124446_R_SET?$Main768$&w=620&h=620", price: 350, quantity:10, cat_id:6},
      {id:8, name: "remote car", img: "https://shop.landrover.com/media/catalog/product/cache/6e8e24cc73e2eff11526e72b5f24c033/l/r/xlr_rr_sport_1-14_51lgty918wta_main_1.jpg.pagespeed.ic.2EyUxc_-Cl.jpg", price: 550, quantity:7, cat_id:6},
      // -------------HOMe-------------------------
      {id:9, name: "Chair", img: "https://cf4.s3.souqcdn.com/item/2019/02/25/46/01/57/51/item_L_46015751_364198543f84f.jpg", price: 2200, quantity:4, cat_id:6},
      {id:10, name: "bed", img: "https://ii1.pepperfry.com/media/catalog/product/h/e/1100x1210/hero-queen-size-bed-in-wenge-finish-by--home-hero-queen-size-bed-in-wenge-finish-by--home-qmfryg.jpg", price: 4000, quantity:1, cat_id:6},
      {id:11, name: "mirror", img: "https://eurekastreetfurniture.com.au/attachments/Product/9631/MIRRORBANDASIL.jpg?ts=1613610095", price: 1000, quantity:7, cat_id:6},
      {id:12, name: "organizer", img: "https://www.containerstore.com/catalogimages/364807/SU_19_Like-it-Translucent_Details__R.jpg?width=1200&height=1200&align=center", price: 630, quantity:0, cat_id:6},
      // -------------------electronics------------------------
      {id:13, name: "labTop", img: "https://previews.123rf.com/images/yodiyim/yodiyim1408/yodiyim140800169/30986416-digital-device-labtop-on-white-background.jpg", price: 20000, quantity:4, cat_id:6},
      {id:14, name: "mobile", img: "https://cf1.s3.souqcdn.com/item/2020/10/07/13/18/84/11/1/item_L_131884111_b431d6d760a70.jpg", price: 5000, quantity:2, cat_id:6},
      {id:15, name: "iphone 7", img: "https://muraselon.com/wp-content/uploads/2020/11/960x0.jpg", price: 23000, quantity:5, cat_id:6},
      // -------------------appliances------------------------
      {id:16, name: "tv", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafbTJQvPfXHhHY7OrZOSovoibmfNUX3joImI2h77k0nFL6LC08MF-dNSp6PIcy9abLRU&usqp=CAU", price: 15000, quantity:10, cat_id:6},
      {id:17, name: "coffe machine", img: "https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=ROHVSa06", price: 3200, quantity:7, cat_id:6},
      {id:18, name: "fridge", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMF_aE2aApen2JhsbCVmRPmVOflccdZR4IwA&usqp=CAU", price: 30000, quantity:0, cat_id:6},
    ]
    this.cartProducts = [
      {id:4, name: "jeans", img: "https://media.missguided.com/i/missguided/G1807070_03?fmt=jpeg&fmt.jpeg.interlaced=true&$product-page__main--2x$", price: 150, quantity:5, cat_id:1},
      {id:18, name: "fridge", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMF_aE2aApen2JhsbCVmRPmVOflccdZR4IwA&usqp=CAU", price: 30000, quantity:0, cat_id:5},
    ]
    this.tempAmount = 0
    this.shipping = 30
    this.finalPrice = 0
    this.catSelected = false
  }
  ngOnChanges(

  ):void{}
  ngOnInit(): void {

    for(let i = 0; i < this.cartProducts.length; i++) {
      this.tempAmount = this.tempAmount + this.cartProducts[i].price
    }
    console.log(this.tempAmount)
    this.finalPrice = this.tempAmount + this.shipping
    
  }
  getProductByCatID():Iproduct[]{
    return this.products.filter((prod)=>{
      return prod.cat_id==this.selectFromCategory;
    })
  }
  openModal(){
    $('#exampleModal').modal('show');
    }
  closeModal() {
    $('#exampleModal').modal('toggle')
  }
  openCollapse() {
    $('#newAddress').modal('show');
  }
  // totalPrice(price,count){
  //   this.tempAmount+=price*count;

    
  // }
  // totalPrice2(price,count){
  //   if(this.tempAmount>0){
  //   this.tempAmount-=price*count;
  //   }
  //   else{
  //     this.tempAmount=0;
  //   }

  // }

}
