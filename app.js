document.getElementById("searchBtn").addEventListener("click", ()=>{
    const inputMeal=document.getElementById("InputMealName").value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMeal}`)
    .then(res => res.json())
    .then(data => displayMealName(data));


});
const displayMealName = data =>{
    const mealsDiv = document.getElementById("mealsBox");
    let mealName ="";
    if(data.meals){
        data.meals.forEach(meal =>{
            mealName =mealName +`<div onclick ="detailsOfIngredient('${meal.idMeal}')"id="meals">
            <img src = "${meal.strMealThumb}">
            <h3>${meal.strMeal}</h3>
            </div>`;

        });

        }
        else{
            mealName ="Sorry Your Input Doesn't Match";
        }
        mealsDiv.innerHTML =mealName;

    }   
    function detailsOfIngredient(mealId){
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => {
            displayIngredient(data.meals[0]);
        })
    }
const displayIngredient = meal=>{
    console.log(meal);
    const ingredientBox= document.getElementById("ingredientBox");
    ingredientBox.innerHTML =`
    <img id="mealImg" src="${meal.strMealThumb}">
    <h1> ${meal.strMeal}</h1>
    <h3>Ingredients</h3>
    <li>${meal.strMeasure1}${meal.strIngredient1}</li>
    <li>${meal.strMeasure2}${meal.strIngredient2}</li>
    <li>${meal.strMeasure3}${meal.strIngredient3}</li>
    <li>${meal.strMeasure4}${meal.strIngredient4}</li>
    <li>${meal.strMeasure5}${meal.strIngredient5}</li>
    <li>${meal.strMeasure7}${meal.strIngredient6}</li>
    <li>${meal.strMeasure6}${meal.strIngredient7}</li>
    <li>${meal.strMeasure7}${meal.strIngredient8}</li>
    `;

}

