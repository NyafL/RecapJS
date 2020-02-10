
let li1 = document.getElementsByClassName('li1')[0]
let li2 = document.getElementsByClassName('li2')[0]
let li3 = document.getElementsByClassName('li3')[0]
let li4 = document.getElementsByClassName('li4')[0]
let li5 = document.getElementsByClassName('li5')[0]
let li6 = document.getElementsByClassName('li6')[0]
let li7 = document.getElementsByClassName('li7')[0]

let exo1 = document.getElementsByClassName('exo1')[0]
let exo2 = document.getElementsByClassName('exo2')[0]
let exo3 = document.getElementsByClassName('exo3')[0]
let exo4 = document.getElementsByClassName('exo4')[0]
let exo5 = document.getElementsByClassName('exo5')[0]
let exo6 = document.getElementsByClassName('exo6')[0]
let exo7 = document.getElementsByClassName('exo7')[0]

let body = document.getElementsByTagName('body')[0]


exo1.style.display = "block"
exo2.style.display = "none"
exo3.style.display = "none"
exo4.style.display = "none"
exo5.style.display = "none"
exo6.style.display = "none"
exo7.style.display = "none"

li1.addEventListener( 'click', () => {
    exo1.style.display = "block"

    exo2.style.display = "none"
    exo3.style.display = "none"
    exo4.style.display = "none"
    exo5.style.display = "none"
    exo6.style.display = "none"
    exo7.style.display = "none"

})
//exo2 finished

li2.addEventListener( 'click', () => {
    exo1.style.display = "none"

    exo2.style.display = "block"

    exo3.style.display = "none"
    exo4.style.display = "none"
    exo5.style.display = "none"
    exo6.style.display = "none"
    exo7.style.display = "none"

})

li3.addEventListener( 'click',() => {
    exo1.style.display = "none"
    exo2.style.display = "none"

    exo3.style.display = "block"

    exo4.style.display = "none"
    exo5.style.display = "none"
    exo6.style.display = "none"
    exo7.style.display = "none"

})

li4.addEventListener( 'click',() => {
    exo1.style.display = "none"
    exo2.style.display = "none"
    exo3.style.display = "none"

    exo4.style.display = "block"

    exo5.style.display = "none"
    exo6.style.display = "none"
    exo7.style.display = "none"

})

li5.addEventListener( 'click',() => {
    exo1.style.display = "none"
    exo2.style.display = "none"
    exo3.style.display = "none"
    exo4.style.display = "none"

    exo5.style.display = "block"

    exo6.style.display = "none"
    exo7.style.display = "none"

})

li6.addEventListener( 'click',() => {
     exo1.style.display = "none"
    exo2.style.display = "none"
    exo3.style.display = "none"
    exo4.style.display = "none"
    exo5.style.display = "none"

    exo6.style.display = "block"

    exo7.style.display = "none"

})

li7.addEventListener( 'click', () => {
    exo1.style.display = "none"
    exo2.style.display = "none"
    exo3.style.display = "none"
    exo4.style.display = "none"
    exo5.style.display = "none"
    exo6.style.display = "none"
    exo7.style.display = "block"

})



//exo1, finished
let titre = document.getElementsByClassName('titre')[0]

titre.innerText = "le titre a été modifié"

titre.classList = "bg-primary text-danger"

//exo2



//exo3, finished
let form = document.getElementsByClassName('form')[0]
let submit1 = document.getElementsByClassName('submit1')[0]
let welcome = document.getElementsByClassName('welcome')[0]
let input1 =  document.getElementsByClassName('input')[0]

submit1.addEventListener('click', () => {
    welcome.innerText = `Welcome ${input1.value}`
})


//exo4, finished
let from = document.getElementsByClassName('from')[0]
let to = document.getElementsByClassName('to')[0]
let red = document.getElementById('red')


let changerplace = document.getElementsByClassName('changerplace')[0]
let nombreclick = document.getElementsByClassName('nombreclick')[0]

changerplace.addEventListener('click', () => {
//     switch () {
//         case (from.hasChildNodes(red)):
//             from.removeChild(red)
//             to.appendChild(red)
//             break;
    
//         case(to.hasChildNodes(red)):
//             to.removeChild(red)
//             from.appendChild(red)
//             break;

// })

    if (to.hasChildNodes(red)){
        // from.removeChild(red)
        from.appendChild(red)

    } else {
        // to.removeChild(red)
        to.appendChild(red)
  
        
    }

 })


