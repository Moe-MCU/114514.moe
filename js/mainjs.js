var option = 0;
var stutus = 0;
function blinkOn(){
	if(option == 0)return;
	theWin.document.bgColor = "C71585";
	document.getElementById("md").style.borderColor = "#000000";
	JSCTimeOutID = window.setTimeout("blinkOff()",50);
}
function blinkOff(){
	if(option==0)return;
	theWin.document.bgColor = "000000";
	document.getElementById("md").style.borderColor = "#C71518";
	JSCTimeOutID = window.setTimeout("blinkOn()",50);
}
function blinkit(aWin)
{
	theWin = aWin
	if(getCookieTime("expTime")=="TRUE"){blinkstop();return;}
	option = 1
	JSCTimeOutID = window.setTimeout("blinkOn()",50);
}
function blinkstop()
{
	option = 0;
	document.getElementById("md").style.borderColor = "white";
	theWin.document.bgColor = "FFE8D2"
}
function blinkstopLT()
{
	if(getCookieTime("expTime")=="TRUE"){
		blinkstop();
		return;
	}else{
	setCookieTime("expTime","TRUE",1);
	blinkstop();
	return;
	}
}
function setCookieTime(cname,cvalue,exdays)
{
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookieTime(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++)
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
