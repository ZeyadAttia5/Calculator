

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




    upperScreen.textContent = '';
    lowerScreen.textContent = '0'
    calc.append(screenContainer);
    calc.appendChild(numPad);
    screenContainer.appendChild(upperScreen);
    screenContainer.appendChild(lowerScreen);

    body.appendChild(calc);
}
guiStart();



function operate(operand1 = 0, operand2 = 0, operator){
    let result = 0;
    switch(operator){
        case '+':
              result = operand1 + operand2;
              break;
        case '-':
              result = operand1 - operand2;
              break;
        case '/':
              result = operand1 / operand2;
              break;
        case '*':
              result = operand1 * operand2;
              break;
        default:
              return;
    }

    return Math.round((result + Number.EPSILON) * 1000) / 1000;
}

function isOperator(text){
    if (text.includes('+') || text.includes('/') || text.includes('*') || text.includes('-'))
        return true
    else
        return false
}

let arr = new Array();
function getClick(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click', clickHandler));
    
    function clickHandler(e){
        const lowerScreen = document.querySelector('.lowerScreen');
        const upperScreen = document.querySelector('.upperScreen');
        let text = e.target.textContent;
        

        if(text === "Clear"){
            lowerScreen.textContent = "";
            upperScreen.textContent = "";
        }

        else if(text === "Delete"){
            lowerScreen.textContent = lowerScreen.textContent.substring(0,lowerScreen.textContent.length-1);
        }
        
        else if(isOperator(text)){
            upperScreen.textContent = `${lowerScreen.textContent} ${text}`;
            arr.splice(0, 0, parseFloat(lowerScreen.textContent));
            arr.splice(1,0, text);
            console.log(arr);
            lowerScreen.textContent = "";
            console.log(arr);
        }
        else if(text === "="){
            if(lowerScreen.textContent !== "" && upperScreen.textContent!==""){
                arr.splice(2, 0, parseFloat(lowerScreen.textContent));
                lowerScreen.textContent = "";
                upperScreen.textContent = "";
                lowerScreen.textContent = operate(arr[0], arr[2], arr[1]);
            }
        }
        else{
            if(lowerScreen.textContent.indexOf('.') !== -1 && text==="."){
                text = "";
            }
            if(lowerScreen.textContent.substring(0, 1) !== "0")
                lowerScreen.textContent = `${lowerScreen.textContent}${text}`;
            else
                lowerScreen.textContent = `${text}`;
                
        }

    }
}
getClick();

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

function input(){
    const buttons = document.querySelectorAll('buttons')
    window.addEventListener('keydown', keyHandler);
    
    function keyHandler(e){
        const lowerScreen = document.querySelector('.lowerScreen');
        const upperScreen = document.querySelector('.upperScreen');
        let text = e.key;
    
        if(text === "c"){
            lowerScreen.textContent = "";
            upperScreen.textContent = "";
        }
    
        else if(text === "Backspace"){
            lowerScreen.textContent = lowerScreen.textContent.substring(0,lowerScreen.textContent.length-1);
        }
            
        else if(isOperator(text)){
            upperScreen.textContent = `${lowerScreen.textContent} ${text}`;
            arr.splice(0, 0, parseFloat(lowerScreen.textContent));
            arr.splice(1,0, text);
            console.log(arr);
            lowerScreen.textContent = "";
            console.log(arr);
        }
        else if(text === "Enter"){
            if(lowerScreen.textContent !== "" && upperScreen.textContent!==""){
                arr.splice(2, 0, parseFloat(lowerScreen.textContent));
                lowerScreen.textContent = "";
                upperScreen.textContent = "";
                lowerScreen.textContent = operate(arr[0], arr[2], arr[1]);
            }
        }
        else{
            if(lowerScreen.textContent.indexOf('.') !== -1 && text==="."){
                text = "";
            }
            if(isNumeric(text)){
                if(lowerScreen.textContent.substring(0, 1) !== "0")
                    lowerScreen.textContent = `${lowerScreen.textContent}${text}`;
                else
                    lowerScreen.textContent = `${text}`;
            }
        }
    }   
}

input();

