#pragma strict

function Awake () {
	DontDestroyOnLoad (transform.gameObject);
	
	var things = GameObject.FindGameObjectsWithTag("Everlasting Thing");
	//var thing = GameObject.Find("Everlasting Thing");
	Debug.Log(gameObject);
	if (things.Length > 1) {
		for (var t in things) {
			Debug.Log(t);
			if (t == gameObject) {
				Debug.Log("it's this");
				Destroy(t);
			} else {
				Debug.Log("it's not");
			}
		}
	}
}
