#pragma strict

var fadeToBlack:GameObject;

function Start () {
	fadeToBlack = GameObject.Find("fadeToBlack");
}

function OnTriggerEnter2D(hit : Collider2D){
	Debug.Log("the end");
	fadeToBlack.SendMessage("MakeSceneEnd");
}