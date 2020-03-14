var c = document.getElementById("myCanvas")
var ctx = .getContext("2d")

var bw = new Image()
var capt = new Image()
var hawkeye = new Image()
var hulk = new Image()
var im = new Image()
var thor = new Image()

bw.src = "Black-Widow.png"
capt.src = 'capt.png'
hawkeye.src = 'hawkeye.png'
hulk.src = 'hulk.png'
im.src = 'Iron_Man.png'
thor.src = 'thor.png'

bw.onload = function() {
	ctx.drawImage(bw,650,200,150,200);
}
im.onload = function() {
	ctx.drawImage(im,470,110,200,200);
}
hawkeye.onload