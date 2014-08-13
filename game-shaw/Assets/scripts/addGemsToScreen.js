#pragma strict

var YourTexture : GUITexture;
 
function OnTriggerEnter2D(hit : Collider2D){
    if(hit.gameObject.tag == "Player")
        {
            YourTexture.enabled = true; 
            // yield WaitForSeconds(3);
            // YourTexture.enabled = false;
        }
}