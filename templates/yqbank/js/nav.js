// JavaScript Document
jq162(function(){
	jq162('ul.topnav li div:eq(4)').attr( 'style', 'left:-170px;'); 
	jq162('ul.topnav li div:eq(5)').attr( 'style', 'left:-70px;'); 
	jq162('ul.topnav li').mouseenter(function() { 
		if(jq162(this).find('div.subnav ul li').length>0)
			jq162(this).find('div.subnav').parent().children('a').first().removeClass('top');
			jq162(this).find('div.subnav').parent().children('a').first().addClass('tophover');
			jq162(this).find('div.subnav').slideDown('fast').show();
			jq162(this).hover(function() {	
				if(jq162(this).find('div.subnav ul li').length>0)	
					jq162(this).find('div.subnav').parent().children('a').first().removeClass('top');
					jq162(this).find('div.subnav').parent().children('a').first().addClass('tophover');
					jq162(this).find('div.subnav').slideDown('fast').show(); 
				}, 
				function(){
					jq162(this).find('div.subnav').parent().children('a').first().removeClass('tophover');			
					jq162(this).find('div.subnav').parent().children('a').first().addClass('top');
					jq162(this).find('div.subnav').slideUp('fast');});		
				}).hover(function() { 			
						jq162(this).addClass('subhover');
						}, function(){
							jq162(this).removeClass('subhover');
							}
			);
})