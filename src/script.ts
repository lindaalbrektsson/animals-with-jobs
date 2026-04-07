import fetchAnimals from "./modules/fetchAnimals.js";
import renderListOfAnimals from "./modules/renderListOfAnimals.js";
import renderAnimalInfo from "./modules/renderAnimalInfo.js";

async function init() {
  const animals = await fetchAnimals();

  if (animals) {
    renderListOfAnimals(animals);

    const firstAnimal = animals[0];

    if (firstAnimal) {
      renderAnimalInfo(firstAnimal);
    }
  }
}

init();
