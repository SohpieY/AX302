var game = new Phaser.Game(800,600,Phaser.AUTO,'',
	{preload:preload, create:create, update:uptade}

var score = 0
var life = 3

function preload(){
game.load.image('sky','assets/sky.png')
game.load.image('gound','assets/platform.png')
game.load.image('star','assets/star.png')
game.load.spritesheet('dude','assets/dude.png',32,48)
game.load.spritesheet('baddie','assets/baddie.png',32,48)
}

function create(){
game.physics.starSystem(Phaser.Physics.ARCADE)
game.add.sprite(0,0,'sky')
platforms = game.add.physicsGroup()
platforms.enableBody = true
var.ground = platforms.create(0,555,'gound')
ground.scale.setTo(2,2)
ground.body.immovable= true
var ledge = platforms.create(400,400,'ground')
ledge.body.immovable = true;
ledge = platforms.create(-100,250,'ground')
ledge.body.immovable = true

var style = {font: "bold 32px Arial", fill: "#fff"}
scorelabel = game.add.text(300,560,"Score: ",style)
scoretext = game.add.text(420,560,score.style)
scoretext.setShadow(3,3,'rgba(0,0,0,0.5)',2)
scorelabel.setShadow(3,3,'rgba(0,0,0,0.5)',2)

lifelable = game.add.text(10,5, "Lives: ",style)
lifetext = game.add.text(120,5,life,style)
liefelabel.setShadow(3,3,'rgba(0,0,0,0.5)',2)
liefelabel.setShadow(3,3,'rgba(0,0,0,0.5)',2)

//Creating the player Sprite
player = game.add.sprite(32, 400, 'dude');
//Animating the Player sprite
player.animations.add('left',[0,1,2,3] 10, true);
player.animations.add('right',[5,6,7,8] 10, true);
game.physics.arcade.enable(player);
player.body.bounce.y = 0.2;
player.body.gravity.y = 300;
player.body.collideWorldBounds = true;

//Create the Enemy
enemy1 = game.add.sprite(760, 20, 'baddie')
//Anamiating the enemy
enemy1.animations.add('left',[0,1] 10, true);
enemy1.animations.add('right',[2,3] 10, true);
game.physics.arcade.enable(enemy1);
enemy1.body.bounce.y = 0.2;
enemy1.body.gravity.y = 500;
enemy1.body.collideWorldBounds = true;

//Create the Star
stars = game.add.physicsGroup();
stars.enableBody = true;
//Create 12 stars evenly spaced
for(var i=0; i<12; i++){
var star = stars.create(i * 70, 0, 'star');
star.body.gravity.y = 200;
star.body.bounce.y = 0.7 + Math.random()*0.2;
}

//Create Keyboared entries 
cursor = game.input.keyboared.createCursorKeys();
}

function update(){

game.physics.arcade.collide(player, platforms);
game.physics.arcade.collide(stars, platforms);
game.physics.arcade.collide(enemy1, platforms);

//Reset the player's celocity if no events
//Velocity  =speed/movement
//velocity = 0 (no movement)
//velocity can be paired with direction
player.body.velocity.x = 0;

//player mocement by keys
if(cursors.left.isDown){
	//move left
	player.body.velocity.x = -150;
	player.animations.play('left');
} else if(cursors.right.isDown) {
	//move right
		player.body.velocity.x = 150;
	player.animations.play('right');
} else{
	player.animations.stop();
	player.frame = 4;
}

//Allow the player to jump if touching the ground
if(cursors.up.isDown &&
	player.body.touching.down){
	player.body.velocity.y = -300;
}



}