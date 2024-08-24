function highlight() {
    //Write your code here
	const boldElements = document.querySelectorAll('strong');

    // Loop through each <strong> element and change the color to green
    boldElements.forEach(element => {
        element.style.color = 'green';
    });


}


function return_normal() {
    //Write your code here
	const boldElements = document.querySelectorAll('strong');

    // Loop through each <strong> element and revert the color to black
    boldElements.forEach(element => {
        element.style.color = 'black';
    });

    
}
