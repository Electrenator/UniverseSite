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
