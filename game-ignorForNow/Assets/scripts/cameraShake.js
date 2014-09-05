#pragma strict

var objToShake : Transform;

function Update(){
	var randNrx = Random.Range(0.7,-0.7);
	var randNry = Random.Range(0.2,-0.2);
	objToShake.transform.position += Vector2(randNrx, randNry);
}
