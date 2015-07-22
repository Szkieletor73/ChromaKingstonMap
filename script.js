var territoryAlias;
var name;
var i = 0;

window.onload=function() {
	var customizer = document.getElementById('customizer');
	$(sendTroops).hide();
	$(customizer).hide();
	toggleConnections();
	var reddit = new Snoocore({
		userAgent: '',
		oauth: {
		type: 'implicit',
		key: 'dSfzRg3e3-FLLw',
		redirectUri: 'http://localhost:8000',
		scopes: ['read']
		}
	});
	reddit('/r/chromanauts/about').get().then(function(result) {
		sidebar = result.data.description;
		owner = sidebar;
		owner = owner.replace(/\bfieldofkarmicglory\b/g, '');
		owner = owner.replace(/\/r\//g, '');
		owner = owner.replace(/[^\w\s']/gi, '')
		landOwnership();
		document.getElementById("name").innerHTML = "Chroma/Kingston Interactive Map";
		document.getElementById("description").innerHTML = "Click a territory to see it's description, ownership and a link for >lead message!";
	}).catch(console.error);
};

function customize() {
	var x = document.getElementById("customForm");	
	color = x.elements[0].value;
	size = x.elements[1].value;
	
	$('.s5').css('fill', color);
	$('.s5').css('font-size', size + "px");
}

function namer(a) {
	subreddit = "none";
	switch (a) {
		case "cotedazur":
		  name = "Cote d'Azur";
		  description = "The great metropolis of Côte d'Azur is the biggest city in Chroma and it is said that it's a city that never sleeps. Despite it's active nightlife, Cote has a huge population and maintains vital research and manufacture organizations that contribute to the territories already strong economy. The city is built on the ruins of Periopolis, the city that sunk during the great catacalysm. While most of the old city is submerged, new land emerged to the south that was quickly settled.<br>The city is the most western point of mainland chroma and is for that reason also an extremely important trade hub and strategical position.";
		  subreddit = "Cote_dAzur";
		  break;
		case "sapphire":
		  name = "Sapphire District";
		  description = "The Sapphire District, a peaceful territory that has also seen the shades of war. Originally home to a few shamanic tribes and a population of blue flying boars, but now all kinds of people live here. The remainder of the tribes are found in the quiet South, while technological progress is made in the North. Ventus, the capital, is located in the middle of the territory. Fort Lightning, PAF headquarters, is also located in the district. Most people earn their money as farmers or fisherman, but the production of Periwinkle meth has also greatly contributed to the wealth in the Sapphire District.";
		  subreddit = "SapphireDistrict";
		  break;
		case "moors":
		  name = "Turquoise Moors";
		  description = "Known as the wine capitol of Chroma, Turquoise Moors is home to several beautiful wineries as well an amazing landscape. In addition, the capital city of Laedon is home to a current castle restoration project.";
		  subreddit = "TurquoiseMoors";
		  break;
		case "amethyst":
		  name = "Amethyst Cove";
		  description = "A jewel of the Periwinkle kingdom, the vibrant territory of Amethyst Cove is home to many crystal mines, smoky mountain ranges, lush forests, frontier tundra and sandy beaches. The capital is Amethyst City, a seaport and home to the Lt. Governor. The Governor lives on an island in the middle of Aurora Lake, the largest insular body of water in the territory. The island also houses the HQ for the clandestine Periwinkle Bureau of Intelligence. ";
		  subreddit = "amethystcove";
		  break;
		case "kyanite":
		  name = "Kyanite Cove";
		  description = "The Cove is considered one of the harshest territories in the Periwinkle Kingdom. The land has remained mostly untouched due to the weather discouraging the average settler to live there. Kyanite Cove is inhabited by two different tribes, 'Les Barbus' and 'Les Visages Doux.'<br>Les Barbus are the settlers of the north, and are quite apparent of it. The Barbus are known by their iconic bushy beards and thick hide clothing. The peoples of this tribe have settled mostly amongst the coastline, and heavily rely on fishing for their main source of food. During the Spring and Summer, they plant a vast number of quick harvest crops in order to balance out their diets.<br>Les Visages Doux are the settlers of the south, and are fairly different than their fellow Kyanitians. The Visages Doux are much more limber people, and are also beardless. They wear more cotton cloths, since they do not live in as harsh of a climate as Les Barbus. Les Visages Doux are regularly mistaken as part of Amethyst Cove citizens, since the boarder lands are very similar. But the Visages Doux enjoy reminding people of which Cove they are in. Les Visages Doux are much less reliant on fish than their northern friends. The weather permits them to farm much longer than in the north, as well as the large forests provide an excellent range of meats and herbs.<br>Even though both tribes are different, they both take pride in the land that they call home. They are united under the Frozen Petal and are willing to go to death for each other, and fellow periwinkle's.";
		  subreddit = "kyanitecove";
		  break;
		case "periwingrove":
		  name = "Periwin Grove";
		  description = "Periwin Grove has long been the center of military strategy, inhabiting the portion of the map most interconnected in Chroma. Due to it's otherworldly connections and extraterrestrial proclivities, of which many secrets are still unexplained and many more undiscovered, the Grove has long harbored strange and magnificent creatures, such as the majestic Sasquatch tribes and the elusive Satyr of the Hidden Realm. Within Periwin Grove exists doorways to other dimensions, which have been in use, though no one is sure of their extent. At one point, the entirety of Periwin Grove 'blinked' out of existence and into another dimension, along with its Governor, only to return when Periwinkle needed it most. Currently, the Lt. Governor is been taken into one of these dimensional voids. We await his return with whatever secrets and treasures the Grove has decided to bless Periwinkle with, as it has done in the past. Because of these supernatural happenings, the Grove is the subject of much lore and prophesy, and considered sacred to many.";
		  subreddit = "Periwin_Grove";
		  break;
		case "newcerulean":
		  name = "New Cerulean";
		  description = "Nestled high in the mountains New Cerulean has faithfully served Periwinkle as an important fortress territory. This land is rich in history.";
		  subreddit = "newcerulean";
		  break;
		case "iris":
		  name = "Fort Iris";
		  description = "Fort Iris is home to the beautiful range of mountains, forest, and prairies, along with world class resorts and tourist attractions. With beautiful, natural, landscapes, a variety of flora and fauna that are native to only the region, and urban hotspots there is a little something for everyone. Fort Iris is also the best fort. ";
		  subreddit = "FortIris";
		  break;
		case "pervinca":
		  name = "Pervinca";
		  description = "Pervinca is one of the largest territories and the naval heart of the Periwinkle Kingdom, both militarily and commercially. It has a deep and rich history. The most famous and largest Periwinkle naval fleet is located in the capitol of New Norfolk. Home to many of the merchant shipping companies, such as Periwinkle Maritime Enterprises, it is the home for much of the major trade throughout Chroma.<br>Pervinca also has most of the the major ship building yards in the Kingdom, supplying the military with the ships that they need to get the job done. Besides maritime shipping and ship building, Pervinca has a bustling tourist industry, with some of the most pristine and largest beachfront in all of Chroma, and with many resorts, islands, and cities that draw flocks of tourists from all around the globe every year. ";
		  subreddit = "Pervinca";
		  break;
		case "raiders":
		  name = "Raider's Pinnacle";
		  description = "Lorem Ipsum";
		  subreddit = "RaidersPinnacle";
		  break;
		case "nord":
		  name = "Nordwalder";
		  description = "Lorem Ipsum";
		  subreddit = "Nordwalder";
		  break;
		case "chrome":
		  name = "Chromehenge";
		  description = "Lorem Ipsum";
		  subreddit = "chromehenge";
		  break;
		case "snoo":
		  name = "Snooland";
		  description = "Nestled in the center of chroma, a land with a rich and tumultuous history of being both a former Orangered Rally point before being liberated by Periwinkle Forces, Snooland is the current home of the <a href='http://reddit.com/r/GoodMorningPeriwinkle'>Good Morning Periwinkle</a> main studio.<br>It is also home to a significant amount of agriculture, but with a building technological sector. The 3rd Snooland Rangers, formerly known as the 3rd Recon Division are based here.";
		  subreddit = "snooland";
		  break;
		case "marsh":
		  name = "Midnight Marsh";
		  description = "Home to the Rooalt and Mako tribes, the Midnight Marsh has recently been united under Gov. Eliminioa and his trusty Lt. Gov. Meshugganah. Now home to a budding research and development community, the Midnight Marsh seeks to become the Periwinkle Kingdom's leader in theoretical sciences and magical research. With an ambitious university program in the works, the Marsh is seeking innovative young scientists to fill its ranks.";
		  subreddit = "MidnightMarsh";
		  break;
		case "vipers":
		  name = "Viper's Peak";
		  description = "Viper's Peak is the wild volcanic land, home to the biggest and most feared volcano - The Viper's Peak. While parts of the land remain to insane adrenaline junkies, who like extreme heat and wear fire proximity suits on a daily basis (I'm talking to you, Blue Pyros), the edges are becoming more and more lushous and green with every sort of tree or weed imaginable. Fed by the endless supply of nutrients in the recently erupted volcano's ash and lava, the nature is recovering quickly from the tough blow. It's still pretty hot though so don't forget to pack swimming trunks. Often the warm turquoise water is the only place to hide from the heat.";
		  subreddit = "VipersPeak";
		  break;
		case "bezold":
		  name = "Republic of Bezold";
		  description = "An industrial powerhouse, the protected harbor and deep bay provide an excellent naval base and trade hub in the southern hemisphere, though nowhere near as large or important as Pervinca. The Republic's real claim to fame is its position as a technological leader in Chroma, attracting innovators far and wide. Many a visitor has been awed by the great steamships and dirigibles filling the factory-lined skies above the capital city.<br>Though technically a neutral province under the longstanding protection of the Periwinkle Kingdom, many citizens have began to identify as Periwinkle citizens, culminating in the Ducal Guard being reformed into the Bezold Allied Expeditionary Rangers, now an official unit in the Periwinkle Royal Armed Forces.";
		  subreddit = "RepublicofBezold";
		  break;
		case "iow":
		  name = "Island of Warriors";
		  description = "Lorem Ipsum";
		  subreddit = "IslandOfWarriors";
		  break;
		case "tento":
		  name = "Tentorahogo";
		  description = "Lorem Ipsum";
		  subreddit = "Tentorahogo";
		  break;
		case "antris":
		  name = "Caerulus Antris";
		  description = "Lorem Ipsum";
		  subreddit = "AreusAntris";
		  break;
		case "pasto":
		  name = "Pasto Range";
		  description = "Lorem Ipsum";
		  subreddit = "Pasto_Range";
		  break;
		case "vu":
		  name = "Viridian Union";
		  description = "With a rich history, great landscape, and relaxed atmosphere, it's no surprise that so many know Vermillion-Viridian Union (mostly shortened to Viridian Union or simply VU) as <span class='italic'>The jewel of Southern Chroma</span>!<br>Chroma's number one exporter of idiotic soft drinks and tea is also the second largest exporter of alcoholic drinks in the continent (after Turquoise Moors), As well as boasting an aeronautical industry almost as large as Sapphire District, VU's energy industry is also very strong, with the territory supports numerous oilfields and solar plants.<br>Head to one of the cities and you'll find beautiful architecture and a wide array of flashy vehicles, as well as many of Chroma's most famous bars and clubs, offering the finest in cocktails, draught beer, and Sirop (Boasting flavours such as lemon, lime, coconut, and even bamboo). If wildlife is what you want, the deserts and jungles here are some of the largest habitats of tropical animals in chroma.<br>Despite the territory's unwillingness to abandon cassette tapes, vinyl, excessive use of the words 'Tangy', 'Radical', 'Groovy' and 'Dude', fins on cars, neon colours, formica, neon, powdered soft drinks, and pastel suits, the territory is home to vast opportunity - as any resident will tell you, in Viridian Union, the Sky's the Limit!<br><a href='https://i.imgur.com/z4egYzQ.png'>Map of the territory.</a>";
		  subreddit = "VermillionUnion";
		  break;
		case "daja":
		  name = "Metropolis Daja";
		  description = "Lorem Ipsum";
		  subreddit = "MetropolisDaja";
		  break;
		case "aegis":
		  name = "Aegis";
		  description = "Lorem Ipsum";
		  subreddit = "Aegis_Imperial";
		  break;
		case "londo":
		  name = "Londo Lazuli";
		  description = "Lorem Ipsum";
		  subreddit = "OrangeLondo";
		  break;
		case "newperiopolis":
		  name = "New Periopolis";
		  description = "Old Oraistedearg";
		  subreddit = "Oraistedearg";
		  break;
		case "novum":
		  name = "Novum Persarum";
		  description = "Lorem Ipsum";
		  subreddit = "NovumPersarum";
		  break;
		case "mozter":
		  name = "Mozter Island";
		  description = "Like Chalkowa, this island was populated by long-gone ancient peoples. Their only remains are ancient ruins and hundreds of large stone fox statues scattered over the islands. Nowadays, the island is largely uninhabited, populated by many species of wild animals, including many species of foxes, and it’s vast jungles and untouched beauty is a popular attraction to tourists. Though it has little development, the island occupies an strategic position at the north-west tip of the archipelago. ";
		  break;
		case "dutchmans":
		  name = "Dutchman's Grounds";
		  description = "Like the Bermuda Triangle of Chroma. It was once a bit of ocean where there were a ton of shipwrecks. The S2 shifting of the world's plates caused that land to shift and move, resulting in its movement above water as a large archipelago. Wrecks are buried, half buried, and above the ground, with its land consisting of miles and miles of missing boats, ships, airplanes, treasure, and sailors.";
		  break;
		case "nayemnik":
		  name = "Nayemnik Oblast";
		  description = "The Nayemnik Oblast was settled by Viperian veterans from the Winter Revolution who were not satisfied with the Treaty that was signed between the Former Mage rulers of Chroma and the revolutionary leaders following the total rule of Mages. The Nayemnik Oblast is heavily industrialised and has strong links to many Military development companies, such as Kalash/Nikov, Militov, LockMart, SouthRop, with many more moving to the location in recent years due to the proximity to future customers (namely a certain Orange empire as well as others). It is also a major source of Private Military contractors, many rivaling domestic armies of some countries around the planet. There is a saying that goes around the state, 'If its kills, It was probably built here'. But true to their name, they will fight for the highest bidder, or whoever is controlling them. It is a major center for the Followers of Gabriel, and is the current main base for the organisation to preserve centrality to its Orangered and periwinkle followers and to maintain a sense of neutrality in the current climate.";
		  break;
		case "devilsgrasp":
		  name = "Devil's Grasp";
		  description = "The island is covered in jungle, lots of trees under a foot in thickness. Between the trees there is brush and thickets with thorns growing about five feet up from the ground. There is an old ghost town along the shoreline so old that trees have reclaimed the space and most of the buildings have fallen down. There are the rotting remains of an old dock with only the posts sticking out the water. Up on the highest point of the island on a hill stands the outline of a worn building or tower.";
		  break;
		case "avernus":
		  name = "Avernus";
		  description = "Avernus is known for it’s vast expanses of deserts and arid land, and has less than 10 cm of rainfall per year. The province has a prominent lake in it, which amongst many of the myths and legends of the Avernusians are believed to be the gateway to the underworld. Combined with the abnormally low levels of precipitation, fresh water -especially that of Lake Avernus- is considered to be a valued commodity, and is treated as both as a key part of ceremonial rites and as a form of currency.";
		  break;
		case "emerald":
		  name = "Emerald Heights";
		  description = "The territory of Emerald Heights is split up into three islands. The largest of the islands is where the territory gets its name. Covering the South and Southwest coasts of the island is a tall cliff. What is truly unique about the cliff faces is the incredibly high concentration of Actinolite rock and olivines minerals, giving the cliffs a distinct greenish hue and hinting and a geologically interesting history. Other notable features of this island are the twin mountains on the northern half and the oak forests covering the rest of the island. The island is mostly uninhabited except for a small mining town. The other two islands are much more densely populated. The smallest island has become a major port in the newly discovered area, with several shipwrights coming from the Chroman lands to start new enterprises. Because of the easy access to shipping routes, heavy industry and high-tech companies have also set up shop on this island. Most of the people here would prefer the status quo of peace, but production has ramped up on all fronts on this island with the threat of impending war. The third island is the eastern-most island of Emerald Heights, and was designed to be a tourist destination. While the resorts flourished for a while, business has slowed in contrast to their friends in the rest of the territory.";
		  break;
		case "anglona":
		  name = "Anglona";
		  description = "The island of Anglona is relatively uninhabited. With the exception of a few small towns and cities to the south, the land's huge savannahs take up most of it’s area. Anglona’s strategic position and largely flat landscape makes it a prime location for air bases, and is expected to be a vital target in any war between the Orangered and Periwinkle.";
		  break;
		case "rpck":
		  name = "Republika Planina Crna Kamen";
		  description = "The Republika Planina Crna Kamen (English: Black Stone Mountain Republic) is an advanced independent nation, whose citizens mainly speak Croatian. Though it values its neutrality, the RPCK is willing to ally with other nations against any force they see as a threat to their sovereignty. It has a population of around 4 million people and a small but well-trained military. The main bulk of the RPCK’s population is in the south, where large areas of fertile, tropical farm land exists. The north of the nation is mainly used for larger ranches. Although the RPCK has a relatively small population, it has growing industrial strength and is a key economic power in the region. ";
		  break;
		case "chalkowa":
		  name = "Chalkowa";
		  description = "A massive ancient city from a long dead civilization that spans almost the entire territory. The city is in near perfect condition and the residents appear to have simply vanished without warning. Merchant stalls sit filled, clothes are folded within the houses and offerings to their god remains in the temples. Their massive stone pyramids are filled with advanced mathematical glyphs within and the ancient civilization appears to be highly advanced for its time. ";
		  break;
		case "tai":
		  name = "Tallian Allied Islands";
		  description = "The TAI are a multitude of biologically unique islands, species are found on one island only. The Tallian Islands are home to many endemic species, unlike any ever seen in Chroma. The people there are fiercely opposed to all outsiders and despise those who violate their neutrality. They're openly hostile to people from other islands in their own internal alliance. They merely tolerate them in times of war and breached neutrality, following a 'The enemy of my enemy is my friend' mentality. ";
		  break;
		case "os":
		  name = "O'Shaugnessey";
		  description = "Lorem Ipsum";
		  break;
		case "terra":
		  name = "Terra Archipelago";
		  description = "Lorem Ipsum";
		  break;
		case "reddoran":
		  name = "Reddoran Bay";
		  description = "Hlaalu Bay is right this way, muthsera";
		  break;
		case "regimonium":
		  name = "Regimonium";
		  description = "Lorem Ipsum";
		  break;
		case "gray":
		  name = "The Gray Area";
		  description = "Lorem Ipsum";
		  break;
		case "redshire":
		  name = "Red Shire";
		  description = "Lorem Ipsum";
		  break;
		case "winterstar":
		  name = "Winterstar";
		  description = "Lorem Ipsum";
		  break;
		case "redsprings":
		  name = "Red Springs";
		  description = "Lorem Ipsum";
		  break;
		case "carnation":
		  name = "Carnation Canyon";
		  description = "Lorem Ipsum";
		  break;
		case "delasol":
		  name = "Plateau De La Sol";
		  description = "Lorem Ipsum";
		  break;
		case "vuoria":
		  name = "Vuoria";
		  description = "Lorem Ipsum";
		  break;
		case "frostplains":
		  name = "Frost Plains";
		  description = "Lorem Ipsum";
		  break;
		case "vedder":
		  name = "Vedder";
		  description = "Lorem Ipsum";
		  break;
		case "aliquam":
		  name = "Aliquam";
		  description = "Lorem Ipsum";
		  break;
		case "tangerium":
		  name = "Tangerium";
		  description = "Lorem Ipsum";
		  break;
		case "cinnabar":
		  name = "Cinnabar Cape";
		  description = "Lorem Ipsum";
		  break;
		case "aurora":
		  name = "Aurora";
		  description = "Lorem Ipsum";
		  break;
		case "tango":
		  name = "Tango Fields";
		  description = "Lorem Ipsum";
		  break;
		case "hibiscus":
		  name = "Hibiscus Vallyer";
		  description = "Lorem Ipsum";
		  break;
		case "scarlata":
		  name = "Scarlata Pinpinela";
		  description = "Lorem Ipsum";
		  break;
		case "naranja":
		  name = "San Naranja";
		  description = "Located in Kingston's south, a mix of tropical wilderness and huge metropolitan areas take up the small territory of San Naranja. Home to a proud people, this land holds an important military position as the home of the ONAF's Naranja Fleet. Operating out of this territory, Naranja Fleet's naval aviators are some of the best in the world. Under its infamous banner are fighter squadrons, bomber units, spy-planes, and even routine military transport aircraft. This branch of the Navy prides itself on its fighting spirit and helps make the task of invading Kingston, or defending lands from Orangered invaders, a difficult one.<br>While areas in the north of San Naranja remain untouched by humans, it is home to three major cities: Naranja City at the southern tip, Anaranjado to the west, and Orangeport facing east. One of the first territories founded by Orangered rescue boats, it remains a vital part of the Orangered Nation today.";
		  break;
		case "zeehaven":
		  name = "Zeehaven";
		  description = "Lorem Ipsum";
		  break;
		case "fenix":
		  name = "Fenix";
		  description = "Orangered Capital";
		  break;
		case "vulcan":
		  name = "Vulcan's Domain";
		  description = "Lorem Ipsum";
		  break;
		case "rubycliffs":
		  name = "Ruby Cliffs";
		  description = "Lorem Ipsum";
		  break;
		case "daybreak":
		  name = "Daybreak Desert";
		  description = "Lorem Ipsum";
		  break;
	  }
}

function landOwnership() {
	$("#layer2").each(function(i,elem)
	{
		$(elem).find("path").each(function(i,child)
		  {
			current = $(child).attr('id');
			namer(current);
			name = name.toLowerCase();
			if (name == "republika planina crna kamen") {
				name = "rpck";
			};
			
			conditional = owner.match(name + "  Periwinkle");
			if (conditional == name + "  Periwinkle") {
				faction = "Periwinkle";
				$(child).attr('class','periwinkle');
			} else {
				conditional = owner.match(name + "  Neutral");
				if (conditional == name + "  Neutral") {
					faction = "Neutral";
					$(child).attr('class','neutral');
				} else {
					faction = "Orangered";
					$(child).attr('class','orangered');
				};
			}
			
			conditional = owner.match(name + "  " + faction + "  Disputed");
			if (conditional == name + "  Neutral  Disputed" || conditional == name + "  Periwinkle  Disputed" || conditional == name + "  Orangered  Disputed") {
				$(child).attr('class','disputed'+faction);
			}
		  });
	});
};

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
			
			/*if($(child).attr('class') == 'hidden'){
					$(child).attr('class','s5');
					$(document.getElementById('toggleCustomizer')).attr('class','linkContainer floatRight');
				}
				else{
					$(child).attr('class','hidden');
					$(customizer).attr('class','hidden');
					$(document.getElementById('toggleCustomizer')).attr('class','hidden');
				}*/
		  });
	});
}

