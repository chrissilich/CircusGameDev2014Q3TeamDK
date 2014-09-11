#pragma strict



var movTexture : MovieTexture;

function Start() {
	movTexture = renderer.material.mainTexture;
	movTexture.Play();
	
	yield WaitForSeconds (9);
	movTexture.Pause();
}