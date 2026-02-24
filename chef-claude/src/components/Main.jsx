import "../css/Main.css";
import { useState } from "react";



function Main(){
//"Chicken", "Oregano", "Tomatoes"
const [ingredients, setIngredients] = useState(["Chicken breasts","Most of the main spices","Olive oil", "Heavy Cream", "Chicken broth", "Parmesan cheese", "Spinach"]);

  function onSubmit(formData){
     const newIngredient = formData.get("ingredient");
     if(typeof newIngredient === 'string' && newIngredient.trim().length !== 0){
        setIngredients(ingredients => [...ingredients, newIngredient]);
     }
}

function recipeReady(){
      return <div className="recipe-ready">
          <div>
              <span>Ready for a recipe?</span>
              <p>Generate a recipe from a list of ingredients</p>
          </div>
          <button>
              Get a recipe
          </button>
      </div>
}

function onHand(){
      const body =  <div className="ingredients-list">
          <span>Ingredients on hand:</span>
          <ul>
              {ingredients.map((ingredient, index) => (
                 <li key={index}>{ingredient}</li>
              ))}
          </ul>

          {ingredients.length > 3 ? recipeReady() : null}
      </div>

    return ingredients.length === 0 ? null : body;


}
    

    const Main = <main> <form className="main-form" action={onSubmit}>
        
        <input aria-label="Add ingredient" type="text" name="ingredient" placeholder="e.g. oregano"/>
        <button>+ Add ingredient</button>

        </form>

        {onHand()}

     
        </main>

        
    

    return Main
}

export default Main;