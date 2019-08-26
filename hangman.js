// make sure web page is loaded
if(document.readyState=='loading'){
  document.addEventListener('DOMContentLoaded', ready)
}
else {
  ready()
}

function ready(){
  var buttons = document.getElementsByClassName('startGame');
  var playWindows = document.getElementsByClassName('playWindow')
  for(var i=0; i<buttons.length; i++){
    button=buttons[i];
    playWindow = playWindows[i];
    playWindow.style.display="none";
    button.addEventListener("click", revealWindow);
  }
}

var gameRunning = false;
function revealWindow(event) {
  var children = event.target.parentElement.children;
  const playWindow = children[1]
  if(playWindow.style.display==="none"){
    playWindow.style.display="block";
    event.target.innerHTML = "Hide Game Window";
    if(gameRunning===false){
      playGame();
    }
  }
  else{
    playWindow.style.display="none"
    event.target.innerHTML = "Show Game Window"
  }
}

function playGame() {
  gameRunning = true;
  document.getElementsByClassName('restartGame')[0].style.display = "none";
  var gameOver = false;

  const words = ["able", "about", "account", "acid", "across", "act", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "air", "all", "almost", "among", "amount", "amusement", "and", "angle", "angry", "animal", "answer", "ant", "any", "apparatus", "apple", "approval", "arch", "argument", "arm", "army", "art", "as", "at", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "bad", "bag", "balance", "ball", "band", "base", "basin", "basket", "bath", "be", "beautiful", "because", "bed", "bee", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bit", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "box", "boy", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "but", "butter", "button", "by", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cat", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "cow", "crack", "credit", "crime", "cruel", "crush", "cry", "cup", "cup", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "day", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "do", "dog", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dry", "dust", "ear", "early", "earth", "east", "edge", "education", "effect", "egg", "elastic", "electric", "end", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "eye", "face", "fact", "fall", "false", "family", "far", "farm", "fat", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fly", "fold", "food", "foolish", "foot", "for", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "get", "girl", "give", "glass", "glove", "go", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "gun", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hat", "hate", "have", "he", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "how", "humour", "I", "ice", "idea", "if", "ill", "important", "impulse", "in", "increase", "industry", "ink", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "key", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "law", "lead", "leaf", "learning", "leather", "left", "leg", "let", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "lip", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "low", "machine", "make", "male", "man", "manager", "map", "mark", "market", "married", "mass", "match", "material", "may", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "net", "new", "news", "night", "no", "noise", "normal", "north", "nose", "not", "note", "now", "number", "nut", "observation", "of", "off", "offer", "office", "oil", "old", "on", "only", "open", "operation", "opinion", "opposite", "or", "orange", "order", "organization", "ornament", "other", "out", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pen", "pencil", "person", "physical", "picture", "pig", "pin", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "pot", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "put", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rat", "rate", "ray", "reaction", "reading", "ready", "reason", "receipt", "record", "red", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "rod", "roll", "roof", "room", "root", "rough", "round", "rub", "rule", "run", "sad", "safe", "sail", "salt", "same", "sand", "say", "scale", "school", "science", "scissors", "screw", "sea", "seat", "second", "secret", "secretary", "see", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "sex", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sky", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "so", "soap", "society", "sock", "soft", "solid", "some", "son", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "sun", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "tax", "teaching", "tendency", "test", "than", "that", "the", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tin", "tired", "to", "toe", "together", "tomorrow", "tongue", "tooth", "top", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "up", "use", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "war", "warm", "wash", "waste", "watch", "water", "wave", "wax", "way", "weather", "week", "weight", "well", "west", "wet", "wheel", "when", "where", "while", "whip", "whistle", "white", "who", "why", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yes", "yesterday", "you", "young", "Bernhard", "Breytenbach", "Android", ];

  var rightGuesses = [];
  var wrongGuesses = [];
  var wrongGuessCount = 0;
  displayHangMan(wrongGuessCount);
  var word = getRandomWord(words);
  var messages = document.getElementsByClassName('messages')[0];
  var underScores = document.getElementsByClassName('underScores')[0];
  messages.innerHTML = "Welcome to Hangman!";
  var blank = [];
  for(var i=0; i<word.length; i++){
    blank.push('_');
  }
  underScores.innerHTML = blank.join(' ');
  // get user guess and replace under scores
  document.addEventListener('keypress', function(event){
    var correct = document.getElementsByClassName('Correct')[0];

    var incorrect = document.getElementsByClassName('Incorrect')[0];

    userInput = String.fromCharCode(event.keyCode);
    const indeces = check(userInput, word);
    if(indeces.length>0){
      if(rightGuesses.includes(userInput)==false){
        messages.innerHTML = "You Guessed Right!";
        // if right, push to right array
        rightGuesses.push(userInput);
        correct.insertAdjacentHTML('beforeend', userInput + ' ');
        for (var i = 0; i < indeces.length; i++) {
          blank[indeces[i]] = userInput;
        }
        underScores.innerHTML = blank.join(' ');
      }
      else{
        messages.innerHTML = "You Already Guessed that, Try Again";
      }

      if((blank.includes('_')==false)){
        messages.innerHTML = "You Win!";
        gameOver=true;
        var playAgain = document.getElementsByClassName('restartGame')[0];
        playAgain.style.display = 'block';
        playAgain.addEventListener('click', function(event){
          // Restart Game
          document.getElementsByClassName('restartGame')[0].style.display = "none";
          blank = [];
          rightGuesses = [];
          wrongGuesses = [];
          wrongGuessCount = 0;
          displayHangMan(wrongGuessCount);
          word = getRandomWord(words);
          messages.innerHTML = "Welcome to Hangman";
          for(var i=0; i<word.length; i++){
            blank.push('_');
          }
          underScores.innerHTML = blank.join(' ');
          correct.innerHTML = '';
          incorrect.innerHTML = '';
        });
      }
    }
    else{
      if(!wrongGuesses.includes(userInput)){
        wrongGuessCount++;
        messages.innerHTML = "You Guessed Wrong, Try Again";
        // if wrong push to wrong array
        wrongGuesses.push(userInput);
        incorrect.insertAdjacentHTML('beforeend', userInput + ' ');
      }
      else{
        messages.innerHTML = "You Already Guessed that, Try Again";
      }
      if(displayHangMan(wrongGuessCount) === -1){
        messages.innerHTML = "Game Over! The word was " + "\""+word+"\"";
        gameOver=true;
        var playAgain = document.getElementsByClassName('restartGame')[0];
        playAgain.style.display = 'block';
        playAgain.addEventListener('click', function(event){
          // Restart Game
          document.getElementsByClassName('restartGame')[0].style.display = "none";
          blank = [];
          rightGuesses = [];
          wrongGuesses = [];
          wrongGuessCount = 0;
          displayHangMan(wrongGuessCount);
          word = getRandomWord(words);
          messages.innerHTML = "Welcome to Hangman";
          for(var i=0; i<word.length; i++){
            blank.push('_');
          }
          underScores.innerHTML = blank.join(' ');
          correct.innerHTML = "Correct" + "</br>";
          incorrect.innerHTML = "Incorrect" + "</br>";
        });
      }
    }
  });
}

