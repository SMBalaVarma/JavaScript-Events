// DoM Events

// const button = document.getElementById('btn')
// .addEventListener('click', function(){
//     console.log('i have been clicked')
// });

// const button = document.getElementById('btn')
// .addEventListener('click', buttonClick )

// function buttonClick(){
//     console.log('you hav been clicking...!!!!')
//     document.getElementById('main-head').textContent='clicking meeeee';
//     document.querySelector('#main').style.backgroundColor='green';
// }

// function buttonClick(ep){
    // console.log(ep.target.classList)
//     console.log(ep.type)
//     console.log(ep.clientX);
//     console.log(ep.clientY);
    //    Element

    // console.log(ep.offsetX);
    // console.log(ep.offsetY);
     
    // // for t/f in case the any specified is used while selecting the btn
    // console.log(ep.ctrlKey);
    // console.log(ep.shiftKey);
    // console.log(ep.altKey);

//     console.log(ep.ctrlKey + ep.shiftKey);
// }


const button = document.getElementById('btn');

const circle = document.getElementById('circle');


// button.addEventListener('click',initEvent);
// button.addEventListener('dblclick',initEvent);
//  button.addEventListener('mousedown', initEvent)
// button.addEventListener('mouseup', initEvent)

// circle.addEventListener('mouseup', initEvent);
// circle.addEventListener('mouseout', initEvent);

// circle.addEventListener('mouseenter', initEvent);
// circle.addEventListener('mouseleave', initEvent);

// circle.addEventListener('mouseover',initEvent)
// circle.addEventListener('mouseout', initEvent)

circle.addEventListener('mousemove',initEvent);

function initEvent(ep){
    console.log('EVENT TYPE : ' + ep.type)
    circle.style.backgroundColor= 'rgb('+ep.offsetX+','+ep.offsetY+', 20)'

}