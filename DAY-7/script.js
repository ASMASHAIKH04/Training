// document.write=PRINT AS IT IS ON SCREEN written in: "...";
document.write("heyyyyyaaaa***");
let userinputbutton=document.querySelector('button');
userinputbutton.addEventListener('click',userinput)
function userinput(){
    let name=prompt("ENTER UR NAME: ");
    userinputbutton.textContent='HELLO '+name;
}