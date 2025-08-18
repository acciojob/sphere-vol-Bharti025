function volume_sphere() {
    //Write your code here
	// Step 1: Retrieve radius value
    let radius = parseFloat(document.getElementById("radius").value);
    
    // Step 2: Validate input
    if (isNaN(radius) || radius < 0) {
        document.getElementById("output").value = 'NaN';
        return;
    }
    
    // Step 3: Calculate volume
    let volume = (4/3) * Math.PI * Math.pow(radius, 3);
    
    // Step 4: Round the result
    volume = volume.toFixed(4);
    
    // Step 5: Display the result
    document.getElementById("output").value = volume;
}
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
