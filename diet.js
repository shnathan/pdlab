function calculate(){
    
    var age=document.querySelector("#age").value;
    var height=document.querySelector("#height").value;
     var weight=document.querySelector("#weight").value;
    var gender = document.querySelector( 'input[name="Gender"]:checked').value; 
    var activity=document.getElementsByName("browser")[0].value;
    var weightplan=document.getElementsByName("weight")[0].value;
    var meals=document.getElementsByName("meals")[0].value;

  
   
    let userInfo ={
        'age':age,
        'height':height,
        'weight':weight,
        'gender':gender,
        'activity':activity,
        'weightplan':weightplan,
        'meals':meals
    }
    const request=new XMLHttpRequest()
    request.open('POST',`http://127.0.0.1:5000/processUserInfo/${JSON.stringify(userInfo)}`)
    request.onload =()=>{
        const flaskMessage=request.responseText;
        alert(flaskMessage);
        const flaskMessage12=JSON.parse(flaskMessage);
        console.log(typeof(flaskMessage12));
        alert(flaskMessage12[0][0]['Name']);
        alert(flaskMessage12[0].length);
        // alert(flaskMessage[0][0]['Name'].value);
        var table1=document.getElementById("table");
        var string=`<br><br>
           <table border:1px solid black;  style="width:100%">
            <thead>
            <tr>
            <th>Reciepe image</th>
            <th>Name</th>
            <th>Calories</th>
            <th>ProteinContent</th>
            <th>RecipeIngredientParts</th>
            <th>RecipeInstructions</th>
            </thead>`;
           
            for(let i=0;i<flaskMessage12[0].length;i++){
                var temp=`<tr>
                <td><img src=${flaskMessage12[0][i]['image_link']} width="100%"></td>
                <td>${flaskMessage12[0][i]['Name']}</td>
                <td>${flaskMessage12[0][i]['Calories']}</td>
                <td>${flaskMessage12[0][i]['ProteinContent']}</td>
                <td>${flaskMessage12[0][i]['RecipeIngredientParts']}</td>
                <td>${flaskMessage12[0][i]['RecipeInstructions']}</td>
                </tr>
                <br>
                `
                string+=temp;
        
            
        }
           
            table1.innerHTML+=string+`</table><br><br><br>`
     
    }
    //getapicall();
    request.send()
}
function getapicall(){
    const request=new XMLHttpRequest()
    request.open('GET',`http://127.0.0.1:5000/api/`)
    request.onload =()=>{
        const flaskMessage1=request.responseText
        console.log(flaskMessage1);
    }
}