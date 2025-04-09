import Recipe from './recipe.js';
import { DessertRecipe } from './recipe.js';

// Get references to the root and theme toggle button
const root = document.documentElement;  // <html> element
const toggleBtn = document.getElementById('theme-toggle');

// Check if the button exists
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        console.log('Theme toggle clicked'); // Debugging
        // Check if the current theme is dark
        const isDark = root.getAttribute('data-theme') === 'dark';

        // Toggle the theme between light and dark
        if (isDark) {
            root.setAttribute('data-theme', 'light'); // Switch to light theme
            toggleBtn.textContent = '🌙'; // Change button icon to dark mode
        } else {
            root.setAttribute('data-theme', 'dark'); // Switch to dark theme
            toggleBtn.textContent = '☀️'; // Change button icon to light mode
        }
    });
} else {
    console.error('Theme toggle button not found!');
}

// Recipe rendering code (already in your existing script)
document.addEventListener("DOMContentLoaded", () => {
    const recipeCard = document.querySelector('.recipe-container');  

    if (!recipeCard) {
        console.error('Recipe card container not found!');
        return;
    }

    // Create instances of Recipe class
    const strawberryCake = new Recipe(
        "Strawberry Cake",
        "Flour, sugar, strawberries, eggs",
        "Bowl, spoon",
        "60 minutes",
        "360F",
        8,
        recipeCard,
        "Dessert"
    );
    strawberryCake.createRecipe();  

    const vanillaCake = new Recipe(
        "Vanilla Cake",
        "Flour, sugar, vanilla extract, eggs",
        "Bowl, spoon",
        "60 minutes",
        "400F",
        6,
        recipeCard,
        "Dessert"
    );
    vanillaCake.createRecipe();  

    const chocolateCake = new DessertRecipe(
        "Chocolate Cake",
        "Flour, sugar, cocoa powder, eggs, butter",
        "Bowl, whisk, oven",
        "60 minutes",
        "350F",
        8,
        recipeCard,
        "High", 
        "Dessert"
    );
    chocolateCake.createRecipe();  
});
