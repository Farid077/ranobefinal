document.addEventListener('DOMContentLoaded', function () {
    let items = [
        { category: "Tags", tag: "Abandoned Children"}, { category: "Tags", tag: "Ability Steal"},
        { category: "Tags", tag: "Absent Parents"},  { category: "Tags", tag: "Absolute Duo"},
        { category: "Tags", tag: "Abusive Characters"},  { category: "Tags", tag: "Accelerated Growth"},
        { category: "Tags", tag: "Acting"},  { category: "Tags", tag: "Action"},
        { category: "Tags", tag: "Adapted to Anime"},  { category: "Tags", tag: "Adapted to Drama"},
        { category: "Tags", tag: "Adapted to Drama CD"},  { category: "Tags", tag: "Adapted to Game"},
        { category: "Tags", tag: "Adapted to Manga"},  { category: "Tags", tag: "Adapted to Manhua"},
        { category: "Tags", tag: "Adapted to Manhwa"},  { category: "Tags", tag: "Adapted to Movie"},
        { category: "Tags", tag: "Adapted to Visual Novel"},  { category: "Tags", tag: "Adopted Children"},
        { category: "Tags", tag: "Adopted Protagonist"},  { category: "Tags", tag: "Adultery"},
        { category: "Tags", tag: "advanced technology"},  { category: "Tags", tag: "adventure"},
        { category: "Tags", tag: "Adventurers"},  { category: "Tags", tag: "Affair"},
        { category: "Tags", tag: "Against the Gods"},  { category: "Tags", tag: "Age Progression"},
        { category: "Tags", tag: "Age Regression"},  { category: "Tags", tag: "Aggressive Characters"},
        { category: "Tags", tag: "Akame Ga Kill"},  { category: "Tags", tag: "Akame ga Kill!  "},
        { category: "Tags", tag: "Alchemist"},  { category: "Tags", tag: "Alchemy"},
        { category: "Tags", tag: "Aliens"},  { category: "Tags", tag: "All-Girls School"},
        { category: "Tags", tag: "Alternate World"},  { category: "Tags", tag: "Amnesia"},
        { category: "Tags", tag: "Amorality Protagonist"},  { category: "Tags", tag: "Amusement Park"},
        { category: "Tags", tag: "Ancient China"},  { category: "Tags", tag: "Ancient Times"},
        { category: "Tags", tag: "Androgynous Characters"},  { category: "Tags", tag: "Androids"},
        { category: "Tags", tag: "Angels"},  { category: "Tags", tag: "Angst"},
        { category: "Tags", tag: "Animal Characteristics"},  { category: "Tags", tag: "Animal Rearing"},
        { category: "Tags", tag: "Anti-Magic"},  { category: "Tags", tag: "Anti-social Protagonist"},
        { category: "Tags", tag: "Antihero Protagonist"},  { category: "Tags", tag: "Antique Shop"},
        { category: "Tags", tag: "Apartment Life"},  { category: "Tags", tag: "Apathetic Protagonist"},
        { category: "Tags", tag: "Apocalypse"},  { category: "Tags", tag: "Apocalyptic"},
        { category: "Tags", tag: "Appearance Changes"},  { category: "Tags", tag: "Appearance Different from Actual Age"},
        { category: "Tags", tag: "Archery"},  { category: "Tags", tag: "Aristocracy"},
        { category: "Tags", tag: "Arms Dealers"},  { category: "Tags", tag: "Army"},
        { category: "Tags", tag: "Army Building"},  { category: "Tags", tag: "Arranged Marriage"},
        { category: "Tags", tag: "Arrogant Characters"},  { category: "Tags", tag: "Artifact Crafting"},
        { category: "Tags", tag: "Artifacts"},  { category: "Tags", tag: "Artifacts Cultivation"},
        { category: "Tags", tag: "Artificial Intelligence"},  { category: "Tags", tag: "Artists"},
        { category: "Tags", tag: "Asexual Protagonist"},  { category: "Tags", tag: "ASOIAF"},
        { category: "Tags", tag: "Assassins"},  { category: "Tags", tag: "Astrologers"},
        { category: "Tags", tag: "Attack on Titan"},  { category: "Tags", tag: "Autism"},
        { category: "Tags", tag: "Automatons"},  { category: "Tags", tag: "Avatar: The Last Airbender"},
        { category: "Tags", tag: "Average-looking Protagonist"},  { category: "Tags", tag: "Award-winning Work"},
        { category: "Tags", tag: "Awkward Protagonist"},
        { category: "Tags", tag: "Bands"},
        { category: "Tags", tag: "Baseball"},  { category: "Tags", tag: "Based on a Movie"},
        { category: "Tags", tag: "Based on a Song"},  { category: "Tags", tag: "Based on a Video Game"},
        { category: "Tags", tag: "Based on a Visual Novel"},  { category: "Tags", tag: "Based on an Anime"},
        { category: "Tags", tag: "Basketball"},  { category: "Tags", tag: "Battle Academy"},
        { category: "Tags", tag: "Battle Competition"},  { category: "Tags", tag: "Battle Through the Heavens"},
        { category: "Tags", tag: "BDSM"},  { category: "Tags", tag: "Beast Companions"},
        { category: "Tags", tag: "Beastkin"},  { category: "Tags", tag: "Beasts"},
        { category: "Tags", tag: "Beautiful Couple"},  { category: "Tags", tag: "Beautiful Female Lead"},
        { category: "Tags", tag: "Bestiality"},  { category: "Tags", tag: "Betrayal"},
        { category: "Tags", tag: "Bickering Couple"},  { category: "Tags", tag: "Biochip"},
        { category: "Tags", tag: "Bisexual Protagonist"},  { category: "Tags", tag: "Black Belly"},
        { category: "Tags", tag: "Blackmail"},  { category: "Tags", tag: "Blacksmith"},
        { category: "Tags", tag: "Bleach"},  { category: "Tags", tag: "Blind Dates"},
        { category: "Tags", tag: "Blind Protagonist"},  { category: "Tags", tag: "Blood Manipulation"},
        { category: "Tags", tag: "Bloodlines"},  { category: "Tags", tag: "Body Swap"},
        { category: "Tags", tag: "Body Tempering"},  { category: "Tags", tag: "Body-double"},
        { category: "Tags", tag: "Bodyguards"},  { category: "Tags", tag: "Books"},
        { category: "Tags", tag: "Bookworm"},  { category: "Tags", tag: "Boss-Subordinate Relationship"},
        { category: "Tags", tag: "Brainwashing"},  { category: "Tags", tag: "Breast Fetish"},
        { category: "Tags", tag: "Broken Engagement"},  { category: "Tags", tag: "Brother Complex"},
        { category: "Tags", tag: "Brotherhood"},  { category: "Tags", tag: "Buddhism"},
        { category: "Tags", tag: "Bullying"},  { category: "Tags", tag: "Business"},
        { category: "Tags", tag: "Business Management"},  { category: "Tags", tag: "Businessmen"},
        { category: "Tags", tag: "Butlers"},
        { category: "Tags", tag: "Calm Protagonist"},
        { category: "Tags", tag: "Campione!"},  { category: "Tags", tag: "Cannibalism"},
        { category: "Tags", tag: "Card Games"},  { category: "Tags", tag: "Carefree Protagonist"},
        { category: "Tags", tag: "Caring Protagonist"},  { category: "Tags", tag: "Cautious Protagonist"},
        { category: "Tags", tag: "Celebrities"},  { category: "Tags", tag: "CEO"},
        { category: "Tags", tag: "Chapters Reviews"},  { category: "Tags", tag: "Character Development"},
        { category: "Tags", tag: "Character Growth"},  { category: "Tags", tag: "Charismatic Protagonist"},
        { category: "Tags", tag: "Charlotte (anime)"},  { category: "Tags", tag: "Charming Protagonist"},
        { category: "Tags", tag: "Chat Rooms"},  { category: "Tags", tag: "Chatgroup"},
        { category: "Tags", tag: "Cheat"},  { category: "Tags", tag: "Cheats"},
        { category: "Tags", tag: "Chefs"},  { category: "Tags", tag: "Child Abuse"},
        { category: "Tags", tag: "Child Protagonist"},  { category: "Tags", tag: "Childcare"},
        { category: "Tags", tag: "Childhood Friends"},  { category: "Tags", tag: "Childhood Love"},
        { category: "Tags", tag: "Childhood Promise"},  { category: "Tags", tag: "Childish Protagonist"},
        { category: "Tags", tag: "Chin"},  { category: "Tags", tag: "Chivalry of a Failed Knight"},
        { category: "Tags", tag: "Chuunibyou"},  { category: "Tags", tag: "Clan Building"},
        { category: "Tags", tag: "Classic"},  { category: "Tags", tag: "Clever Protagonist"},
        { category: "Tags", tag: "Cliche"},  { category: "Tags", tag: "Clingy Lover"},
        { category: "Tags", tag: "Clones"},  { category: "Tags", tag: "Clubs"},
        { category: "Tags", tag: "Clumsy Love Interests"},  { category: "Tags", tag: "Co-Workers"},
        { category: "Tags", tag: "Cohabitation"},  { category: "Tags", tag: "Cold Love Interests"},
        { category: "Tags", tag: "Cold Protagonist"},  { category: "Tags", tag: "Heroes"},
        { category: "Tags", tag: "Collection of Short Stories"},  { category: "Tags", tag: "College or University"},
        { category: "Tags", tag: "College/University"},  { category: "Tags", tag: "Coma"},
        { category: "Tags", tag: "Comedic Undertone"},  { category: "Tags", tag: "comedy"},
        { category: "Tags", tag: "Coming of Age"},  { category: "Tags", tag: "Complex Family Relationships"},
        { category: "Tags", tag: "Conditional Power"},  { category: "Tags", tag: "Confident Protagonist"},
        { category: "Tags", tag: "Confinement"},  { category: "Tags", tag: "Conflicting Loyalties"},
        { category: "Tags", tag: "Conspiracies"},  { category: "Tags", tag: "Contracts"},
        { category: "Tags", tag: "Cooking" },    { category: "Tags", tag: "Corruption" },
        { category: "Tags", tag: "Cosmic Wars" },    { category: "Tags", tag: "Couple Growth" },
        { category: "Tags", tag: "Court Official" },    { category: "Tags", tag: "Cousins" },
        { category: "Tags", tag: "Cowardly Protagonist" },    { category: "Tags", tag: "Crafting" },
        { category: "Tags", tag: "Crazy Protagonist" },    { category: "Tags", tag: "Crime" },
        { category: "Tags", tag: "Criminals" },    { category: "Tags", tag: "Cross-dressing" },
        { category: "Tags", tag: "Crossover" },    { category: "Tags", tag: "Cruel Characters" },
        { category: "Tags", tag: "Cryostasis" },    { category: "Tags", tag: "Cultivation" },
        { category: "Tags", tag: "Cunning Protagonist" },    { category: "Tags", tag: "Curious Protagonist" },
        { category: "Tags", tag: "Curses" },    { category: "Tags", tag: "Cute Children" },
        { category: "Tags", tag: "Cute Protagonist" },    { category: "Tags", tag: "Cute Story" },
        { category: "Tags", tag: "Cyberpunk" },    { category: "Tags", tag: "Dancers" },
        { category: "Tags", tag: "DanMachi" },    { category: "Tags", tag: "Dao Companion" },
        { category: "Tags", tag: "Dao Comprehension" },    { category: "Tags", tag: "Daoism" },
        { category: "Tags", tag: "Dark" },
        { category: "Tags", tag: "Dark Souls" },
        { category: "Tags", tag: "DC Universe" },
        { category: "Tags", tag: "Dead Protagonist" },
        { category: "Tags", tag: "Death" },
        { category: "Tags", tag: "Death of Loved Ones" },
        { category: "Tags", tag: "Debts" },
        { category: "Tags", tag: "Delinquents" },
        { category: "Tags", tag: "Delusions" },
        { category: "Tags", tag: "Demi-Humans" },
        { category: "Tags", tag: "Demon Lord" },
        { category: "Tags", tag: "Demonic Cultivation Technique" },
        { category: "Tags", tag: "Demons" },
        { category: "Tags", tag: "Dense Protagonist" },
        { category: "Tags", tag: "Depictions of Cruelty" },
        { category: "Tags", tag: "Depression" },
        { category: "Tags", tag: "Destiny" },
        { category: "Tags", tag: "Detective Conan" },
        { category: "Tags", tag: "Detectives" },
        { category: "Tags", tag: "Determined Protagonist" },
        { category: "Tags", tag: "DEVIL" },
        { category: "Tags", tag: "Devils" },
        { category: "Tags", tag: "Devoted Love Interests" },
        { category: "Tags", tag: "Different Social Status" },
        { category: "Tags", tag: "Diplomacy" },
        { category: "Tags", tag: "Disabilities" },
        { category: "Tags", tag: "Discrimination" },
        { category: "Tags", tag: "Disfigurement" },
        { category: "Tags", tag: "Dishonest Protagonist" },
        { category: "Tags", tag: "Distrustful Protagonist" },
        { category: "Tags", tag: "Divination" },
        { category: "Tags", tag: "Divination Enlightenment" },
        { category: "Tags", tag: "Divine Protection" },
        { category: "Tags", tag: "Divorce" },
        { category: "Tags", tag: "Doctors" },
        { category: "Tags", tag: "Dolls or Puppets" },
        { category: "Tags", tag: "Domestic Affairs" },
        { category: "Tags", tag: "Doppelganger" },
        { category: "Tags", tag: "Doting Love Interests" },
        { category: "Tags", tag: "Doting Older Siblings" },
        { category: "Tags", tag: "Doting Parents" },
        { category: "Tags", tag: "Doulou Dalu" },
        { category: "Tags", tag: "Douluo Dalu" },
        { category: "Tags", tag: "Dragon" },
        { category: "Tags", tag: "Dragon Ball" },
        { category: "Tags", tag: "Dragon Riders" },
        { category: "Tags", tag: "Dragon Slayers" },
        { category: "Tags", tag: "Dragons" },
        { category: "Tags", tag: "Drama" },
        { category: "Tags", tag: "Dream" },
        { category: "Tags", tag: "Dreams" },
        { category: "Tags", tag: "Drugs" },
        { category: "Tags", tag: "Druids" },
        { category: "Tags", tag: "Dungeon" },
        { category: "Tags", tag: "Dungeon Master" },
        { category: "Tags", tag: "Dungeons" },
        { category: "Tags", tag: "Dwarfs" },
        { category: "Tags", tag: "Dwarves" },
        { category: "Tags", tag: "Dystopia" },
        { category: "Tags", tag: "e-Sports" },
        { category: "Tags", tag: "Early Romance" },
        { category: "Tags", tag: "Earth Invasion" },
        { category: "Tags", tag: "Eastern Setting" },
        { category: "Tags", tag: "Easy Going Life" },
        { category: "Tags", tag: "Economics" },
        { category: "Tags", tag: "Egoist" },
        { category: "Tags", tag: "Egoist Protagonist" },
        { category: "Tags", tag: "Eidetic Memory" },
        { category: "Tags", tag: "Elderly Protagonist" },
        { category: "Tags", tag: "Elemental Magic" },
        { category: "Tags", tag: "Elementalists" },
        { category: "Tags", tag: "Elves" },
        { category: "Tags", tag: "Emotionally Weak Protagonist" },
        { category: "Tags", tag: "Empires" },
        { category: "Tags", tag: "Enemies" },
        { category: "Tags", tag: "Enemies Become Allies" },
        { category: "Tags", tag: "Enemies Become Lovers" },
        { category: "Tags", tag: "Engagement" },
        { category: "Tags", tag: "Engineer" },
        { category: "Tags", tag: "Enlightenment" },
        { category: "Tags", tag: "Entertainment" },
        { category: "Tags", tag: "Episodic" },
        { category: "Tags", tag: "Eunuch" },
        { category: "Tags", tag: "European Ambience" },
        { category: "Tags", tag: "Evil Gods" },
        { category: "Tags", tag: "Evil Organization" },
        { category: "Tags", tag: "Evil Organizations" },
        { category: "Tags", tag: "Evil Protagonist" },
        { category: "Tags", tag: "Evil Religions" },
        { category: "Tags", tag: "Evolution" },
        { category: "Tags", tag: "Exhibitionism" },
        { category: "Tags", tag: "Exorcism" },
        { category: "Tags", tag: "Eye Powers" },
        { category: "Tags", tag: "Face Slapping" },
        { category: "Tags", tag: "Fairies" },
        { category: "Tags", tag: "Fairy Tail" },
        { category: "Tags", tag: "Fallen Angels" },
        { category: "Tags", tag: "Fallen Nobility" },
        { category: "Tags", tag: "Fallout: New Vegas" },
        { category: "Tags", tag: "Familial Love" },
        { category: "Tags", tag: "Familiars" },
        { category: "Tags", tag: "Family" },
        { category: "Tags", tag: "Family Business" },
        { category: "Tags", tag: "Family Conflict" },
        { category: "Tags", tag: "Famous Parents" },
        { category: "Tags", tag: "Famous Protagonist" },
        { category: "Tags", tag: "Fan-fiction" },
        { category: "Tags", tag: "Fanaticism" },
        { category: "Tags", tag: "Fanfiction" },
        { category: "Tags", tag: "Fantasy" },
        { category: "Tags", tag: "Fantasy Creatures" },
        { category: "Tags", tag: "Fantasy Magic" },
        { category: "Tags", tag: "Fantasy World" },
        { category: "Tags", tag: "Farming" },
        { category: "Tags", tag: "Fast Cultivation" },
        { category: "Tags", tag: "Fast Learner" },
        { category: "Tags", tag: "Fat Protagonist" },
        { category: "Tags", tag: "Fat to Fit" },
        { category: "Tags", tag: "Fate/Grand Order" },
        { category: "Tags", tag: "Fate/stay night" },
        { category: "Tags", tag: "Fated Lovers" },
        { category: "Tags", tag: "Fearless Protagonist" },
        { category: "Tags", tag: "Fellatio" },
        { category: "Tags", tag: "Female Lead" },
        { category: "Tags", tag: "Female Master" },
        { category: "Tags", tag: "Female Protagonist" },
        { category: "Tags", tag: "Female to Male" },
        { category: "Tags", tag: "Feng Shui" },
        { category: "Tags", tag: "Firearms" },
        { category: "Tags", tag: "First Love" },
        { category: "Tags", tag: "First-time Intercourse" },
        { category: "Tags", tag: "Flashbacks" },
        { category: "Tags", tag: "Fleet Battles" },
        { category: "Tags", tag: "Folklore" },
        { category: "Tags", tag: "Food Shopkeeper" },
        { category: "Tags", tag: "Forced into a Relationship" },
        { category: "Tags", tag: "Forced Living Arrangements" },
        { category: "Tags", tag: "Forced Marriage" },
        { category: "Tags", tag: "Forgetful Protagonist" },
        { category: "Tags", tag: "Forging" },
        { category: "Tags", tag: "Former Hero" },
        { category: "Tags", tag: "Found Family" },
        { category: "Tags", tag: "Fourth Disaster" },
        { category: "Tags", tag: "Fourth Wall" },
        { category: "Tags", tag: "Fox Spirits" },
        { category: "Tags", tag: "Friends Become Enemies" },
        { category: "Tags", tag: "Friendship" },
        { category: "Tags", tag: "From the first POV" },
        { category: "Tags", tag: "Futanari" },
        { category: "Tags", tag: "Futuristic Setting" },
        { category: "Tags", tag: "Galge" },
        { category: "Tags", tag: "Gambling" },
        { category: "Tags", tag: "Game" },
        { category: "Tags", tag: "Game Element" },
        { category: "Tags", tag: "Game Elements" },
        { category: "Tags", tag: "Game of Thrones" },
        { category: "Tags", tag: "Game Ranking System" },
        { category: "Tags", tag: "GameLit" },
        { category: "Tags", tag: "Gamer" },
        { category: "Tags", tag: "Gamers" },
        { category: "Tags", tag: "Gaming/E-Sport" },
        { category: "Tags", tag: "Gandam" },
        { category: "Tags", tag: "Gangs" },
        { category: "Tags", tag: "Gate to Another World" },
        { category: "Tags", tag: "Gender Bender" },
        { category: "Tags", tag: "Genderless Protagonist" },
        { category: "Tags", tag: "Generals" },
        { category: "Tags", tag: "Genetic Modifications" },
        { category: "Tags", tag: "Genius Protagonist" },
        { category: "Tags", tag: "Genshin Impact" },
        { category: "Tags", tag: "Ghosts" },
        { category: "Tags", tag: "Gintama" },
        { category: "Tags", tag: "Girl's Love Subplot" },
        { category: "Tags", tag: "Gladiators" },
        { category: "Tags", tag: "Glasses-wearing Love Interests" },
        { category: "Tags", tag: "Glasses-wearing Protagonist" },
        { category: "Tags", tag: "Goblins" },
        { category: "Tags", tag: "God Protagonist" },
        { category: "Tags", tag: "God-human Relationship" },
        { category: "Tags", tag: "Goddess" },
        { category: "Tags", tag: "Goddesses" },
        { category: "Tags", tag: "Godly Powers" },
        { category: "Tags", tag: "Gods" },
        { category: "Tags", tag: "Godzilla" },
        { category: "Tags", tag: "Golems" },
        { category: "Tags", tag: "Gore" },
        { category: "Tags", tag: "Gothic" },
        { category: "Tags", tag: "Grave Keepers" },
        { category: "Tags", tag: "Grimdark" },
        { category: "Tags", tag: "Grinding" },
        { category: "Tags", tag: "Guardian Relationship" },
        { category: "Tags", tag: "Guilds" },
        { category: "Tags", tag: "Gunfighters" },
        { category: "Tags", tag: "Hackers" },
        { category: "Tags", tag: "Half-human Protagonist" },
        { category: "Tags", tag: "Handjob" },
        { category: "Tags", tag: "Handsome Male Lead" },
        { category: "Tags", tag: "Hard Sci-fi" },
        { category: "Tags", tag: "Hard-Working Protagonist" },
        { category: "Tags", tag: "Harem" },
        { category: "Tags", tag: "Harem-seeking Protagonist" },
        { category: "Tags", tag: "Harry Potter" },
        { category: "Tags", tag: "Harsh Training" },
        { category: "Tags", tag: "Hated Protagonist" },
        { category: "Tags", tag: "Healers" },
        { category: "Tags", tag: "Healing" },
        { category: "Tags", tag: "Heartwarming" },
        { category: "Tags", tag: "Heaven" },
        { category: "Tags", tag: "Heavenly Tribulation" },
        { category: "Tags", tag: "Hell" },
        { category: "Tags", tag: "Helpful Protagonist" },
        { category: "Tags", tag: "Herbalist" },
        { category: "Tags", tag: "Heroes" },
        { category: "Tags", tag: "Heterochromia" },
        { category: "Tags", tag: "Hidden Abilities" },
        { category: "Tags", tag: "Hidden Gem" },
        { category: "Tags", tag: "Hiding Identity" },
        { category: "Tags", tag: "Hiding True Abilities" },
        { category: "Tags", tag: "Hiding True Identity" },
        { category: "Tags", tag: "High Fantasy" },
        { category: "Tags", tag: "High School DxD" },
        { category: "Tags", tag: "Highschool DxD" },
        { category: "Tags", tag: "Highschool of the Dead" },
        { category: "Tags", tag: ". . ."},
    ];
  
    const itemList = document.getElementById('itemList');
  
    function renderItems(category) {
      // Clear existing items
     itemList.innerHTML = '';
  
      // Filter items based on the selected category
      const filteredItems = items.filter(item => item.category === category);
  
      // Render filtered items
      filteredItems.forEach(item => {
        const itemElement = createItemElement(item);
        itemList.appendChild(itemElement);
      });
    }
  
    function createItemElement(item) {
      const itemElement = document.createElement('div');
      itemElement.classList.add('list-item');
  
      // Create and append item content based on your existing item element structure
      if (item.tag) {
        itemElement.innerHTML = `
            <a href="#" title="${item.category} - ${item.tag}">${item.tag}</a>
        `;
      } 
      return itemElement;
    }
  
  
    // Initial render (show the first category by default)
    renderItems('Tags');
  });