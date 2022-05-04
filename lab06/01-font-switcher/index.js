let headerFS=2.0;
let contentFS=1.0;

const makeBigger = () => {
   headerFS=headerFS+.2;
   contentFS=contentFS+.2;
   document.querySelector("h1").style.fontSize=headerFS.toString()+'em';
   document.querySelector("p").style.fontSize=contentFS.toString()+'em';
   // alert('make bigger!');
};

const makeSmaller = () => {
   headerFS=headerFS-.2;
   contentFS=contentFS-.2;
   document.querySelector("h1").style.fontSize=headerFS.toString()+'em';
   document.querySelector("p").style.fontSize=contentFS.toString()+'em';
   // alert('make smaller!');
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

