// "use strick";

// let index=0;
// let inputs = document.getElementsByTagName('input');
// let button = document.getElementsByTagName('button')[0];

// for (let i of inputs){
//     i.addEventListener('focus',(e)=>{
//         let label = e.target.parentElement.getElementsByTagName('label')[0];
//         label.style.marginTop = '-20px';
//         label.style.color = '#65b5ff';
//         if(e.target == inputs[0]){
//             index=1;
//         }
//         if(e.target == inputs[1]){
//             index=2;
//         }
        // if(e.target == inputs[2]){
                //     index=3;
                // }
                // if(e.target == inputs[3]){
                //     index=4;
                // }
                // if(e.target == inputs[4]){
                //     index=5;
                // }
        // })
    // i.addEventListener('focusout',(e)=>{
    //     index=0;
    //     if (i.value.length == 0){
    //         let label = e.target.parentElement.getElementsByTagName('label')[0];
    //         label.style.margin = '0px';
    //         label.style.color = 'rgb(80,80,80)';
    //     }
    // })
    // i.addEventListener('input',(e)=>{
    //     if (inputs[0].value.length > 0){
    //         console.log(1);
    //         button.removeAttribute('disabled');
    //     }
    //     else{
    //         button.setAttribute('disabled','true');
    //     }
    // })
// }

// addEventListener('keypress',(e)=>{
//     if (e.key == 'Enter'){
//         inputs[index].focus();
//         index+=1;
//     }
//     if (index == 1){
//         index=0;
//     }
// })

// let error = document.getElementsByClassName('error')[0];
// let username = document.getElementsByClassName('username')[0];
// let nums = '0123456789';
// let all = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890_.-';
// let herfler = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';

// button.onclick = function(){
//     let c=0;
//     let d=0;
//     let t=0;
//     let s=0;
//     let cavab='';
//     let a = username.value;
//     for (let i=0; i<a.length;i++){
//         if (herfler.includes(a[i]) && a[i] == a[i].toUpperCase()){
//             c+=1;
//         }
//         if (herfler.includes(a[i]) && a[i] == a[i].toLowerCase()){
//             d+=1;
//         }
//         if (nums.includes(a[i])){
//             t+=1;
//         }
//         if (all.includes(a[i])){
//             s+=1;
//         }
//     }
//     if(c>0 && d>0 && t>0 && s==a.length && a.length>=8){
//         cavab+='';
//         // | Qeydiyyat ugurla yerine yetirildi |
//         error.style.color = 'green';
//     }
//     if (t==0){
//         cavab+='| adinizda minimum 1 eded reqem olmalidir |';
//     }
//     if(c==0){
//         cavab+='| adinizda minimum 1 eded boyuk herf olmalidir |';
//     }
//     if(d==0){
//         cavab+='| adinizda minimum 1 eded kicik herf olmalidir |';
//     }
//     if(s<a.length){
//         cavab+='| adinizda yalniz "-", "_", ".", ingilis herfleri ve reqemler olmalidir |'
//     }
//     if(a.length<8){
//         cavab+='| adinizda minimum 8 isare olmalidir |'
//     }
//     if(cavab == '| Qeydiyyat ugurla yerine yetirildi |'){
//         error.style.color = 'green';
//     }
//     else{
//         error.style.color = 'red';
//     }
//     error.innerHTML=cavab;
//     }