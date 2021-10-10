function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  function map(array, f) {
    var acc = [];
    each(array, function (element, i) {
      acc.push(f(element, i));
    });
    return acc;
  }

  function filter(array,predicate){
    var acc=[];
    each(array,function(element){
      if (predicate(element)){
        acc.push(element);
      }
    })
    return acc;
  }

  $( document ).ready(function(){ 
  
    display()
    
  })

  var arrG = []

  function Item(ref,type,img,price)
 {
   var o = {}
   o.ref=ref
   o.type=type
   o.price=price
   o.img=img
   o.prepare=prepare
 
   return o ;
 }


 function prepare()
 {
   return "<div class='item'><div class='ref'> ref : "+this.ref+"</div> <div class='type'>"+this.type+'</div> <div><img class="clothes" src="'+this.img+'"</div> <div class="price">'+this.price+'</div></div>'
 }

 
 var G1= Item('G001',"coat","https://ae01.alicdn.com/kf/HTB1.wktmnqWBKNjSZFAq6ynSpXaU.jpg_q50.jpg","80$")
 var G2= Item('G002',"jogging","https://toykidmama.com/data/feature/big-ila-217933-1-sika-deer.jpg","40$")
 var G3= Item('G003',"pant","https://cf.shopee.ph/file/ba05ea0ef7d966e70651c00e82eaf09b","30$")
 var G4= Item('G004',"jogging","https://i0.wp.com/aweplaza.com/wp-content/uploads/2021/05/Girl-Spring-Outwear-Children-Clothing-Baby-Casual-Sports-Toddler-Tracksuit-2Pcs-Little-Girls-Jogging-Suits-Kid-2.jpg?fit=1001%2C1001&ssl=1","35$")
 var G5= Item('G005',"coat","https://i.pinimg.com/originals/d7/7d/c9/d77dc9dc6e0cc0e93e15dd88bd8c37c8.jpg","70$")
 var G6= Item('G006',"coat","https://my-live-01.slatic.net/p/ca85561da68c09e65f603a14c27cdab8.jpg","75$")
 var G7= Item('G007',"pant","https://www.dhresource.com/0x0/f2/albu/g19/M01/FF/F3/rBVap2EUBoqAFO5NAAH8Vuj73ns182.jpg/jeans-bear-leader-autumn-winter-baby-boys.jpg","40$")
 var G8= Item('G008',"coat","https://ae01.alicdn.com/kf/HTB1wt1DLNTpK1RjSZR0q6zEwXXao/2019-Autumn-Winter-girls-wool-coat-kids-clothes-children-clothing-fashion-patchwork-thick-Warm-outwear-teenage.jpg","80$")
 var G9= Item('G009',"pant","https://i.pinimg.com/736x/57/34/d9/5734d9c58de1a02ae087671305c7531e.jpg","35$")
 var G10= Item('G010',"coat","https://ae01.alicdn.com/kf/H20d8447bc8c048cdb44bc1adfe29055bn/2021-Girls-Clothes-Autumn-and-Winter-New-Children-Fashion-Cartoon-Thick-Warm-Medium-Long-Woolen-Coat.jpg_Q90.jpg_.webp","35$")
 var G11= Item('G011',"hoddies","https://ae01.alicdn.com/kf/Hd9ec95de55f240aaa3708b8154ddbc1ew/2021-Autumn-And-Winter-New-Velvet-Girls-Trousers-Cartoon-Printing-Solid-Color-Children-s-Warm-Trousers.jpg_q50.jpg","70$")
 var G12= Item('G012',"jacket","https://image.dhgate.com/0x0s/f2-albu-g8-M00-53-E3-rBVaVF3czd2AO08DAAS83F35yvU300.jpg/ni-as-de-manga-larga-una-l-nea-de-vestidos.jpg","50$")
 var G13= Item('G013',"hoddies","https://ae01.alicdn.com/kf/H12ac89a786ac4758b0b830137d4d6f27V/ZHENBAILI-Za-Woman-2021-Casual-Traf-Pull-Autumn-Winter-Y2K-Sweet-Girls-Heart-Jacquard-Knit-Jumpers.jpg_Q90.jpg_.webp","20$")
 var G14= Item('G014',"jogging","https://s.alicdn.com/@sc04/kf/H96122a7125e6470fa11483a6cd217dccu.jpg","45$")
 var G15= Item('G015',"jogging","https://ae01.alicdn.com/kf/Hda66eb970bb942999b52a5a5a5068b12w/Filles-v-tements-ensemble-2021-printemps-pull-sweat-jean-pissage-2-pi-ces-tenues-v-tements.jpg_q50.jpg","50$")
 
  
 arrG.push(G1);
 arrG.push(G2);
 arrG.push(G3);
 arrG.push(G4);
 arrG.push(G5);
 arrG.push(G6);
 arrG.push(G7);
 arrG.push(G8);
 arrG.push(G9);
 arrG.push(G10);
 arrG.push(G11);
 arrG.push(G12);
 arrG.push(G13);
 arrG.push(G14);
 arrG.push(G15);

 function display() {
    for(var i=0; i<arrG.length;i++){
     $(".girls-container").append(arrG[i].prepare())
    }
  }

 function displayuniverselle(arrG) {
    for(var i=0; i<arrG.length;i++){
     $(".girls-container").append(arrG[i].prepare())
    }
  }

  function filterByPrice(){
    var arr=[]
    for( var i=0 ; i<arrG.length; i++){
        if(parseInt((arrG[i].price),10)> $('#min').val() && parseInt((arrG[i].price),10)< $('#max').val() ){
            arr.push(arrG[i])
        }
        
    }
    $(".girls-container").html('')
    displayuniverselle(arr)

  }
  function filterByType(){
    var arr=[]
    for( var i=0 ; i<arrG.length; i++){
      if (arrG[i].type=== $('#mySearch').val()){
        arr.push(arrG[i])
      }
  }
  $(".girls-container").html('')
  displayuniverselle(arr)
  }
  
  
   
  