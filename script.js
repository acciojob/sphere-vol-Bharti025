function volume_sphere() {
    //Write your code here
	let radius=document.getElementById("radius").textContent;
	let Volume=document.getElementById("volume");
	if(isNaN(inputR)|| radius<0){
		Volume.textContent="NaN";
	}
	else{
	let vol=(4 / 3) * Math.PI * Math.pow(radius, 3);
	Volume.textContent=`${vol}`
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
