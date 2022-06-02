var canvas;
var stickerArtists;
var activeStickers = [];
var activeImg;
var stickers = [];

class Sticker {
    constructor(sticker, x, y, size) {
        this.sticker = sticker;
        this.x = x;
        this.y = y;
        this.size = size;
    }
}

function preload() {
    var kjersti = loadImage("https://assets.website-files.com/6241e35a54c907894c9d60b1/62964bfef83fc145e4a473a6_KjerstiJorgenson.png");
    var sam = loadImage("https://assets.website-files.com/6241e35a54c907894c9d60b1/629663d5b58844a25f8eb872_SamChoiCadley.png");
    var cey = loadImage("https://assets.website-files.com/6241e35a54c907894c9d60b1/629663d51f3f009c6829b986_CeyAdams.png");
    var randi = loadImage("https://assets.website-files.com/6241e35a54c907894c9d60b1/629663d5fc028e0886013096_RandiBrookmanHarris.png");
    var lisa = loadImage("https://assets.website-files.com/6241e35a54c907894c9d60b1/629663d5003349734910b4b1_LisaChamp.png");
    var kenny = loadImage("https://assets.website-files.com/6241e35a54c907894c9d60b1/629663d5fc028e0df0013097_KennyDoss.png");
    var jason = loadImage("https://assets.website-files.com/6241e35a54c907894c9d60b1/629663d59bf3c66755577bf0_JasonMayden.png");
    var andreas = loadImage("https://assets.website-files.com/6241e35a54c907894c9d60b1/629663d44ce169b90599bdcf_AndreasWagner.png");
    var zeph = loadImage("https://assets.website-files.com/6241e35a54c907894c9d60b1/62966424221b8f7cb82ba923_ZephFarmby.png");
    stickerArtists = [kjersti, sam, cey, randi, lisa, kenny, jason, andreas, zeph];
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.id("canvas")
    canvas.parent("canvas_div");
}


function mouseClicked() {
    sticker();
}

function sticker() {
    var randSize = random(200,300); 
    var x = mouseX - (randSize/2);
    var y = mouseY - (randSize/2);
    var randStickerIdx = int(random(stickerArtists.length));
    var randSticker = stickerArtists[randStickerIdx];
    var sticker = new Sticker(randSticker, x, y, randSize);
    stickers.push(sticker);
    image(randSticker, x, y, randSize, randSize);
    setTimeout(function(){
        clear();
        stickers.shift();
        for(let x=0; x<stickers.length; x++) {
            image(stickers[x].sticker, stickers[x].x, stickers[x].y, stickers[x].size, stickers[x].size);
        }
    },1500);
}

function windowResized() {
    canvas = resizeCanvas(windowWidth, windowHeight);
}

//Got rid of these buttons for now
/*
const clear_btn = document.querySelector("#clear");
clear_btn.addEventListener('click', function(){
    background(0);
});

const save = document.querySelector("#save");
save.addEventListener('click', function(){
    saveCanvas('RubiGraffiti.jpg');
});*/
