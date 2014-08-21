#pragma strict

public var rocks : GameObject [];
private var rockslideTrigger : GameObject;





function OnTriggerEnter2D(hit : Collider2D){
		Debug.Log("hit");
		
		for(var i :int = 0; i < rocks.Length; i++) {
			Debug.Log(rocks[i]);
			rocks[i].rigidbody2D.isKinematic = false;
		}
			

}




//when rockslideTrigger is hit loop through array of rocks and make gravity scale = 5