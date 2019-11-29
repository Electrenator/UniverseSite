function isWithin(input, first, second){
    if(first<second && first<input && input<second){
        return true;
    }else if(first>second && secon<input && input<first){
        return true;
    }else{
        return false;
    }
}

function clearElementOfAll(parent, className){
    var children = parent.getElementsByClassName(className);
    var totalWithClass = children.length;

    for(var i = totalWithClass; i > 0; i--){
        parent.removeChild(children[i-1])
    }
}

function getRandomNumber(bottom, top){
    return Math.random()*top+bottom
}

function sudoCenter(className, forceHight=null){
    var elements = document.getElementsByClassName(className);
    var totalElements = elements.length;

    for(var i = 0; i<totalElements; i++){
        var parent = elements[i].parentElement;
        var parentWidth = parent.clientWidth;
        var parentHeight = parent.clientHeight;

        if(forceHight!=null){
            parentHeight = forceHight;
        }

        var elementHeight = elements[i].clientHeight;
        var elementWidth = elements[i].clientWidth;

        var totalSpaceVertical = parentHeight - elementHeight;
        var totalSpaceHorizontal = parentWidth - elementWidth;

        setOffset(elements[i], totalSpaceVertical/2, totalSpaceHorizontal/2);
    }
}

function setOffset(element, top, left){
    element.setAttributeNS(null, 'style', 'top:'+top+'px; left:'+left+'px');
}
