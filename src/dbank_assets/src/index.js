import {dbank} from "../../declarations/dbank";

window.addEventListener("load",async()=>{
    ckBalanceC()
})


document.querySelector("form").addEventListener("submit",async(event)=>{

    console.log(event.submitter.value);
    let sc=event.submitter.value;
const InputAmount=parseFloat(document.getElementById("input-amount").value);
const WithdrawAmount=parseFloat(document.getElementById("withdrawal-amount").value);

    event.preventDefault();
    const button=event.target.querySelectorAll("#submit-btn");
    button.forEach( x=> x.setAttribute("disabled",true))
    if(sc=="Calculate Compound Interest"){
        console.log("compound")
    if(document.getElementById("input-amount").value.length!=0){
    let stat=await dbank.topUp(InputAmount);
    await dbank.compound();
    ckBalanceC()
    document.getElementById("input-amount").value="";
    document.getElementById("status").innerText=stat
    button.forEach( x=> x.removeAttribute("disabled"))
    }else if(document.getElementById("withdrawal-amount").value.length!=0){
        let stat=await dbank.withDraw(WithdrawAmount);
        await dbank.compound();
        ckBalanceC()
        document.getElementById("status").innerText=stat
        document.getElementById("withdrawal-amount").value="";
        button.forEach( x=> x.removeAttribute("disabled"))
    }
}else if(sc=="Calculate Simple Interest"){
    console.log("simple")
    if(document.getElementById("input-amount").value.length!=0){
        let stat=await dbank.topUp(InputAmount);
        await dbank.simple();
        ckBalanceS()
        document.getElementById("input-amount").value="";
        document.getElementById("status").innerText=stat
        button.forEach( x=> x.removeAttribute("disabled"))
        }else if(document.getElementById("withdrawal-amount").value.length!=0){
            let stat=await dbank.withDraw(WithdrawAmount);
            await dbank.simple();
            ckBalanceS()
            document.getElementById("status").innerText=stat
            document.getElementById("withdrawal-amount").value="";
            button.forEach( x=> x.removeAttribute("disabled"))
        }
}
})

async function ckBalanceS(){
    let a=await dbank.checkBalSimp();
    document.getElementById("value").innerText=a.toFixed(2);
}

async function ckBalanceC(){
    let a=await dbank.checkBalComp();
    document.getElementById("value").innerText=a.toFixed(2);
}

document.getElementById("input-amount").onclick = function() {myFunction()};
document.getElementById("withdrawal-amount").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("status").innerText = "";
}