var nowPic = 1;
    var maxPic = 5;
    function loopShow(id){
        nowPic = id;
        document.getElementById("picScroll").src="images/lunbo"+nowPic+".jpeg";
        for(var i=1;i<5;i++){
            if(nowPic==i){
                document.getElementById("pic_bt"+i).className="picLiBtShow";
            }else{
                document.getElementById("pic_bt"+i).className="picLiBtHide";
            }
        }
        nowPic++;
        if(nowPic>5){
            nowPic=1;
        }
    }
    setInterval("loopShow(nowPic)",2000);

    var newsTitle=['newsRemen','newsXinwen','newsGonggao','newsHoudong','newsSaishi'];
    function newsTitleChange(val,that){
        var newsTitleDiv = document.getElementsByClassName("newsTitle")[0];
        var lis=newsTitleDiv.getElementsByTagName("li");
        for(var i=0;i<lis.length;i++){
            lis[i].className="";
        }
        that.className="newsTitleShow";
        for(var i=0;i<newsTitle.length;i++){
            if(val==newsTitle[i]){
                document.getElementById(newsTitle[i]).className="newsShow";
            }else{
                document.getElementById(newsTitle[i]).className="newsHide";
            }
        }
    }

    var center=['jplm','csjp','yygn'];
    function centerChange(val){
        for(var i=0;i<center.length;i++){
            if(center[i]==val){
                document.getElementById(center[i]).className="content_show";
            }else{
                document.getElementById(center[i]).className="content_hide";
            }
        }
    }

    var hero=['zxyx','zxpf','zmyx']
    function heroChange(val){
        for(var i=0;i<hero.length;i++){
            if(val==hero[i]){
                document.getElementById(hero[i]).className="heroShow";
            }else{
                document.getElementById(hero[i]).className="heroHide";
            }
        }
    }