$(document).ready( function () {

console.log("ready");
  function leftFunction() {
      var x = Math.floor((Math.random() * rathers.length));
      document.getElementById("leftFunction").innerHTML = rathers[x];

  }

  function rightFunction() {
      var x = Math.floor((Math.random() * rathers.length));
      document.getElementById("rightFunction").innerHTML = rathers[x];

  }

  var rathers = [
      "only eat top ramen for 100 days",
      "write a 10 page research paper in two days",
      "code a 15 page website in three days",
      "walk to class in the pouring rain every day",
      "have 4 midterms in every class",
      "have a final worth 90% of  your grade",
      "have to carry around 10 textbooks for three weeks",
      "have  your professor yell at you",
      "have your professor make you redo a project",
      "have the internet not work for a week",
      "have 7 book sources for a research paper",
      "remember you have a paper due in an hour",
      "eat cold pizza for a month",
      "how to commute via public buss every day",
      "car breaks down right before class",
      "have your bike stolen",
      "have your car stolen",
      "bike breaks down on your way home",
      "walk with holy shoes",
      "code a 5 page websit in 3 hours",
      "have the printer break down right before the deadline",
      "have the school server be down for a week",
      "computer shuts down before you save your work",
      "have your phone stop working",
      "have a 50 degree classroom",
      "have a 75 degree classroom",
      "have all your work deleated for a class",
      "have snow cancel class, but not be able to leave the house",
      "have flooding cancel class, but not be able to leave the house",
      "have all your work coppied by someone else",
      "have all of your work stolen for a class",
      "have a new roommate you have never met before",
      "have a new roommate that  you have met, but isn't a good friend",
      "be locked in the college gyp for the night",
      "be locked in the college library over night",
      "pull an all nighter",
      "complete a project during the day, but have no free time",
      "construct a diarama in a week",
      "take a class where you're the only one who knows the answers",
      "be hazed by a group you want to join",
      "excell at classes you dislike, but fail your major classes",
      "have group members not help you with a group project",
      "only drink energy drinks for a month",
      "give a speech in front of the entire student body",
      "give a speech in front of all the faculty/staff",
      "go to the best party, but be behind in school",
      "have everyone tease  you for missing the best party",
      "use a Mac",
      "use an old PC",
      "have all your books paid for, but have to read them all",
      "constantly have your professor tell you to do better",
      "be constantly teased by your peers",
      "only eat leftovers for a month",
      "parents visit  and live with you for a week",
      "siblings visit and live with you for a month",
      "be the most disliked person for a week at your residence",
      "have writers block for a month",
      "not know how to complete your project",
      "be forced to learn a program for a project in a week",
      "wear sport shorts every day for a year",
      "wear jorts every day for a year",
      "wear chubbies every day for a year",
      "wear sweat pants every day for a year",
      "join the worst club you can think of",
      "join the weirdest club  you can think of",
      "be responsible for cleaning all of the residence halls",
      "be responsible for cleaning all of the classrooms",
      "work in the dining all for every meal all year",
      "have no student debt, but be unemployed for 10 years",
      "work in the fast food industry for 10 years after college",
    "Be called on by your profesor every time they ask a question",
       "Sit next to that person who takes up a lot of space all term",
       "Sit next to that person thats always eating or drinking all term",
       "Sit next to that person that looks at your work all term",
       "Sit next to the perfume/cologne person all term",
       "Constantly eating corn nuts in a lecture based class",
       "Fall asleep in class 90% of the time, having no control over it",
       "Have class every day, and be stuck on campus from 8am to 8pm",
       "Be late to class every day by 20 minutes",
       "Root for your schools team, but be the only one to attend",
       "Passionately root for the rivals schools team daily",
       "Forced into the highest-level english course with no experience",
       "Forced into the highest-level science/math course with no experience",
       "Dress super lazy every day for a year",
       "Dress super dressed up every day for a year",
       "Locked out of your car for the day/night",
       "Locked out of your dorm for the day/night",
       "Always turn in assignments late",
       "Be always constantly procrastinating",
       "Have a super relaxed and somewhat dirty roommate",
       "Have a s uper clean freak as your roommate",
       "One student knows all the answers, and the professor looks down on your class",
       "Take a math/writting class with people telling you you're consatntly wrong",
       "Take a gym class with atheletes from school, that constantly outshine you",
       "Only use pen for math and writting tests for a year",
       "Have to use ink and quill for an entire year",
       "Have to use a mechanical pencil only for an entire year",
       "have to use pen only for an entire year",
       "Have to use pencil only for an entire year",
       "Have to use pens only for a writting class, with a strict no error policy",
       "Have a happy/good teacher, with challenging requirements",
       "Have a mad/bad teacher, with minimal requirements",
       "Have a new/fist year teahcer, with complicated/confusing requirements",


    ]


//COPY AND PASTE JS FUNCTIONS INTO JS LIBRARY


  //$('#left').click(function(){
    //myFunction();

  //});

  //$('#right').click(function(){
  //  $('#left').toggle();

 // });

//DO NOT DELEATE BLEOW THIS POINT
});