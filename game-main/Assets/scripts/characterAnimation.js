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

	var hit:RaycastHit2D = Physics2D.Raycast(startOfRay, -Vector2.up, 1);


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
		animatorComponent.SetInteger("state", 3);

	} else {
		//mario is in the air
		animatorComponent.SetInteger("state", 1);
	}
	




	// if ( transform.position.y < -7 ) {
		// fell below world

	// }
}

function Hit () {
	//remove one hit point and check if we are dead 
	health -= 1;
	if( health == 0) {
		Debug.Log("You died!");
		
		//ignor this for right now 
//		yield WaitForSeconds (5);
		
		//reloads the scene when the character dies. May not work with 
		//multiple spawn points have to test it out
		
		Application.LoadLevel(Application.loadedLevel);
		
		
			
		transform.position = spawn.transform.position;
	}
}

function OnCollisionEnter2D(collision : Collision2D) {
	//check if we hit an object that can hurt us 
	if(collision.gameObject.tag == "Hurt") {
		Hit();
	}
}