function toggleCustomizer() {
	$(customizer).fadeToggle('fast', 'linear');
	
	//if($(customizer).attr('class') == 'hidden'){
		//$(customizer).attr('class','');
	/*}
		else{
			$(customizer).attr('class','hidden');
		}*/
};

function toggleHelp() {
	if(i == 1) {
		$(help).animate({
			top: '-5000%'
		});
		i = 0;
	}
	else {
		$(help).animate({
			top: '40px'
		});
		i = 1;
	}
}

function showLink() {
	var sector = $("#sector").val();
	if (name == "rpck") {
		name = "republika planina crna kamen";
	};
	if(territoryAlias == "undefined") {}
	else{
		if (sector == 0) {
			document.getElementById("links").innerHTML = "<a href='http://www.reddit.com/message/compose/?to=chromabot&subject=lead&message=lead%20all%20to%20*," + territoryAlias + "'>Click to send your troops to <span class='capitals'>" + name + "</span>!</a>";
			}
			else {
			document.getElementById("links").innerHTML = "<a href='http://www.reddit.com/message/compose/?to=chromabot&subject=lead&message=lead%20all%20to%20*," + territoryAlias + "%23" + sector + "'>Click to send your troops to <span class='capitals'>" + name + "</span>!</a>";
			}
	}
}

