function IsPC()  
{  
           var userAgentInfo = navigator.userAgent;  
           var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
           var flag = true;  
           for (var v = 0; v < Agents.length; v++) {  
               if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
           }  
           return flag;  
}  

$(document).ready(function() {
	if(IsPC()){
		$("#qq").prop("href","tencent://message/?uin="+$("#qq").css("qq")+"&Site=http://vps.shuidazhe.com&Menu=yes");
	}else{
		$("#qq").prop("href","mqqwpa://im/chat?chat_type=wpa&uin="+$("#qq").css("qq")+"&version=1&src_type=web&web_src=oicqzone.com");
	}
});