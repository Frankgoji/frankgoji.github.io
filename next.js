// Finds a link that says "Next" in the link text and clicks it
javascript:(
    function(){
        anchors=document.getElementsByTagName("A");
        for(i=0;i<anchors.length;i++){
            if(anchors[i].innerHTML.search(/next/i) !== -1){
                anchors[i].click();
            }
        }
    }
)();
