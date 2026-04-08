//Titta i index.html och hitta den UL där listan på djur ska skrivas ut.
//Rendera ut en lista över djurens namn på skärmen
//Varje list-item ska ha en event-lyssnare som kallar på "renderAnimalInfo"
//Typa upp funktionens parameter
import renderAnimalInfo from "./renderAnimalInfo.js";
export default function renderListOfAnimals(animals) {
    const animalListContainer = document.querySelector(".list-of-animals ul");
    if (!animalListContainer)
        return;
    for (const animal of animals) {
        const li = document.createElement("li");
        li.textContent = animal.name;
        if (animals[0] === animal) {
            li.classList.add("active");
        }
        li.addEventListener("click", () => {
            document.querySelectorAll(".list-of-animals li").forEach((listItem) => {
                listItem.classList.remove("active");
            });
            li.classList.add("active");
            renderAnimalInfo(animal);
        });
        animalListContainer.appendChild(li);
    }
}
