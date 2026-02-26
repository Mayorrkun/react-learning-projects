import "../css/Main.css";
import { useState , useRef, useEffect} from "react";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import IngredientsList from "./IngredientsList.jsx";
import {getRecipeFromMistral} from "../js/ai.js";

function Main(){



    //"Chicken", "Oregano", "Tomatoes"
const [ingredients, setIngredients] = useState([]);
const [recipe, setRecipe] = useState(null);
const recipeSection = useRef(null);
//
async function showRecipe(){
      const recipeMarkdown = await getRecipeFromMistral(ingredients);
      setRecipe(newRecipe => ( recipeMarkdown));
    }

    console.log(recipe ? true: false);
useEffect(() => {
    recipeSection.current.scrollIntoView({behavior: "smooth",});
},[recipe]);


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

        <IngredientsList ingredients={ingredients} showRecipe={showRecipe}/>
         <div className="ingredients-list" ref={recipeSection}>
             {recipe ? <ClaudeRecipe recipe = {recipe}/> : null}
         </div>


     
        </main>
}

export default Main;