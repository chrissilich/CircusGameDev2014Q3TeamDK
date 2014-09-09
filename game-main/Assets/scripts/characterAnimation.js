#pragma strict

var walkSpeed:int = 5;
var jumpHeight:int = 5;
var health : int = 1;

var mainCamera:GameObject;
var shakeScript:cameraShake;

var et:GameObject;
var es:EverlastingScript;

var fadeToBlack:GameObject;
//var fadeScript:fadeToBlackScript;

private var jumpKeyReleased:boolean = true;


function Start () {
	
	et = GameObject.Find("_EverlastingThing");
	es = et.GetComponent("EverlastingScript");

	
	mainCamera = GameObject.Find("Main Camera");
	shakeScript = mainCamera.GetComponent("cameraShake");
	
	fadeToBlack = GameObject.Find("fadeToBlack");
	
//	fadeScript = fadeToBlack.GetComponent("fadeToBlackScript");
	
	var allSpawns = GameObject.FindGameObjectsWithTag("Respawn");
	for (var s in allSpawns) {
		var spawnScript:SpawnController = s.GetComponent("SpawnController");
		Debug.Log("found spawn point with ID: " + spawnScript.spawnID);
		if (es.spawnAt == spawnScript.spawnID) {
			transform.position = s.transform.position;
		}
	}
	
	//transform.position = es.spawnAt.transform.position;
	
	
	shakeScript.enabled = false;

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
	

}

function Hit () {
	//remove one hit point and check if we are dead 
	health -= 1;
	if( health == 0) {
//		Debug.Log("You died!");
	
		shakeScript.enabled = true;
		fadeToBlack.SendMessage("MakeSceneEnd");
		yield WaitForSeconds (1);
		
		Application.LoadLevel(Application.loadedLevel);
		
			
		//transform.position = spawn.transform.position;
	}
}

function OnCollisionEnter2D(collision : Collision2D) {
	//check if we hit an object that can hurt us 
	if(collision.gameObject.tag == "Hurt") {
		Hit();
	}
}