//clicknumber example
nombreclick.innerText = "Clicks : 0"

 count2 = 0;

changerplace.onclick = function() {
 count2 += 1;
 nombreclick.innerHTML = "Clicks: " + count2;
 }



//exo5, finished
let ajouter = document.getElementsByClassName('ajouter')[0]
let deleteoeuf = document.getElementsByClassName('deleteoeuf')[0]
let deleteoeufs = document.getElementsByClassName('deleteoeufs')[0]


ajouter.addEventListener('click', () => { 
    var img = document.createElement('img')
    img.setAttribute('src', './public/images/oeuf.jpg')
    body.appendChild(img)
    deleteoeuf.addEventListener('click', () => {
        body.removeChild(img.parentNode.lastChild)
        
    })
    
    deleteoeufs.addEventListener('click', () => {
        body.removeChild(img)
    } )
})


//exo6
//part 1, finished
let equal = document.getElementsByClassName('equal')[0]
let input3 = document.getElementsByClassName('input3')[0]
let input4 = document.getElementsByClassName('input4')[0]
let response = document.getElementsByClassName('response')[0]
let select = document.getElementsByTagName('select')[0]
equal.addEventListener('click', () => {
   
    switch (select.value) {
       case '+':
          response.textContent = `${Number(input3.value) + Number(input4.value)}`
          break;
       case '-':
          response.textContent = `${Number(input3.value) - Number(input4.value)}`
          break;
       case'*':
          response.textContent = `${Number(input3.value) * Number(input4.value)}`
          break;
       case '/':
          response.textContent = `${Number(input3.value) / Number(input4.value)}`
          break;
    }
 })

// //part2 
// let calculhere = document.getElementsByClassName('calculhere')[0]
// let calculhere2 = document.getElementsByClassName('calculhere2')[0]
// let responsehere = document.getElementsByClassName('responsehere')[0]
// let number1 = document.getElementsByClassName("number1")[0]
// let number2 = document.getElementsByClassName("number2")[0]
// let number3 = document.getElementsByClassName("number3")[0]
// let number4 = document.getElementsByClassName("number4")[0]
// let number5 = document.getElementsByClassName("number5")[0]
// let number6 = document.getElementsByClassName("number6")[0]
// let number7 = document.getElementsByClassName("number7")[0]
// let number8 = document.getElementsByClassName("number8")[0]
// let number9 = document.getElementsByClassName("number9")[0]
// let number0 = document.getElementsByClassName("number0")[0]
// let C = document.getElementsByClassName('c')[0]
// let equal2 = document.getElementsByClassName('equal')[1]


// let plus = document.getElementsByClassName("plus")[0]
// let minus = document.getElementsByClassName("minus")[0]
// let times  = document.getElementsByClassName("times")[0]
// let divide = document.getElementsByClassName("divide")[0]

// let count = 0
// plus.addEventListener('click', () => {
//     count++
// })
// minus.addEventListener('click', () => {
//     count++
// })
// times.addEventListener('click', () => {
//     count++
// })
// divide.addEventListener('click', () => {
//     count++
// })


// number1.addEventListener("click",()=>{
//     if (count % 2 == 1) {
//         calculhere2.value += 1;
//     }else if (count %2 == 0) {
//         calculhere.value += 1
//     }
//  });
// number2.addEventListener("click",()=>{
//     if (count % 2 == 1) {
//         calculhere2.value += 2;
//     }else if (count %2 == 0) {
//         calculhere.value += 2
//     }
//  })
// number3.addEventListener("click",()=>{
//     if (count % 2 == 1) {
//         calculhere2.value += 3;
//     }else if (count %2 == 0) {
//         calculhere.value += 3
//     }
//  });
// number4.addEventListener("click",()=>{
//     if (count % 2 == 1) {
//         calculhere2.value += 4;
//     }else if (count %2 == 0) {
//         calculhere.value += 4
//     }
//  });
// number5.addEventListener("click",()=>{
//     if (count % 2 == 1) {
//         calculhere2.value += 5;
//     }else if (count %2 == 0) {
//         calculhere.value += 5
//     }
//  });
// number6.addEventListener("click",()=>{
//     if (count % 2 == 1) {
//         calculhere2.value += 6;
//     }else if (count %2 == 0) {
//         calculhere.value += 6
//     }
//  });
// number7.addEventListener("click",()=>{
//     if (count % 2 == 1) {
//         calculhere2.value += 7;
//     }else if (count %2 == 0) {
//         calculhere.value += 7
//     }
//  });
// number8.addEventListener("click",()=>{
//     if (count % 2 == 1) {
//         calculhere2.value += 8;
//     }else if (count %2 == 0) {
//         calculhere.value += 8
//     }
//  });
// number9.addEventListener("click",()=>{
//     if (count % 2 == 1) {
//         calculhere2.value += 9;
//     }else if (count %2 == 0) {
//         calculhere.value += 9
//     }
//  });
// number0.addEventListener("click",()=>{
//     if (count % 2 == 1) {
//         calculhere2.value += 0;
//     }else if (count %2 == 0) {
//         calculhere.value += 0
//     }
//  });

 
 
