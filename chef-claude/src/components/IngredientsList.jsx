
export default function IngredientsList({ingredients, setRecipeShown}) {


    function showRecipe(){
        setRecipeShown(newRecipeShow => !newRecipeShow);
    }

    function recipeReady(){
        return <div className="recipe-ready">
            <div>
                <span>Ready for a recipe?</span>
                <p>Generate a recipe from a list of ingredients</p>
            </div>
            <button onClick = {showRecipe}>
                Get a recipe
            </button>
        </div>
    }

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