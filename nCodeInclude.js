var params = '';
function __postBack(page,o) {
	cleanupAJAX();
	var head= document.getElementsByTagName('head')[0];
	var script= document.createElement('script');
	script.setAttribute('id','ts');
	script.type= 'text/javascript';
	console.log(page+'.p?cb='+o.getAttribute("callback")+"&pf="+o.getAttribute('postFunc')+"&p="+params+"&g="+guid());
	script.src= page+'.p?cb='+o.getAttribute("callback")+"&pf="+o.getAttribute('postFunc')+"&p="+params+"&g="+guid();
	head.appendChild(script);
	params='';
}

function cleanupAJAX() {
	var head= document.getElementsByTagName('head')[0];
	var s = document.getElementById('ts');
	if (s != null && s != 'undefined')
		head.removeChild(s);
}

function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function guid() {
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

if (typeof load == 'function') load();
