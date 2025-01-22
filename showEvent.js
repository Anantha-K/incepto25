const events = [
    // Technical events
    {
      name: "Cube Casting",
      img: "cube_casting.jpg",
      price: 100,
      desc: `All participants must register before the deadline.
      Materials for the workability test and cube casting will be provided.
     A mix design report of M30 is to be prepared as per IS 10262:2019. (Material properties will be provided.)
     Workability test and cube casting will be conducted on 31/01/2025
     Testing of cubes is scheduled at 10:00am on the date 07/02/2025 at Material Testing Lab, FISAT.
     Only 4 members are allowed per team and must carry their college ID cards for verification.
      Certicates will be provided to all participants.
     `,
      date: "2025-02-01",
      type: "Technical"
    },
    {
      name: "Idea Pitching",
      img: "idea_pitching.jpg",
      price: 150,
      desc: "Pitch your innovative ideas.",
      date: "2025-02-02",
      type: "Technical"
    },
    {
      name: "Geothon",
      img: "geothon.jpg",
      price: 200,
      desc: "A geological hackathon challenge.",
      date: "2025-02-03",
      type: "Technical"
    },
    {
      name: "Quiz",
      img: "quiz.jpg",
      price: 50,
      desc: "Test your knowledge in this quiz event.",
      date: "2025-02-04",
      type: "Technical"
    },
    {
      name: "Autocad",
      img: "autocad.jpg",
      price: 300,
      desc: "An AutoCAD design competition.",
      date: "2025-02-05",
      type: "Technical"
    },
    {
      name: "Disaster Zone Escape",
      img: "disaster_escape.jpg",
      price: 200,
      desc: "Escape the disaster zone with teamwork.",
      date: "2025-02-06",
      type: "Technical"
    },
    {
      name: "The Time Capsule Design",
      img: "time_capsule.jpg",
      price: 250,
      desc: "Design a futuristic time capsule.",
      date: "2025-02-07",
      type: "Technical"
    },
    {
      name: "Debate",
      img: "debate.jpg",
      price: 100,
      desc: "Debate on various interesting topics.",
      date: "2025-02-08",
      type: "Technical"
    },
  
    // Fun events
    {
      name: "Treasure Hunt",
      img: "treasure_hunt.jpg",
      price: 100,
      desc: "Find the hidden treasure.",
      date: "2025-02-09",
      type: "Fun"
    },
    {
      name: "Spot Choreo",
      img: "spot_choreo.jpg",
      price: 120,
      desc: "Show off your choreography skills on the spot.",
      date: "2025-02-10",
      type: "Fun"
    },
    {
      name: "Escape Room",
      img: "escape_room.jpg",
      price: 150,
      desc: "Solve puzzles to escape the room.",
      date: "2025-02-11",
      type: "Fun"
    },
    {
      name: "The Glass Tower Challenge",
      img: "glass_tower.jpg",
      price: 130,
      desc: "Build a stable glass tower.",
      date: "2025-02-12",
      type: "Fun"
    },
    {
      name: "Pillow Fight",
      img: "pillow_fight.jpg",
      price: 50,
      desc: "A fun pillow fight competition.",
      date: "2025-02-13",
      type: "Fun"
    },
    {
      name: "Sumo Wrestling",
      img: "sumo_wrestling.jpg",
      price: 180,
      desc: "Compete in a friendly sumo wrestling match.",
      date: "2025-02-14",
      type: "Fun"
    },
  
    // Other events
    {
      name: "Pro Show",
      img: "pro_show.jpg",
      price: 500,
      desc: "A professional performance to enjoy.",
      date: "2025-02-15",
      type: "Other"
    },
    {
      name: "Workshop 1",
      img: "workshop1.jpg",
      price: 300,
      desc: "Interactive workshop on technical topics.",
      date: "2025-02-16",
      type: "Other"
    },
    {
      name: "Workshop 2",
      img: "workshop2.jpg",
      price: 300,
      desc: "Another engaging technical workshop.",
      date: "2025-02-17",
      type: "Other"
    },
    {
      name: "Technical Talk 1",
      img: "tech_talk1.jpg",
      price: 200,
      desc: "Expert talk on advanced technical topics.",
      date: "2025-02-18",
      type: "Other"
    },
    {
      name: "Technical Talk 2",
      img: "tech_talk2.jpg",
      price: 200,
      desc: "Another insightful technical session.",
      date: "2025-02-19",
      type: "Other"
    },
    {
      name: "Movie Night",
      img: "movie_night.jpg",
      price: 150,
      desc: "Relax and enjoy a movie night.",
      date: "2025-02-20",
      type: "Other"
    },
    {
      name: "Culturals",
      img: "culturals.jpg",
      price: 100,
      desc: "Celebrate diverse cultures with performances.",
      date: "2025-02-21",
      type: "Other"
    },
    {
      name: "Tournament",
      img: "tournament.jpg",
      price: 250,
      desc: "Compete in an exciting tournament.",
      date: "2025-02-22",
      type: "Other"
    }
  ];
  
  
const currentURL = window.location.href
const currentEvent = events[parseInt(currentURL[currentURL.length-2]+currentURL[currentURL.length-1])]

const ename = document.getElementById("ename")
ename.innerText = currentEvent.name

const etype = document.getElementById("etype")
etype.innerText = currentEvent.type

const econtent = document.getElementById("econtent")
econtent.innerText = currentEvent.desc


