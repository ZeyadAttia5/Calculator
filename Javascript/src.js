

function guiStart(){
    const body = document.querySelector('body');
    const calc = document.createElement('div');
    calc.classList.add('calcBody');
    const screenContainer = document.createElement('div');
    const upperScreen = document.createElement('div');
    const lowerScreen = document.createElement('div');
    screenContainer.classList.add('screenContainer');
    upperScreen.classList.add('upperScreen');
    lowerScreen.classList.add('lowerScreen');

    const numPad = document.createElement('div');
    numPad.classList.add('numPad');
    let count = 1;
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            
            const element = document.createElement('button');
            element.textContent = `${count}`;
            element.style.gridRowStart = `${i}`;
            element.style.gridColumnStart = `${j}`;
            
            if(i == 1 & j == 4)
            element.textContent = '+'
            if(i == 2 & j == 4)
                element.textContent = '*'
            if(i == 3 & j == 4)
                element.textContent = '-'
            if(i == 4 & j == 4)
                element.textContent = '/'   
            numPad.appendChild(element);
            
            count++;
        }
    }
    for (let i = 1; i <= 4; i++) {
        const element = document.createElement('button');
        element.style.gridRowStart = `${i}`;
        element.style.gridColumnStart = `${4}`;
        
        if(i == 1  )
        element.textContent = '+'
        if(i == 2  )
            element.textContent = '*'
        if(i == 3  )
            element.textContent = '-'
        if(i == 4  )
            element.textContent = '/'   
        numPad.appendChild(element);
    }   

    for (let i = 1; i <= 3; i++) {
        const element = document.createElement('button');
        element.style.gridRowStart = `${4}`;
        element.style.gridColumnStart = `${i}`;
        
        if(i == 1)
        element.textContent = '.'
        if(i == 2  )
            element.textContent = '0'
        if(i == 3  )
            element.textContent = '='
        if(i == 4  )
            element.textContent = '/'   
        numPad.appendChild(element);
    }  

    for (let i = 1; i <= 2; i++) {
        const element = document.createElement('button');
        element.style.gridRowStart = `${5}`;
        i == 1 ? element.style.gridColumnStart = `1` : element.style.gridColumnStart = `3`;
        i == 1 ? element.style.gridColumnEnd = `3` : element.style.gridColumnEnd = `5`;
        i == 1 ? element.textContent = 'Clear': element.textContent = 'Delete';
        numPad.appendChild(element);
    }




    upperScreen.textContent = '0';
    lowerScreen.textContent = '0'
    calc.append(screenContainer);
    calc.appendChild(numPad);
    screenContainer.appendChild(upperScreen);
    screenContainer.appendChild(lowerScreen);

    body.appendChild(calc);
}
guiStart();



function operate(operand1 = 0, operand2 = 0, operator){
    switch(operator){
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '/':
            return operand1 / operand2;
        case '*':
            return operand1 * operand2;
        default:
            return;
    }
}