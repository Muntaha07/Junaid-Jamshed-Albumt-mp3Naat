var data = [
    {
        naatName: "Ilahi Teri Chaukhat Per",
        URL:'../dist/mp3/1.mp3',
        img: "../dist/img/1.jpeg",
        Sno: "1",
    },
    {
        naatName: "Muhammad Ka Roza",
        URL:'../dist/mp3/2.m4a',
        img: "../dist/img/2.jpeg",
        Sno: "2",
    },
    {
        naatName: "Mera Dil Badal De",
        URL: '../dist/mp3/3.m4a',
        img: "../dist/img/3.jpeg",
        Sno: "3",
    },
    {
        naatName: "Mein Tu Ummati Hon",
        URL: '../dist/mp3/4.m4a',
        img: "../dist/img/4.jpeg",
        Sno: "4",
    },

]

var allNaats = document.querySelector(".allNaats")
var poster = document.querySelector(".left-img")
var play = document.querySelector("#play")
var forward = document.querySelector("#forward")
var backward = document.querySelector("#backward")
var audio = new Audio()
var currentNaat =0
var flag =0

function main() {
    var clutter = ''
data.forEach(function (elem,index) {
    clutter += `  <div id="${index}" class="naat cursor-pointer py-10
   px-4 border-t-2 border-sky-200 mt-2 
                flex justify-between 
            items-center">
                    <div class="naatNaam flex items-center gap-4">
                        <h1 class="text-2xl text-[#72788B] 
                        font-semibold">${elem.Sno}</h1>
                        <h1 class="text-xl font-normal text-[#C78C2F]">
                            ${elem.naatName}</h1>
                    </div>
                    <div class="timer text-[#72788B]">
                        <i class="ri-music-fill text-2xl font-semibold"></i>
                    </div>
                </div>`

})
audio.src = data[currentNaat].URL 
allNaats.innerHTML = clutter;
poster.style.backgroundImage =`url(${ data[currentNaat].img})`
}
main()

allNaats.addEventListener("click",function(dets){
    currentNaat = dets.target.id
     play.innerHTML = `<i class="ri-pause-large-fill"></i>`
    main()
    audio.play();
    
})
play.addEventListener("click",function(){
if(flag==0){
    play.innerHTML = `<i class="ri-pause-large-fill"></i>`
    main()
    audio.play();
    flag =1
}else{
    play.innerHTML = `<i class="ri-play-large-fill"></i>`
    audio.pause();
    main()
    flag =0
   
}  
})

forward.addEventListener("click",function(){
if(currentNaat < data.length -1){
    currentNaat++
    main()
    audio.play()
}
else{
    forward.style.opacity =0.3
}
    
})

backward.addEventListener("click",function(){

    if(currentNaat >0){
        currentNaat--
        main()
        audio.play()
    }
    else{
        backward.style.opacity =0.3
    }
        
    })
    
