document.getElementById('UI-form').addEventListener('submit', function (e) {
    //Hide results 
    document.getElementById('results').style.display = 'none';
    //Show loader
    document.getElementById('loading').style.display = 'block';
    //Time out
    setTimeout(result, 1500);


    e.preventDefault();
});


function result(){ 
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const gender = document.getElementById('gender').value;
    const activity = document.getElementById('activity').value;
    const outputBMR = document.getElementById('BMR');
    

    //hide loader
    document.getElementById('loading').style.display = 'none';

    //Show results 
    document.getElementById('results').style.display = 'block';
    //Calculate BMR
    
    if (gender === 'male') {
        let BMR = 66.5 + (13.7 * weight) + (5.003 * height) - (6.755 * age)
        outputBMR.value = BMR.toFixed(2);;
        calculatemcpd(activity, BMR)

    } else if (gender === 'female') {
        let BMR = 655 + (9.563 * weight) + (1.850 * height) - (4.676 * age)
        outputBMR.value = BMR.toFixed(2);;
        calculatemcpd(activity, BMR)
    }
    
}

function calculatemcpd(activity, BMR){
    const outputmcpd = document.getElementById('mcpd');

    if(activity == 'Sedentary'){
        let mcpd = BMR * 1.2
        outputmcpd.value = mcpd.toFixed(2);
        }
    else if (activity == 'Lightly Active') {
        let mcpd = BMR * 1.375
        outputmcpd.value = mcpd.toFixed(2);
        }
    else if (activity == 'Moderately Active'){
        let mcpd = BMR * 1.55
        outputmcpd.value = mcpd.toFixed(2);            
        }
    else if (activity == 'Very Active') {
        let mcpd = BMR * 1.725
        outputmcpd.value = mcpd.toFixed(2);
    }
    else{
        let mcpd = BMR * 1.9
        outputmcpd.value = mcpd.toFixed(2);
    }

}