// choose random word from file
function getRandomWord(words) {
  const word = words[Math.floor(Math.random()*words.length)];
  return word;
}

// check if guess is right or not
function check(userInput, word) {
  var indeces = []
  for (var i = 0; i < word.length; i++) {
    if(userInput.toUpperCase() === word[i].toUpperCase()){
      indeces.push(i);
    }
  }
  return indeces;
}

function displayHangMan(wrongGuessCount) {
  //var hangmanPicture = document.getElementsByClassName('playWindow')[0].style.backgroundImage;
  switch (wrongGuessCount) {
    case 0: // nothing
      document.getElementsByClassName('playWindow')[0].style.backgroundImage = "url('images/4.jpg')";
      break;
    case 1: // head
      document.getElementsByClassName('playWindow')[0].style.backgroundImage = "url('images/5.jpg')";
      break;
    case 2: // body
      document.getElementsByClassName('playWindow')[0].style.backgroundImage = "url('images/6.jpg')";
      break;
    case 3: // arm 1
      document.getElementsByClassName('playWindow')[0].style.backgroundImage = "url('images/7.jpg')";
      break;
    case 4: // arm 2
      document.getElementsByClassName('playWindow')[0].style.backgroundImage = "url('images/8.jpg')";
      break;
    case 5: // leg 1
      document.getElementsByClassName('playWindow')[0].style.backgroundImage = "url('images/9.jpg')";
      break;
    case 6: // leg 2 (hame over)
      document.getElementsByClassName('playWindow')[0].style.backgroundImage = "url('images/10.jpg')";
      return -1;
      break;
    default: // nothing
      document.getElementsByClassName('playWindow')[0].style.backgroundImage = "url('images/10.jpg')";
      return -1;
  }
}
