#pragma strict

var speed : float = -5;
var chaseAt : float = 5;

private var player : GameObject;
private var startingY : float;

function Start () {
	//find and remeber the player 
	player =  GameObject.Find("character");
	// startingY = transform.position.y;
}

function Update () {
	//calculate distance between player and enemy 
	var distance = Vector2.Distance(transform.position, player.transform.position);
	
	//check how close we are 
	if (distance <= chaseAt) {
		//chase the player 
			rigidbody2D.velocity.x = speed;
	}
	
}
