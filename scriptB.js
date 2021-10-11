
$( document ).ready(function(){ 
  
  display()
  
})

 var arrB = []
 

 function Item(ref,type,img,price){
   var o = {}
   o.ref=ref
   o.type=type
   o.price=price
   o.img=img
   o.prepare=prepare
   return o ;
 }

 function prepare(){
  return "<div class='item'><div class='ref'> ref : "+this.ref+"</div> <div class='type'>"+this.type+'</div> <div><img class="clothes" src="'+this.img+'"</div> <div class="price">'+this.price+'</div></div>'
}
 
 var B1= Item('B001',"jacket","https://m.media-amazon.com/images/I/51WCe5FZLRL._AC_UX679_.jpg","60$")
 var B2= Item('B002',"jogging","http://dress-trends.com/wp-content/uploads/2018/11/boys-fashion-2019-boys-clothes-2019-boys-summer-clothes-2019-boys-tracksuits-2019-boys-fashion-2019-boys-clothes-2019-boys-summer-clothes-2019.jpg","45$")
 var B3= Item('B003',"jacket","https://img.alicdn.com/imgextra/i1/TB1pPTcIVXXXXciXVXXXXXXXXXX_!!0-item_pic.jpg","70$")
 var B4= Item('B004',"pant","https://ae01.alicdn.com/kf/H1718d88cb02c48f3b4d2375dd51d0edeO/2021new-Baby-Girls-Jeans-Autumn-Winter-Warm-Pants-Boys-Clothes-Kids-CartoonThicken-Plus-Velvet-Denim-Pants.jpg","35$")
 var B5= Item('B005',"jacket","https://stay-trendy.com/wp-content/uploads/2018/12/boys-fashion-2019-kids-fashion-2019-boys-clothes-2019-kids-clothes-2019-boys-jackets-2019-boys-fashion-2019-kids-fashion-2019-boys-clothes-2019-kids-clothes-2019.jpg","60$")
 var B6= Item('B006',"jacket","https://i.pinimg.com/originals/2d/20/66/2d20664604978ffbff5ef9b26d09b613.jpg","50$")
 var B7= Item('B007',"jogging","https://glorytrends.com/wp-content/uploads/2020/05/Boys-fashion-25.jpg","45$")
 var B8= Item('B008',"pant","https://glorytrends.com/wp-content/uploads/2020/05/Boys-fashion-31.jpg","30$")
 var B9= Item('B009',"hoddies","https://media.titus.de/media/image/7e/df/f3/titus-hoodies-script-hoodie-kids-black-vorderansicht-0445845_600x600.jpg","35$")
 var B10= Item('B010',"hoddies","https://ae01.alicdn.com/kf/Hcae8b937177343a1959f43d8afd2b097s/2021-Autumn-Winter-Cotton-kids-clothes-girls-Boys-Hoodies-Outerwear-Teenager-Children-Hooded-Unisex-Pullover-Sweatshirts.jpg_640x640.jpg?1000","40$")
 var B11= Item('B011',"hoddies","https://i.pinimg.com/originals/53/cb/9e/53cb9e8e0d3f0f6b5f8af11e442a85a4.jpg","40$")
 var B12= Item('B012',"jacket","https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1612901978-tb-1612901971.jpg","50$")
 var B13= Item('B013',"hoddies","https://www.thefashiontamer.com/wp-content/uploads/2018/11/womens-hoodies-2017-fashion-womens-hoodies-sweatshirts-letters.jpg","35$")
 var B14= Item('B014',"pant","https://ae01.alicdn.com/kf/H3b0f41b5d3314ce99e1c7d1c48f8cf3fM/Children-Cargo-Pants-for-Boys-Pants-2021-Spring-Children-Boy-Trousers-Fashion-Cotton-Kid-Pants-Boy.jpg_Q90.jpg_.webp","35$")
 var B15= Item('B015',"pant","https://sc04.alicdn.com/kf/Hd98094d3bf30435780e251e963bebe0bv.jpg","35$")
 arrB.push(B1);
 arrB.push(B2);
 arrB.push(B3);
 arrB.push(B4);
 arrB.push(B5);
 arrB.push(B6);
 arrB.push(B7);
 arrB.push(B8);
 arrB.push(B9);
 arrB.push(B10);
 arrB.push(B11);
 arrB.push(B12);
 arrB.push(B13);
 arrB.push(B14);
 arrB.push(B15);


 
 function display() {
  for(var i=0; i<arrB.length;i++){
   $(".boys-container").append(arrB[i].prepare())
  }
}

function displayuniverselle(arrB) {
  for(var i=0; i<arrB.length;i++){
   $(".boys-container").append(arrB[i].prepare())
  }
}

function filterByPrice(){
  var arr=[]
  for( var i=0 ; i<arrB.length; i++){
      if(parseInt((arrB[i].price),10)>= $('#min').val() && parseInt((arrB[i].price),10)<= $('#max').val() ){
          arr.push(arrB[i])
      }
  }
  $(".boys-container").html('')
  displayuniverselle(arr)
}

function filterByType(){
  var arr=[]
  for( var i=0 ; i<arrB.length; i++){
    if (arrB[i].type=== $('#mySearch').val()){
      arr.push(arrB[i])
    }
}
$(".boys-container").html('')
displayuniverselle(arr)
}

 
