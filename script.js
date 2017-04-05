var i = 0;
var chromabot;

window.onload=function() {
	var customizer = document.getElementById('customizer');
	$(sendTroops).hide();
	$(customizer).hide();
	toggleConnections();

	//grab chromabot as json object, from bot's data
	chromabot = (function () {
	  var json = null;
	  $.ajax({
	      'async': false,
	      'global': false,
	      'url': "http://faceless-games.com/chromabot/report.json",
	      'dataType': "json",
	      'success': function (data) {
	          json = data;
						document.getElementById("name").innerHTML = "Chroma Interactive Map";
						document.getElementById("description").innerHTML = "Click a territory for details and a link for >lead message!";
	      }
	  });
	  return json;
	})();
	initializeTerritories();
};

function customize() {
	var x = document.getElementById("customForm");
	color = x.elements[0].value;
	size = x.elements[1].value;

	$('.s5').css('fill', color);
	$('.s5').css('font-size', size + "px");
}


function toggleDebris() {
	$("#layer3").each(function(i,elem)
	{
		$(elem).find("path").each(function(i,child)
		  {
			if($(child).attr('class') == 'hidden'){
				$(child).attr('class','s0');
				}
				else{$(child).attr('class','hidden');}
		  });
	});
};

function toggleConnections() {
	$("#layer1").each(function(i,elem)
	{
		$(elem).find("path").each(function(i,child)
		  {
			if($(child).attr('class') == 'hidden'){
				$(child).attr('class','s4');
				}
				else{$(child).attr('class','hidden');}
		  });
	});
}

function toggleNames() {
	$("#layer4").each(function(i,elem)
	{
		if($(customizer).is(":visible")) {
			$(customizer).fadeToggle('fast', 'linear');
		}
		$(document.getElementById('toggleCustomizer')).fadeToggle('fast', 'linear');
		$(elem).find("text").each(function(i,child)
		  {
			$(child).fadeToggle('fast', 'linear');
		  });
	});
}

function toggleCustomizer() {
	$(customizer).fadeToggle('fast', 'linear');
};

function toggleHelp() {
	$(help).fadeToggle('fast', 'linear');
	$(blackbox).fadeToggle('fast', 'linear');
}

function initializeTerritories() {
	var ownershipColor;
	$.each(chromabot.regions, function(key, value){
		//alert(value.name);
		if(value.owner == 0){
			ownershipColor = 's1'; //crimson
			if(value.battle != "none"){ownershipColor += " disputedCrimson"} //battle tint

		}else{if(value.owner == 1){
			ownershipColor = 's3'; //emerald
			if(value.battle != "none"){ownershipColor += " disputedEmerald"} //battle tint

		}else{
			ownershipColor = 's2'
			if(value.battle != "none"){ownershipColor += " disputedNeutral"} //battle tint
		}} //neutral


		document.getElementById(key).setAttribute('class', /*document.getElementById(key).getAttribute('class') + */ownershipColor);
	});
}

function showLink(territory, owner, battle) {
	var sector = $("#sector").val();
	if (sector == 0) {
		document.getElementById("links").innerHTML = "<a href='http://www.reddit.com/message/compose/?to=chromabot&subject=Press%20Send%20to%20execute%20the%20command&message=lead%20all%20to%20*," + territory + "'>Click to send your troops to <span class='capitals'>" + territory + "</span>!</a>";
		}
		else {
		document.getElementById("links").innerHTML = "<a href='http://www.reddit.com/message/compose/?to=chromabot&subject=Press%20Send%20to%20execute%20the%20command&message=lead%20all%20to%20*," + territory + "%23" + sector + "'>Click to send your troops to <span class='capitals'>" + territory + "</span>!</a>";
		}
	if(owner == "0"){
		owner = "Crimson";
	}else{if(owner == "1"){
		owner = "Emerald"
	}else{owner = "no one"}}

	document.getElementById("description").innerHTML = "<span class='capitals'>" + territory + "</span> is owned by " + owner + ".";
	if(battle != "none"){
		document.getElementById("description").innerHTML += "<br>This territory is currently under siege!";
	}
}

function display(territory) {
	$(sendTroops).show();
	var current = chromabot.regions[territory];
	showLink(current.name, current.owner, current.battle);
	document.getElementById("sector").setAttribute("onChange", "showLink('"+ current.name + ", " + current.owner + ", " + current.battle + "')");
};
