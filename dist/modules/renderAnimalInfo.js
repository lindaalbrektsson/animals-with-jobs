//Titta i index.html och hitta den div där info om varje djur ska skrivas ut.
//Typa upp funktionens parameter
//=====================================================//
//Rendera ut bilden på djuret
//Skriv ut djurets namn och typ av djur. Följ det här formatet: "Gina the Giraffe"
//=====================================================//
//=====================================================//
//Skriv ut djurets jobb och om djuret är anställd just nu eller inte.
//Följ formatet: "Trash Analyst - Currently (not) employed"
//Använd template literals
//=====================================================//
//=====================================================//
//Skriv ut djurets ålder (age). EJ året de är födda. Utan hur gamla de är.
//Följ formatet:  Age: 9 years old.
//Använd template literals
//Bonus om du skriver ut rubriken "Age" med CSS.
//=====================================================//
//=====================================================//
//Skriv ut en lista på djurets färdigheter
//Följ formatet:    Skills:
//                  Flying
//                  Eating
//Bonus om du skriver ut rubriken "Skills" med CSS.
//=====================================================//
export default function renderAnimalInfo(animal) {
    const animalInfoContainer = document.querySelector(".animal-info");
    if (!animalInfoContainer)
        return;
    animalInfoContainer.innerHTML = "";
    const image = document.createElement("img");
    image.src = `./images/${animal.imageUrl}`;
    image.alt = animal.name;
    const nameAndType = document.createElement("h2");
    nameAndType.textContent = `${animal.name} the ${animal.kindOfAnimal}`;
    const employmentInfo = document.createElement("p");
    employmentInfo.textContent = `${animal.job} - Currently ${animal.employmentEndDate ? "not employed" : "employed"}`;
    const age = new Date().getFullYear() - Number(animal.birthYear);
    const ageInfo = document.createElement("p");
    ageInfo.textContent = `Age: ${age} years old.`;
    const skillsHeading = document.createElement("h3");
    skillsHeading.textContent = "Skills:";
    const skillsList = document.createElement("ul");
    if (Array.isArray(animal.skills)) {
        for (const skill of animal.skills) {
            const li = document.createElement("li");
            li.textContent = skill;
            skillsList.appendChild(li);
        }
    }
    else if (typeof animal.skills === "string") {
        const li = document.createElement("li");
        li.textContent = animal.skills;
        skillsList.appendChild(li);
    }
    animalInfoContainer.appendChild(image);
    animalInfoContainer.appendChild(nameAndType);
    animalInfoContainer.appendChild(employmentInfo);
    animalInfoContainer.appendChild(ageInfo);
    animalInfoContainer.appendChild(skillsHeading);
    animalInfoContainer.appendChild(skillsList);
}
