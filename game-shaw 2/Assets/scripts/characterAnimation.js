#pragma strict

var walkSpeed:int = 5;
var jumpHeight:int = 5;
var health : int = 1;

var spawn:GameObject;

private var jumpKeyReleased:boolean = true;


function Start () {
	transform.position = spawn.transform.position;
}

function Update () {

	if ( !Input.GetAxis("Vertical") ) {
		jumpKeyReleased = true;
	}

}

function FixedUpdate () {
	rigidbody2D.velocity.x = walkSpeed * Input.GetAxis("Horizontal");

	var startOfRay = transform.position;
	startOfRay.y -= 0.5;

	Debug.DrawRay(startOfRay, -Vector2.up, Color.green, 1);

	var hit:RaycastHit2D = Physics2D.Raycast(startOfRay, -Vector2.up, 0.01);


	var animatorComponent:Animator = this.GetComponent("Animator");

	if (hit.collider && hit.collider.tag == "Ground") {
		// mario is on the ground

		animatorComponent.SetInteger("state", 0);

		if ( Input.GetAxis("Vertical") && jumpKeyReleased) {

			jumpKeyReleased = false;
			rigidbody2D.velocity.y = jumpHeight;

		}

	} else if(rigidbody2D.velocity.x == 0) {
		// mario is idle
		animatorComponent.SetInteger("state", 2);

	} else {
		//mario is in the air
		animatorComponent.SetInteger("state", 1);
	}
	




	if ( transform.position.y < -7 ) {
		// fell below world

		transform.position.x = spawn.transform.position.x;
		transform.position.y = spawn.transform.position.y;

		transform.position = spawn.transform.position;
		
	}
}

function Hit () {
	//remove one hit point and check if we are dead 
	health -= 1;
	if( health == 0) {
		Debug.Log("You died!");
		Destroy(gameObject);
	}
}

function OnCollisionEnter2D(collision : Collision2D) {
	//check if we hit an object that can hurt us 
	if(collision.gameObject.tag == "Hurt") {
		Hit();
	}
}









































