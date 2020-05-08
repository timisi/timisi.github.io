function populate() {
  if (quiz.isEnded()) {
    //showScores();
  } else {
    //Show questions
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;
  }
} 

var questions = [
  new question(
    "Who is the Vice Predisent of Nigeria?",
    ["Yahaya Bello", "Muhamodu Buhari", "Yemi Oshinbajo", "Babatunde Fashola"],
    "Yemi Oshinbajo"
  ),
  new question(
    "Who is the Nigerian Senate President?",
    ["Seyi Tinubu", "Femi Falana", "Ahmed Lawan", "Dr. Goodluck"],
    "Ahmed Lawan"
  ),
  new question(
    "Who won  Nigeria 2015 election?",
    ["Yahaya Bello", "Muhamodu Buhari", "Yemi Oshinbajo", "Goodluck Jonathan"],
    "Muhamodu Buhari"
  ),
  new question(
    "What is the the full meaning of WHO?",
    [
      "World Health Organic",
      "World Health Organization",
      "World Human Open",
      "Word Help Organization",
    ],
    "World Health Organization"
  ),
  new question(
    "Who is the Nigeiran Minister for Petroleum?",
    [
      "Afolayan Toluwalope",
      "Chinedu Onyekachi",
      "Timipre Sylva",
      "Agbani Darego",
    ],
    "Timipre Sylva"
  ),
];

var quiz = new Quiz(questions);

populate();
