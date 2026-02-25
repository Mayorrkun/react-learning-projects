import "../css/Main.css";
import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import IngredientsList from "./IngredientsList.jsx";

function Main(){



    //"Chicken", "Oregano", "Tomatoes"
const [ingredients, setIngredients] = useState(["Chicken breasts","Most of the main spices","Olive oil", "Heavy Cream", "Chicken broth", "Parmesan cheese", "Spinach"]);
const [recipeShown, setRecipeShown] = useState(false);



//
function onSubmit(formData){
     const newIngredient = formData.get("ingredient");
     if(typeof newIngredient === 'string' && newIngredient.trim().length !== 0){
        setIngredients(ingredients => [...ingredients, newIngredient]);
     }
}

//




//




//
    


//
     return <main className="Main"> <form className="main-form" action={onSubmit}>
        
        <input aria-label="Add ingredient" type="text" name="ingredient" placeholder="e.g. oregano"/>
        <button>+ Add ingredient</button>

        </form>

        <IngredientsList ingredients={ingredients} setRecipeShown={setRecipeShown}/>
         {recipeShown ? <ClaudeRecipe/> : null}

     
        </main>
}

export default Main;