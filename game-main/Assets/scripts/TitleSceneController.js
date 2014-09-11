#pragma strict



var playButtonTexture: Texture;

function OnGUI () {
	var playButton = GUI.Button( Rect(10, 300, 250, 250), playButtonTexture, GUIStyle.none );
	
	if (playButton) {
		Debug.Log("clicked");
		
		Application.LoadLevel("scene1");
	} 
}