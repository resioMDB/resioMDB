// random string: used for viewerURL, socket rooms, LocalStorage Hash Key
function uniquePollId(){
    var result = [];
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");

    for( var i=0; i < 12; i++ )
        result.push(possible[Math.floor(Math.random() * possible.length)]);

    return result.join("");
}

// encrypted string: print access to graphs, socket rooms

modules.export = uniquePollId; 
	