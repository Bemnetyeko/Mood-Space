document.addEventListener("DOMContentLoaded", () => {
  const moodButtons = document.querySelectorAll(".mood-buttons button");
  const greeting = document.querySelector(".alien-greeting");

  const moodResponses = {
    happy: "🌈 Yay! I'm happy you're happy! Spread those good vibes across the galaxy. 🚀",
    stressed: "🌪️ Oh no! Take a deep breath, space traveller. You’re doing better than you think. 🌌",
    tired: "😴 Space naps are essential. You deserve a recharge, captain. 💫"
  };

  moodButtons.forEach(button => {
    button.addEventListener("click", () => {
      const mood = button.dataset.mood;
      if (moodResponses[mood]) {
        greeting.innerHTML = moodResponses[mood];
      }
    });
  });
});
