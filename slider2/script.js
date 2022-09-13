const review=[
    {
        id:1,
        name:"Kaykay",
        job:"web design",
        img:"./80431257_585141508938075_5879919526551748608_n.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident soluta eveniet iure voluptas possimus , voluptate culpa asperiores fugit sint dolorem id."
    },{
        id:2,
        name:"Lawkay",
        job:"web developer",
        img:"./240950363_10159122218009821_4195023348917980045_n.jpg",
        text:"Lorem ipsum  sit amet consectetur adipisicing elit. Provident soluta eveniet iure voluptas possimus perferendis ipsam, voluptate culpa asperiores fugit sint dolorem id."
    },{
        id:3,
        name:"Anthony",
        job:"sorftware enginere",
        img:"./241236405_3847845048649413_4643558349258052118_n.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident soluta eveniet iure voluptas possimus perferendis ipsam, voluptate culpa asperiores fugit id."
    },{
        id:4,
        name:"Anderson",
        job:"sorftware development",
        img:"./260696412_4960836960617445_756227499642378186_n.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident soluta  iure voluptas possimus perferendis ipsam, voluptate culpa asperiores fugit sint dolorem id."
    }
];
const image=document.getElementById("personal-image");
const name=document.getElementById("name");
const job=document.getElementById("boss");
const about=document.getElementById("lorem");
 
const leftBtn=document.getElementById("left")
const rightBtn=document.getElementById("right")
const randomBtn=document.getElementById("random")
let currentIndex=0;
window.addEventListener("DOMContentLoaded",function(){
    showPerson()
})
rightBtn.addEventListener("click",function(){
    currentIndex++;
    // နောက်ဆုံး index ထပ် currentIndex ကြီးသွားရင် zero ကပြန်စ
    if(currentIndex>review.length-1){
        currentIndex=0;
    }
    showPerson()
})
leftBtn.addEventListener("click",function(){
    currentIndex--;
    // ရှေ့ဆုံး index ထပ် currentIndex ငယ်သွားရင် နောက်ဆုံး ကပြန်စ
    if(currentIndex<0){
        currentIndex=review.length-1;
    }
    showPerson()
})
function showPerson(){
    const item = review[currentIndex];
    image.src = item.img;
    name.textContent=item.name;
    job.textContent=item.job;
    about.textContent=item.text;
}
randomBtn.addEventListener("click",function(){
    currentIndex=Math.floor(Math.random()*review.length)
    showPerson()
})