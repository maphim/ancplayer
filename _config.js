var ancObject = {

	params:{
		'width' :	'100%',
		'height':	'437',
		'player':	'http://sv1.bay68.com/player.swf',
		'proxy' :	'http://sv1.bay68.com/plugins/proxy.swf',
		'skin':		'http://sv1.bay68.com/skin/skewd/skewd.xml',
		'margin':	'15px',
		'position':	'right',
		'logo' :	'http://i2.minus.com/iSURJQxDYFDxH.png'	//http://i5.minus.com/ic1xKpRlZ91JY.png
	},

	id:{
		'data':		'anc_data',
		'player':	'anc_pl',
		'playing':	'anc_pa',
		'episode':	'anc_tp'
	},
	
	site:{
		'name':		'maphim.net',
		'key':		'3f756017c2fe8f603ac7b0be548d3945',
		'time':		'e504c4448dfd4071eca9a337f29ac77a',
		'regex':	 /maphim\.net\*/g
	},
	
	server:{
		'list_e': 'youtube#com,nhaccuatui.com,zing.vn,phimvang#org,phim47.com,dailymotion#com,twitvid#com,megafun.vn,clip#vn,vk.com,blip.tv,tudou.com,myspace.com,video.google.com,mp4:vod,docs#google#com,vimeo#com,xvideos.com,goo.gl,anc.mp4',
		
		'list_d':	'clip.vn,vk.com,vimeo.com,youtube.com,docs.google.com,dailymotion.com,twitvid.com,cyworld.vn,banbe.net,go.vn,mediafire.com,zippyshare.com,picasaweb.google.com,.mp4,.flv,.swf',
		
		'ecolor': '#FF9900',
		'becolor': '#B24026',
		'scolor': 'red'
	}
}

//Player

var s = document.createElement("script"); s.id = ancObject.site.name ; s.src = "https://raw.github.com/maphim/ancplayer/master/_encode.js?r="+Math.random();
document.getElementsByTagName("head")[0].appendChild(s);
