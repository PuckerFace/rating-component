const rating = document.querySelectorAll('.btn');
const submit = document.getElementById('submit');
const ratedCard = document.getElementById('rated-card');
const ratingCard = document.getElementById('rating-card');
const finalRating = document.getElementById('final-rating');

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener('click', (e) => {
    console.log('clicked');
    let score = i + 1;
    console.log(score);
    finalRating.innerHTML = `You selected ${score} out of 5`;

    let button = e.currentTarget;
    rating.forEach((btn) => btn !== button && btn.classList.remove('white'));
    button.classList.toggle('white');
  });
}
submit.addEventListener('click', () => {
  ratingCard.classList.toggle('hidden');
  ratedCard.classList.toggle('hidden');
});
