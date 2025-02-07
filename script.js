document.getElementById("dietForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let age = parseInt(document.getElementById("age").value);
    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let activity = document.getElementById("activity").value;

    let calories = calculateCalories(weight, activity);
    let dietPlan = generateDietPlan(age, calories);

    document.getElementById("dietPlan").innerHTML = dietPlan;
    document.getElementById("result").classList.remove("hidden");
});

function calculateCalories(weight, activity) {
    let baseCalories;

    if (activity === "low") {
        baseCalories = weight * 22;
    } else if (activity === "moderate") {
        baseCalories = weight * 25;
    } else {
        baseCalories = weight * 28;
    }

    return Math.round(baseCalories);
}

function generateDietPlan(age, calories) {
    let breakfast, lunch, dinner, snacks;

    if (age < 18) {
        breakfast = "🥣 Whole grain cereal with milk and fruit";
        lunch = "🍗 Chicken sandwich with veggies";
        dinner = "🍲 Grilled fish with mashed potatoes";
        snacks = "🍎 Fruit, yogurt, and a handful of nuts";
    } else if (age < 40) {
        breakfast = "🥑 Avocado toast with eggs";
        lunch = "🥗 Grilled chicken with quinoa and salad";
        dinner = "🍛 Salmon with brown rice and vegetables";
        snacks = "🥜 Protein shake, nuts, or Greek yogurt";
    } else {
        breakfast = "🍵 Oatmeal with flaxseeds and banana";
        lunch = "🥦 Steamed vegetables with grilled tofu";
        dinner = "🥑 Avocado and quinoa bowl";
        snacks = "🍊 Citrus fruits and mixed nuts";
    }

    return `
        <strong>🍽️ Your Daily Calorie Requirement: ${calories} kcal</strong> <br><br>
        <strong>🌞 Breakfast:</strong> ${breakfast} <br>
        <strong>🍱 Lunch:</strong> ${lunch} <br>
        <strong>🌙 Dinner:</strong> ${dinner} <br>
        <strong>🍏 Snacks:</strong> ${snacks} <br><br>
        💧 <strong>Stay Hydrated:</strong> Drink at least 2-3 liters of water daily! 
    `;
}
