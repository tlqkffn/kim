//	HYPE.documents["yj"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "yj.hyperesources";
	var documentName = "yj";
	var documentLoaderFilename = "yj_hype_generated_script.js";
	var mainContainerID = "yj_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_160 == "undefined") {
		if(typeof window.HYPE_160_DocumentsToLoad == "undefined") {
			window.HYPE_160_DocumentsToLoad = new Array();
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=160';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_160();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",N:"i",f:"d",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",X:"i",aL:"i",A:"c",aZ:"i",Y:"bM",B:"c",bK:"f",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"10":{n:"f.png",p:1},"2":{n:"3.jpg",p:1},"3":{n:"4.jpg",p:1},"11":{n:"s.png",p:1},"4":{n:"5.jpg",p:1},"5":{n:"6.jpg",p:1},"12":{n:"%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%20%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%8B%E1%85%B3%E1%86%B7-1.png",p:1},"6":{n:"7.jpg",p:1},"7":{n:"8.jpg",p:1},"0":{n:"1.jpg",p:1},"8":{n:"r.png",p:1},"1":{n:"2.jpg",p:1},"9":{n:"l%20%E1%84%89%E1%85%A1%E1%84%87%E1%85%A9%E1%86%AB.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"42":{o:"content-box",h:"12",a:0,x:"visible",q:"100% 100%",b:285,j:"absolute",r:"inline",aA:[{type:1,transition:6,sceneSymbol:1}],k:"div",c:640,d:273.91422121896159,z:"2",e:"0.000000",aP:"pointer"},"41":{o:"content-box",w:"",h:"11",a:191,x:"visible",q:"100% 100%",b:548,j:"absolute",r:"inline",aA:[{type:1,transition:6,sceneSymbol:1}],k:"div",c:258,d:129,z:"1",e:"0.000000",aP:"pointer"},"43":{aV:8,w:"\uadf8\ub0e5 \ubcd1\ub9db\uc73c\ub85c \ub9cc\ub4e4\uc5b4\ubcf8",a:185,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"3",k:"div",b:195,aT:8,aS:8,t:24,e:"0.000000",aU:8,G:"#000000"}},n:"0",T:{kTimelineDefaultIdentifier:{d:1.15,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:1.15,i:"e",e:"1.000000",s:"0.000000",o:"43"},{f:"2",t:0,d:1.15,i:"e",e:"1.000000",s:"0.000000",o:"42"},{f:"2",t:0,d:1.15,i:"e",e:"1.000000",s:"0.000000",o:"41"}],f:30}},o:"1"},{x:1,p:"600px",c:"#FFFFFF",v:{"18":{o:"content-box",h:"8",a:588,x:"visible",q:"100% 100%",b:469,j:"absolute",r:"inline",aA:[{type:1,transition:5,sceneSymbol:1}],k:"div",c:60,d:60,z:"2",e:"0.000000",aP:"pointer"},"10":{o:"content-box",h:"0",x:"visible",a:-48,q:"100% 100%",b:-40,j:"absolute",r:"inline",c:735,k:"div",z:"1",d:1039,e:"0.000000"},"19":{o:"content-box",h:"9",a:-5,x:"visible",q:"100% 100%",b:469,j:"absolute",r:"inline",aA:[{type:1,transition:4,sceneSymbol:2}],k:"div",c:60,d:60,z:"3",e:"0.000000",aP:"pointer"}},n:"1",T:{kTimelineDefaultIdentifier:{d:2,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:2,i:"e",e:"1.000000",s:"0.000000",o:"18"},{f:"2",t:0,d:2,i:"e",e:"1.000000",s:"0.000000",o:"19"},{f:"2",t:0,d:0.09,i:"e",e:"1.000000",s:"0.000000",o:"10"}],f:30}},o:"2"},{x:2,p:"600px",c:"#FFFFFF",v:{"21":{o:"content-box",h:"8",a:588,x:"visible",q:"100% 100%",b:469,j:"absolute",r:"inline",aA:[{type:1,transition:5,sceneSymbol:1}],k:"div",c:60,d:60,z:"2",e:"0.000000",aP:"pointer"},"22":{o:"content-box",h:"9",a:-5,x:"visible",q:"100% 100%",b:469,j:"absolute",r:"inline",aA:[{type:1,transition:4,sceneSymbol:2}],k:"div",c:60,d:60,z:"3",e:"0.000000",aP:"pointer"},"11":{o:"content-box",w:"",h:"1",a:-48,x:"visible",q:"100% 100%",b:-40,j:"absolute",r:"inline",c:736,k:"div",z:"1",d:1040,e:"1.000000"}},n:"2",T:{kTimelineDefaultIdentifier:{d:2,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:2,i:"e",e:"1.000000",s:"0.000000",o:"22"},{f:"2",t:0,d:2,i:"e",e:"1.000000",s:"0.000000",o:"21"}],f:30}},o:"3"},{x:3,p:"600px",c:"#FFFFFF",v:{"12":{o:"content-box",w:"",h:"2",a:-39,x:"visible",q:"100% 100%",b:-27,j:"absolute",r:"inline",c:717,k:"div",z:"1",d:1013,e:"1.000000"},"23":{o:"content-box",h:"8",a:588,x:"visible",q:"100% 100%",b:469,j:"absolute",r:"inline",aA:[{type:1,transition:5,sceneSymbol:1}],k:"div",c:60,d:60,z:"2",e:"0.000000",aP:"pointer"},"24":{o:"content-box",h:"9",a:-5,x:"visible",q:"100% 100%",b:469,j:"absolute",r:"inline",aA:[{type:1,transition:4,sceneSymbol:2}],k:"div",c:60,d:60,z:"3",e:"0.000000",aP:"pointer"}},n:"3",T:{kTimelineDefaultIdentifier:{d:2,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:2,i:"e",e:"1.000000",s:"0.000000",o:"23"},{f:"2",t:0,d:2,i:"e",e:"1.000000",s:"0.000000",o:"24"}],f:30}},o:"4"},{x:4,p:"600px",c:"#FFFFFF",v:{"26":{o:"content-box",h:"9",a:-5,x:"visible",q:"100% 100%",b:469,j:"absolute",r:"inline",aA:[{type:1,transition:4,sceneSymbol:2}],k:"div",c:60,d:60,z:"3",e:"0.000000",aP:"pointer"},"25":{o:"content-box",h:"8",a:588,x:"visible",q:"100% 100%",b:469,j:"absolute",r:"inline",aA:[{type:1,transition:5,sceneSymbol:1}],k:"div",c:60,d:60,z:"2",e:"0.000000",aP:"pointer"},"13":{o:"content-box",w:"",h:"3",a:-40,x:"visible",q:"100% 100%",b:-29,j:"absolute",r:"inline",c:719,k:"div",z:"1",d:1017,e:"1.000000"}},n:"4",T:{kTimelineDefaultIdentifier:{d:2,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:2,i:"e",e:"1.000000",s:"0.000000",o:"26"},{f:"2",t:0,d:2,i:"e",e:"1.000000",s:"0.000000",o:"25"}],f:30}},o:"5"},{x:5,p:"600px",c:"#FFFFFF",v:{"27":{o:"content-box",h:"8",a:588,x:"visible",q:"100% 100%",b:469,j:"absolute",r:"inline",aA:[{type:1,transition:5,sceneSymbol:1}],k:"div",c:60,d:60,z:"2",e:"0.000000",aP:"pointer"},"28":{o:"content-box",h:"9",a:-5,x:"visible",q:"100% 100%",b:469,j:"absolute",r:"inline",aA:[{type:1,transition:4,sceneSymbol:2}],k:"div",c:60,d:60,z:"3",e:"0.000000",aP:"pointer"},"14":{o:"content-box",h:"4",x:"visible",a:-38,q:"100% 100%",b:-26,j:"absolute",r:"inline",c:715,k:"div",z:"1",d:1011,e:"1.000000"}},n:"5",T:{kTimelineDefaultIdentifier:{d:2,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:2,i:"e",e:"1.000000",s:"0.000000",o:"28"},{f:"2",t:0,d:2,i:"e",e:"1.000000",s:"0.000000",o:"27"}],f:30}},o:"6"},{x:6,p:"600px",c:"#FFFFFF",v:{"15":{o:"content-box",w:"",h:"5",a:-42,x:"visible",q:"100% 100%",b:-32,j:"absolute",r:"inline",c:723,k:"div",z:"1",d:1023,e:"1.000000"},"29":{o:"content-box",h:"8",a:588,x:"visible",q:"100% 100%",b:469,j:"absolute",r:"inline",aA:[{type:1,transition:5,sceneSymbol:1}],k:"div",c:60,d:60,z:"2",e:"0.000000",aP:"pointer"},"30":{o:"content-box",h:"9",a:-5,x:"visible",q:"100% 100%",b:469,j:"absolute",r:"inline",aA:[{type:1,transition:4,sceneSymbol:2}],k:"div",c:60,d:60,z:"3",e:"0.000000",aP:"pointer"}},n:"6",T:{kTimelineDefaultIdentifier:{d:2,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:2,i:"e",e:"1.000000",s:"0.000000",o:"29"},{f:"2",t:0,d:2,i:"e",e:"1.000000",s:"0.000000",o:"30"}],f:30}},o:"7"},{x:7,p:"600px",c:"#FFFFFF",v:{"31":{o:"content-box",h:"8",a:588,x:"visible",q:"100% 100%",b:469,j:"absolute",r:"inline",aA:[{type:1,transition:5,sceneSymbol:1}],k:"div",c:60,d:60,z:"2",e:"0.000000",aP:"pointer"},"16":{o:"content-box",h:"6",x:"visible",a:-48,q:"100% 100%",b:-40,j:"absolute",r:"inline",c:735,k:"div",z:"1",d:1039,e:"1.000000"},"32":{o:"content-box",h:"9",a:-5,x:"visible",q:"100% 100%",b:469,j:"absolute",r:"inline",aA:[{type:1,transition:4,sceneSymbol:2}],k:"div",c:60,d:60,z:"3",e:"0.000000",aP:"pointer"}},n:"7",T:{kTimelineDefaultIdentifier:{d:2,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:2,i:"e",e:"1.000000",s:"0.000000",o:"31"},{f:"2",t:0,d:2,i:"e",e:"1.000000",s:"0.000000",o:"32"}],f:30}},o:"8"},{x:8,p:"600px",c:"#FFFFFF",v:{"34":{o:"content-box",h:"9",a:-5,x:"visible",q:"100% 100%",b:469,j:"absolute",r:"inline",aA:[{type:1,transition:4,sceneSymbol:2}],k:"div",c:60,d:60,z:"3",e:"0.000000",aP:"pointer"},"17":{o:"content-box",w:"",h:"7",a:-35,x:"visible",q:"100% 100%",b:-23,j:"absolute",r:"inline",c:710,k:"div",z:"1",d:1004,e:"1.000000"},"40":{o:"content-box",h:"10",a:260,x:"visible",q:"100% 100%",b:866,j:"absolute",r:"inline",aA:[{type:1,transition:7,sceneSymbol:3}],k:"div",c:120,d:60,z:"4",e:"0.000000",aP:"pointer"}},n:"8",T:{kTimelineDefaultIdentifier:{d:2,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:2,i:"e",e:"1.000000",s:"0.000000",o:"34"},{f:"2",t:0,d:2,i:"e",e:"1.000000",s:"0.000000",o:"40"}],f:30}},o:"9"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

