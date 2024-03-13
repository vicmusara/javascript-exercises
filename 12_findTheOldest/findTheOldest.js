const findTheOldest = function(people) {
    const oldestPerson = people.reduce((oldest, current) => {
       
        const currentAge = current.death ? (current.death - current.birth) : (new Date().getFullYear() - current.birth);
        
        const oldestAge = oldest.death ? (oldest.death - oldest.birth) : (new Date().getFullYear() - oldest.birth);
        
        return currentAge > oldestAge ? current : oldest;
    });


    return oldestPerson.name;
};


// Do not edit below this line
module.exports = findTheOldest;
