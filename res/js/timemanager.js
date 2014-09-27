function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
}


function setName(name){
    var csrftoken = getCookie('csrftoken');
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {

            url = xmlhttp.responseText;
            window.location = url;
        }
    }
    xmlhttp.open("POST","index.html",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader('X-CSRFToken',csrftoken);
    var postStr = "name="+name;
    xmlhttp.send(postStr);

    
}
function recordTime(content){
    var starttime = Date.parse(new Date()); 
    var endtime;

    var csrftoken = getCookie('csrftoken');
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            content = xmlhttp.responseText;
            alert(content + " has been sent");

            starttime = Date.parse(new Date()); 
        }
    }

    endtime = Date.parse(new Date());
    xmlhttp.open("POST","recordTime.html",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader('X-CSRFToken',csrftoken);
    
    var postStr = "content="+content.toString()+"&starttime="+starttime.toString()+"&endtime="+endtime.toString();
    xmlhttp.send(postStr);

}
function keyHandler(event,type){
    var keycode;
    if(window.event) // IE 浏览器
    {
        //alert('ie');
        keycode = event.keyCode;
    }
    else if(event.which) // Netscape/Firefox/Opera浏览器
    {
        //alert('firefox ');
        keycode = event.which;
    }
    if(keycode == 13){ // enter 键
        if(type == 'setName'){
            var name = document.getElementById("name").value;

            if(name.length >0){
                setName(name);
            }
        }else if(type == 'recordTime'){
            var content = document.getElementById("content").value;
            if(content.length >0){
                recordTime(content);

            }
        }
    }
}


