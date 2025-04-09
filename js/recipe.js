export default class Recipe {
    constructor(name, ingredients, tools, time, temperature, serving_size, container, category = "General") {
      this.name = name;
      this.ingredients = ingredients;
      this.tools = tools;
      this.time = time;
      this.temperature = temperature;
      this.serving_size = serving_size;
      this.container = container;
      this.category = category;  // New property for recipe category
    }
  
    createRecipe() {
      console.log(`Creating recipe: ${this.name}`);  // Debugging
  
      let RecipeName = document.createElement('h2');
      let RecipeIngredients = document.createElement('p');
      let RecipeTools = document.createElement('p');
      let RecipeTime = document.createElement('p');
      let RecipeTemperature = document.createElement('p');
      let RecipeServingSize = document.createElement('p');
      let RecipeCategory = document.createElement('p');  // New element for category
  
      RecipeName.textContent = `Name: ${this.name}`;
      RecipeIngredients.textContent = `Ingredients: ${this.ingredients}`;
      RecipeTools.textContent = `Tools: ${this.tools}`;
      RecipeTime.textContent = `Time: ${this.time}`;
      RecipeTemperature.textContent = `Temp: ${this.temperature}`;
      RecipeServingSize.textContent = `Serves: ${this.serving_size} people`;
      RecipeCategory.textContent = `Category: ${this.category}`;  // Display category
  
      const card = document.createElement("div");
      card.classList.add("single-recipe");
  
      card.append(RecipeName, RecipeIngredients, RecipeTools, RecipeTime, RecipeTemperature, RecipeServingSize, RecipeCategory);
  
      // Add the card to the container
      this.container.append(card);
    }
  }
  
  // DessertRecipe is a child class that inherits from Recipe
  export class DessertRecipe extends Recipe {
    constructor(name, ingredients, tools, time, temperature, serving_size, container, sweetnessLevel, category) {
      super(name, ingredients, tools, time, temperature, serving_size, container, category); // Calling the parent constructor
      this.sweetnessLevel = sweetnessLevel;  // New property specific to DessertRecipe
    }
  
    describeSweetness() {
      const p = document.createElement("p");
      p.textContent = `Sweetness level: ${this.sweetnessLevel}`;
      this.container.appendChild(p);
    }
  
    createRecipe() {
      super.createRecipe();  // Calling the parent method to create the basic recipe
      this.describeSweetness();  // Adding the new method specific to DessertRecipe
    }
  }
  