#pragma strict


function Update () {

	if (Input.GetKey(KeyCode.RightArrow)){
		transform.localScale.x = 1;
	} 

	if (Input.GetKey(KeyCode.LeftArrow)) {
		transform.localScale.x = -1;
	} 
}