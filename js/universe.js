function mainUniverse(){
    var universeElements = document.getElementsByClassName('universe');

    if(universeElements==null){
        return -1
    }
    // console.log('Star width: '+universeWidth);
    // console.log('Star height: '+universeHeight);
    // console.log('Star density: '+calculateStarDensity(universeElements));

    for(var i = 0; i<universeElements.length; i++){
        clearElementOfAll(universeElements[i], 'star');
        drawStars(universeElements[i], 1, 8, '#FDB813');
    }

    return 0
}

function drawStars(parent, minSize, maxSize, color){
    var performanceLimit = 400;
    var totalStars = calculateStarDensity(parent);

    while(totalStars>performanceLimit){
        if(totalStars-performanceLimit >= performanceLimit/2){

            if(minSize<=0){
                minSize = 1;
            }
            minSize *= 2;
            maxSize *= 1.5;
        }
        totalStars /= 1.5;
    }
    // console.log('Stars generating: '+(Math.floor(totalStars)+1));

    for(var i = 0; i<(Math.floor(totalStars)+1); i++){
        setDotRandom(parent, minSize, maxSize, '#FDB813');
    }
}

function setDot(parent, x, y, r, color){
    var xmlns = "http://www.w3.org/2000/svg";
    var child = document.createElementNS(xmlns, 'svg');
    var childsChild = document.createElementNS(xmlns, 'circle');

    child.setAttributeNS(null, 'class', 'star');
    child.setAttributeNS(null, 'style', 'bottom:'+y+'px; left:'+x+'px');
    child.setAttributeNS(null, 'height', r*2);
    child.setAttributeNS(null, 'width', r*2);

    childsChild.setAttributeNS(null, 'cx', r);
    childsChild.setAttributeNS(null, 'cy', r);
    childsChild.setAttributeNS(null, 'r', r);
    childsChild.setAttributeNS(null, 'fill', color);

    child.appendChild(childsChild);
    parent.appendChild(child);
}

function setDotRandom(parent, minSize, maxSize, color){
    var r = null;
    var count = 0;

    do{
        r = Math.floor(calculateDotSize(minSize, maxSize, getRandomNumber(minSize, maxSize)));
        count++;
    }while(!isWithin(r, minSize, maxSize) && count < 5);

    if(r==null){r = 1;}

    setDot(parent, Math.floor(getRandomNumber(0, parent.clientWidth)), Math.floor(getRandomNumber(0, parent.clientHeight)), r, color);
}

function calculateDotSize(minSize, maxSize, input){
    var size = -(1/((1/maxSize)*(input-maxSize-1)))-0.2;

    if(size>=minSize && size<=maxSize){
        return size
    }else{
        return null
    }
}

function calculateStarDensity(parent){
    return (Math.sqrt(parent.clientWidth)*Math.sqrt(parent.clientHeight))/2;
}
