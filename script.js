document.getElementById("dietForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let age = document.getElementById("age").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let activity = document.getElementById("activity").value;

    let dietPlan = generateDietPlan(age, weight, activity);

    document.getElementById("dietPlan").innerText = dietPlan;
    document.getElementById("result").classList.remove("hidden");
});

function generateDietPlan(age, weight, activity) {
    let calories;
    
    if (activity === "low") {
        calories = weight * 22;
    } else if (activity === "moderate") {
        calories = weight * 25;
    } else {
        calories = weight * 28;
    }

    return `
        Based on your age (${age} years), weight (${weight}kg), and activity level (${activity}), you need approximately ${calories} calories per day.
        
        Recommended Diet:
        - 🥗 Breakfast: Oatmeal with fruits and nuts
        - 🍲 Lunch: Grilled chicken with quinoa and vegetables
        - 🍛 Dinner: Salmon with brown rice and steamed greens
        - 🍎 Snacks: Almonds, yogurt, and fresh fruit
        - 💧 Stay Hydrated: Drink at least 2-3 liters of water daily
    `;
}
