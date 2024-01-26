const butt1 = document.getElementById('butt1');
const butt2 = document.getElementById('butt2');
const butt3 = document.getElementById('butt3');
const countLabel = document.getElementById(`countLabel`);
let count = 0;

butt1.onclick = function(){
    count--;
    countLabel.textContent = count;
}
butt2.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
butt3.onclick = function(){
    count++;
    countLabel.textContent = count;
}