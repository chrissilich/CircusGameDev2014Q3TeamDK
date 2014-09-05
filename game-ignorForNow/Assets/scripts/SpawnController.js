#pragma strict

public var spawnID:int = 1;


// get ref to ET
// and it's script

var RefToET: GameObject;
var RefToES: EverlastingScript; 

function Start () {
	RefToET = GameObject.Find("_EverlastingThing");
	RefToES = RefToET.GetComponent('EverlastingScript');
}

function Update () {

}



function OnTriggerEnter2D( other:Collider2D ) {

	// set the ES's spawnTo variable to the ID variable of this object

	RefToES.spawnAt = this.spawnID;

}