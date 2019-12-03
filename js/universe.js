function mainUniverse(){
    var universeElement = document.getElementById('universe');
    var starElements = universeElement.getElementsByClassName('stars');

    if(universeElement==null){
        return -1
    }else{
        for(var i = 0; i<starElements.length; i++){
            clearElementOfAll(starElements[i], 'star');
        }
        drawStars(universeElement, 1, 8, '#FDB813');
    }
    // console.log('Star width: '+universeWidth);
    // console.log('Star height: '+universeHeight);
    // console.log('Star density: '+calculateStarDensity(universeElements));

    return 0
}

function drawStars(parent, minSize, maxSize, color){
    var elements = parent.getElementsByClassName('stars');
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
        var getElement = Math.floor(getRandomNumber(0, elements.length));

        setDotRandom(elements[getElement], minSize, maxSize, '#FDB813', 'star');
    }
}

function setDot(parent, x, y, r, color=null, nameClass=null){
    var xmlns = "http://www.w3.org/2000/svg";
    var element = document.createElementNS(xmlns, 'circle');

    element.setAttributeNS(null, 'cx', x-r);
    element.setAttributeNS(null, 'cy', y-r);
    element.setAttributeNS(null, 'r', r);
    element.setAttributeNS(null, 'fill', color);
    element.setAttributeNS(null, 'class', nameClass);
    element.setAttributeNS(null, 'filter', 'url(#f1)')

    parent.appendChild(element);
}

function setDotRandom(parent, minSize, maxSize, color=null, nameClass=null){
    var r = null;
    var count = 0;

    do{
        r = Math.floor(calculateDotSize(minSize, maxSize, getRandomNumber(minSize, maxSize)));
        count++;
    }while(!isWithin(r, minSize, maxSize) && count < 5);

    if(r==null){r = 1;}

    setDot(parent, Math.floor(getRandomNumber(0, parent.clientWidth)), Math.floor(getRandomNumber(0, parent.clientHeight)), r, color, nameClass);
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