//  equal2.addEventListener("click",()=>{
//     let button = [plus, minus, times, divide]
  
//     switch (true) {
//         case button[0].classList.contains('plus'):
//             responsehere.innerText = parseFloat(calculhere.value) + parseFloat(calculhere2.value);
//         break;
//         case  button[1].classList.contains('minus'):
//             responsehere.innerText = parseFloat(calculhere.value) - parseFloat(calculhere2.value);
//         break;
//         case  button[2].classList.contains('times'):
//             responsehere.innerText = parseFloat(calculhere.value) * parseFloat(calculhere2.value);
//         break;
//         case button[3].classList.contains('divide'):
//             responsehere.innerText = parseFloat(calculhere.value) / parseFloat(calculhere2.value);
//         break;
       
//     }
//     count++
//     calculhere2.value = ""
//     calculhere.value = ""
// });



//EXo7, finished

let ajouttache = document.getElementsByClassName('ajouttache')[0]
let afaire  = document.getElementsByClassName('afaire')[0]
let complete = document.getElementsByClassName('complete')[0]
let toutes = document.getElementsByClassName ('toutes')[0]
let listhere = document.getElementsByClassName('listhere')[0]
let delete1 = document.getElementsByClassName('delte1')[0]
exo7.appendChild(listhere)

ajouttache.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
      let li = document.createElement('li')
      li.innerText = ajouttache.value
      li.style.listStyle = "none"
      listhere.appendChild(li)
      ajouttache.value = ""
      
      let input5 = document.createElement('input')
      input5.classList = 'check nochecked1'
      input5.setAttribute('type','checkbox')
      li.appendChild(input5)

      input5.addEventListener('click', () => {
          if (input5.checked == true){
              input5.classList = "check checked1"
          } else   {
              input5.classList = "check nochecked1"
          }
      })
      let button5 = document.createElement('button')
      button5.classList = 'delete2'
      button5.innerText = 'x'
      li.appendChild(button5)
      
      let inputAll = document.querySelectorAll('.check')

      complete.addEventListener('click', () => {
  
        //   if (document.getElementsByClassName('checked1')) {
        //     alert('enter')
        //     for (var i=0;i< document.getElementsByClassName('checked1').length;i+=1){
        //         console.log(document.getElementsByClassName('checked1')[i].parentNode)
        //       document.getElementsByClassName('checked1')[i].parentNode.style.display ="block"
        //      }
        //      for (var i=0;i<document.getElementsByClassName('nochecked1').length;i+=1){
        //       document.getElementsByClassName('nochecked1')[i].parentNode.style.display ="none"
        //       alert('if')
        //      }

        //     } else if (input5.classList == 'check nochecked1'){
        //     for (var i=0;i< document.getElementsByClassName('checked1').length;i+=1){
        //     document.getElementsByClassName('checked1').style.display = "none"
        //     }
        //     for (var i=0;i< document.getElementsByClassName('nochecked1').length;i+=1){
        //     document.getElementsByClassName('nochecked1').style.display = "block"
        //     alert('else')
        //     }
        //   }
        //  

      
        for (let i = 0; i < inputAll.length; i++) {
            if(inputAll[i].classList.contains('checked1')){
                inputAll[i].parentNode.style.display = "block"
            } else {
                inputAll[i].parentNode.style.display = "none"
            }
        }

    })

  
    afaire.addEventListener('click', () => {

        for (let i = 0; i < inputAll.length; i++) {
            if(inputAll[i].classList.contains('nochecked1')){
                inputAll[i].parentNode.style.display = "block"
            } else {
                inputAll[i].parentNode.style.display = "none"
            }
        }
    })
        
    
    toutes.addEventListener('click', () => {
        li.style.display = "block"
    })
         
         button5.addEventListener('click', () => {
             li.style.display = "none"
         })

        } 

    


});    


   
