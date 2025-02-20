const findTheOldest = function(people) {
    const currentDate = new Date();
    let sortedPeopleArray = people.sort((personA, personB) => {
        let personAAge = 0;
        let personBAge = 0;
        if ("yearOfDeath" in personA) {
            personAAge = personA.yearOfDeath - personA.yearOfBirth;
        }
        else {
            personAAge = currentDate.getFullYear() - personA.yearOfBirth;
        }
        if ("yearOfDeath" in personB) {
            personBAge = personB.yearOfDeath - personB.yearOfBirth;
        }
        else {
            personBAge = currentDate.getFullYear() - personB.yearOfBirth;
        }

        return personAAge - personBAge;
    });

    return sortedPeopleArray[sortedPeopleArray.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
