var conn = getDbConnection(connectionString);
var stmt = conn.createStatement();
var results = stmt.executeQuery(sqlQuery);
for (var i = 0; i < results.length; i++){
	//orint results[i];
}

getDbConnection(connectionString, function(err, conn){ //callbacks
	conn.createStatement(function(err,stmt){ //callbacks
			var results = stmt.executeQuery(sqlQuery);
			results.on("row",function(results){
			//print result //EventEmitter
		});
	});
});