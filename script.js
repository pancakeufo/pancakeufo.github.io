function isLink(url){
	try {
		new URL(url);
		return true;
  } catch (_) {
		return false;  
  }
}

function getSourceCydia(){
	var cydia = "cydia://url/https://cydia.saurik.com/api/share#?source="
	var repo = "https://pancakeufo.yourepo.com";
	var queryString = window.location.href.split("source=");

	if(queryString[1]){
		if(isLink(queryString[1])){
			repo = queryString[1];
		}
	}
	repo = cydia + repo;
	window.open(repo,"_self")
}

function getSourceZebra(){
	var zebra = "zbra://sources/add/"
	var repo = "https://pancakeufo.yourepo.com";
	var queryString = window.location.href.split("source=");

	if(queryString[1]){
		if(isLink(queryString[1])){
			repo = queryString[1];
		}
	}
	repo = zebra + repo;
	window.open(repo,"_self")
}

function getSourceSileo(){
	var sileo = "sileo://source/"
	var repo = "https://pancakeufo.yourepo.com";
	var queryString = window.location.href.split("source=");

	if(queryString[1]){
		if(isLink(queryString[1])){
			repo = queryString[1];
		}
	}
	repo = sileo + repo;
	window.open(repo,"_self")
}

function getSourceInstaller(){
	var installer = "installer://add/repo=URL/"
	var repo = "https://pancakeufo.yourepo.com";
	var queryString = window.location.href.split("source=");

	if(queryString[1]){
		if(isLink(queryString[1])){
			repo = queryString[1];
		}
	}
	repo = installer + repo;
	window.open(repo,"_self")
}