function display(territory) {
	$(sendTroops).show();
	territoryAlias = territory;
	owner = "neutral";
	namer(territory);
	
	if(subreddit != "none"){
		document.getElementById("name").innerHTML = "<a href=http://reddit.com/r/" + subreddit + ">" + name + "</a>";
		document.getElementById("description").innerHTML = "<span class='hintText'>This territory has a museum subreddit! Click the name to go there.</span><br>" + description;
	}
	else{
		document.getElementById("name").innerHTML = name;
		document.getElementById("description").innerHTML = description;
	};
	
	if(typeof currentId !== 'undefined'){
		removedClass = currentDisplay.getAttribute('class').replace(new RegExp('(\\s|^)' + 'active' + '(\\s|$)', 'g'), '$2');
		currentDisplay.setAttribute('class',removedClass);
	}
	currentId = '#svg2 #layer2 #' + territory;
	currentDisplay = document.querySelector(currentId);
	currentDisplay.setAttribute('class',currentDisplay.getAttribute('class') + ' ' + 'active');
	
	showLink();
	
	name = name.toLowerCase();
	if (name == "republika planina crna kamen") {
		name = "rpck";
	};
	
	owner = sidebar;
	owner = owner.replace(/\bfieldofkarmicglory\b/g, '');
	owner = owner.replace(/\/r\//g, '');
	owner = owner.replace(/[^\w\s']/gi, '')

	conditional = owner.match(name + "  Periwinkle");
	if (conditional == name + "  Periwinkle") {
		faction = "  Periwinkle";
		document.getElementById("ownership").innerHTML = "This land is currently under Periwinkle control.";
	} else {
		conditional = owner.match(name + "  Neutral");
		if (conditional == name + "  Neutral") {
			faction = "  Neutral";
			document.getElementById("ownership").innerHTML = "This land is currently neutral.";
		} else {
			faction = "  Orangered";
			document.getElementById("ownership").innerHTML = "This land is currently under Orangered control.";
		};
	}
	
	conditional = owner.match(name + faction + "  Disputed");
		if (conditional == name + "  Neutral  Disputed" || conditional == name + "  Periwinkle  Disputed" || conditional == name + "  Orangered  Disputed") {
			document.getElementById("ownership").innerHTML = document.getElementById("ownership").innerHTML + "<br>Armies are preparing for battle in this land.";
		}
};