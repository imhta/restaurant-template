const generateFood = i => `
    <article>
        <div class="img-wrapper">
            <img src="https://source.unsplash.com/200x200/?food,cooked,${i}">
        </div>
        <div class="content">
            <p>foodbar code # ${i}</p>
            <small class="text-primary">
                ${Math.floor(Math.random() * 20) + 1} $
            </small>
        <div>
    </article>
`;
const generateFoodCard = noOfCard => {
  let cards = "";
  for (let i = 1; i <= noOfCard; i++) {
    cards += generateFood(i);
  }
  return `
    <section class="card">
        ${cards}
    </section>
  `;
};
const MenuPage = () => {
  return `
    <main>
        <h1>Menu</h1>
        ${generateFoodCard(20)}
    </main>
    `;
};

export default MenuPage;
