var fs = require('fs');

exports.testFunc = function(param1,param2,cb) {
	$l(param1);$l(param2);$l(cb);
	cb("'you sent up " + param1 + " and " + param2 + "'");
}

function $l(m) {
	fs.appendFile("nodeLog.txt", m + "\n", function(err){});
}