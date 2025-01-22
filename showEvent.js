const events = [
    // Technical events
    {
      name: "Cube Casting",
      img: "./notpublic/cubix.webp",
      price: 500,
      desc: `All participants must register before the deadline.
      Materials for the workability test and cube casting will be provided.
     A mix design report of M30 is to be prepared as per IS 10262:2019. (Material properties will be provided.)
     Workability test and cube casting will be conducted on 31/01/2025
     Testing of cubes is scheduled at 10:00am on the date 07/02/2025 at Material Testing Lab, FISAT.
     Only 4 members are allowed per team and must carry their college ID cards for verification.
      Certicates will be provided to all participants.
     `,
      date: "31st Jan 2025",
      type: "Technical",
      reg: "https://docs.google.com/forms/d/e/1FAIpQLSeAesB2_QojVnuRAOfKeIqISMf3SEZBbsF_jsLbDQ2-jOB_qA/viewform?usp=header"
    },
    {
      name: "Idea Pitching",
      img: "./notpublic/ideapitching.webp",
      price: 300,
      desc: `Team size : 4 members (ID card is mandatory).
      A geotechnical problem will be given at the venue on the first day and the engineering solution has to be presented on the second day.
     The presentation time is 15 minutes. Teams must adhere to this time limit. 
     Reporting time : 15 minutes before the allotted time. 
     The evaluation will be based on the problem understanding, methodology or approach used, proposed solution, feasibility analysis.
     Decision of the evaluation panel will be final and binding. 
      Participation certificates will be provided.`,
      date: "31st Jan 2025",
      type: "Technical",
      reg:"https://docs.google.com/forms/d/e/1FAIpQLSeuQ9y88s6Z8cyFmMbvM71PWEK0bWFBMs5v_8aV2tX96A84kg/viewform?usp=header"
    },
    {
      name: "Geothon",
      img: "./notpublic/geothon.webp",
      price: 600,
      desc: `Team size : 4 members (ID card is mandatory).
      A geotechnical problem will be given at the venue on the first day and the engineering solution has to be presented on the second day.
     The presentation time is 15 minutes. Teams must adhere to this time limit. 
     Reporting time : 15 minutes before the allotted time. 
     The evaluation will be based on the problem understanding, methodology or approach used, proposed solution, feasibility analysis.
     Decision of the evaluation panel will be final and binding. 
      Participation certificates will be provided.`,
      date: "31st Jan 2025",
      type: "Technical",
      reg:"https://docs.google.com/forms/d/e/1FAIpQLSchEE7yqQVns7QvXALp6aeAZsaoLx9WL13CBtlsHQ8N0OXKUQ/viewform?usp=header"
    },
    {
      name: "Brain Battle",
      img: "./notpublic/brainbattle.webp",
      price: 100,
      desc: `Team size: 2 members (ID card is mandatory)
      Questions will be from engineering background.
      Time will depend upon each round.
      There will be a total of four rounds with 2 teams being eliminated in each round. 
      Participation Certificates will be provided.`,
      date: "31st Jan 2025",
      type: "Technical",
      reg:" https://docs.google.com/forms/d/e/1FAIpQLSfNW-hnuNUjkFuR83HJwl55lqGPYSxu98YrsZiNjFlfZ7m69Q/viewform?usp=header"
    },
    {
      name: "Autocad",
      img: "./notpublic/autocad.webp",
      price: 150,
      desc: `Individual Participation (ID card is mandatory).
      Participants are expected to develop a plan, section and elevation from the line sketch provided. 
       Allotted time for the competition is 2.5 hours.
       Evaluation will be based on clarity and completeness of drawing, detailing and annotation. 
       Decision of the evaluation panel will be final and binding. 
       Certificates will be provided to all the participants. `,
      date: "1st Feb 2025",
      type: "Technical",
      reg:"https://docs.google.com/forms/d/e/1FAIpQLSeJWTNEzr8krArwS_ukBIaoKlxSsANS_XyZt28jTPkPk-RBwg/viewform?usp=header"
    },
    {
      name: "Disaster Zone Escape",
      img: "./cs.webp",
      price: 300,
      desc: `Team size: 2 members (ID card is mandatory).
      Participants are expected to develop a evacuation and mitigation plan using flow charts, sketches, charts or models 3
      allotted time for the competition is two hours. 
      Evaluation will be based on practicality, creativity and resource management while addressing the disaster 
      Decision of the evaluation panel will be final and binding 
      Certificates will be provided to all the participants.`,
      date: "1st Feb 2025",
      type: "Technical",
      reg:"https://docs.google.com/forms/d/e/1FAIpQLSfdsGXm3C4cug2a1fCOUbNIJFLS98Ud4icf4cQcRXq71OTiew/viewform?usp=header"
    },
    {
      name: "The Time Capsule Design",
      img: "./notpublic/timecapsule.webp",
      price: 200,
      desc: `Team size: 2 members (ID card is mandatory). 
      Participants are expected to design a futuristic building for 100 years from now. 
      Presentation must include structural feasibility,sustainability aspects,materials used and visual representations. 
     A hardcopy of presentation must be submitted on 31/01/25.
      Presentation must be completed within 10 mins and followed by a 2 min Q &A session. 
      Decision of evaluation panel will be final and binding. 
      Certificates will be provided to all participants.`,
      date: "31st Jan 2025",
      type: "Technical",
      reg:"https://docs.google.com/forms/d/e/1FAIpQLSdrtDbrLqeJNaffiicvIsz8GtWMXmtu-AQcpn13C0ixBh0QsA/viewform?usp=header"
    },
    {
      name: "Debate Dual",
      img: "./notpublic/debate.webp",
      price: 200,
      desc: `Team size: 2 member (ID card is mandatory).
      Teams will be divided into two groups: those supporting the motion (affirmative) and those opposing it (negative). 
     Teams will be given 10 minutes to prepare once the topic is announced. 
     Evaluation of debate is based on content, delivery, engagement and strategy. 
     The decision of the evaluation panel will be final and binding. 
     Certificates will be provided to all the participants.`,
      date: "1st Feb 2025",
      type: "Technical",
      reg:"https://docs.google.com/forms/d/e/1FAIpQLSdrtDbrLqeJNaffiicvIsz8GtWMXmtu-AQcpn13C0ixBh0QsA/viewform?usp=header"
    },
  
    // Fun events
    // {
    //   name: "Treasure Hunt",
    //   img: "treasure_hunt.jpg",
    //   price: 100,
    //   desc: "Find the hidden treasure.",
    //   date: "2025-02-09",
    //   type: "Fun"
    // },
    // {
    //   name: "Spot Choreo",
    //   img: "spot_choreo.jpg",
    //   price: 120,
    //   desc: "Show off your choreography skills on the spot.",
    //   date: "2025-02-10",
    //   type: "Fun"
    // },
    // {
    //   name: "Escape Room",
    //   img: "escape_room.jpg",
    //   price: 150,
    //   desc: "Solve puzzles to escape the room.",
    //   date: "2025-02-11",
    //   type: "Fun"
    // },
    // {
    //   name: "The Glass Tower Challenge",
    //   img: "glass_tower.jpg",
    //   price: 130,
    //   desc: "Build a stable glass tower.",
    //   date: "2025-02-12",
    //   type: "Fun"
    // },
    // {
    //   name: "Pillow Fight",
    //   img: "pillow_fight.jpg",
    //   price: 50,
    //   desc: "A fun pillow fight competition.",
    //   date: "2025-02-13",
    //   type: "Fun"
    // },
    // {
    //   name: "Sumo Wrestling",
    //   img: "sumo_wrestling.jpg",
    //   price: 180,
    //   desc: "Compete in a friendly sumo wrestling match.",
    //   date: "2025-02-14",
    //   type: "Fun"
    // },
  
    // // Other events
    // {
    //   name: "Pro Show",
    //   img: "pro_show.jpg",
    //   price: 500,
    //   desc: "A professional performance to enjoy.",
    //   date: "2025-02-15",
    //   type: "Other"
    // },
    // {
    //   name: "Workshop 1",
    //   img: "workshop1.jpg",
    //   price: 300,
    //   desc: "Interactive workshop on technical topics.",
    //   date: "2025-02-16",
    //   type: "Other"
    // },
    // {
    //   name: "Workshop 2",
    //   img: "workshop2.jpg",
    //   price: 300,
    //   desc: "Another engaging technical workshop.",
    //   date: "2025-02-17",
    //   type: "Other"
    // },
    // {
    //   name: "Technical Talk 1",
    //   img: "tech_talk1.jpg",
    //   price: 200,
    //   desc: "Expert talk on advanced technical topics.",
    //   date: "2025-02-18",
    //   type: "Other"
    // },
    // {
    //   name: "Technical Talk 2",
    //   img: "tech_talk2.jpg",
    //   price: 200,
    //   desc: "Another insightful technical session.",
    //   date: "2025-02-19",
    //   type: "Other"
    // },
    // {
    //   name: "Movie Night",
    //   img: "movie_night.jpg",
    //   price: 150,
    //   desc: "Relax and enjoy a movie night.",
    //   date: "2025-02-20",
    //   type: "Other"
    // },
    // {
    //   name: "Culturals",
    //   img: "culturals.jpg",
    //   price: 100,
    //   desc: "Celebrate diverse cultures with performances.",
    //   date: "2025-02-21",
    //   type: "Other"
    // },
    // {
    //   name: "Tournament",
    //   img: "tournament.jpg",
    //   price: 250,
    //   desc: "Compete in an exciting tournament.",
    //   date: "2025-02-22",
    //   type: "Other"
    // }
  ];
  
  
const currentURL = window.location.href
const currentEvent = events[parseInt(currentURL[currentURL.length-2]+currentURL[currentURL.length-1])]

const ename = document.getElementById("ename")
ename.innerText = currentEvent.name

const etype = document.getElementById("etype")
etype.innerText = currentEvent.type

const econtent = document.getElementById("econtent")
econtent.innerText = currentEvent.desc

const registerEvent = document.getElementById("register-event")
registerEvent.href = currentEvent.reg

const erate = document.getElementById("erate")
erate.innerHTML = "RATE : "+currentEvent.price

const eventDate = document.getElementById("eventDate")
eventDate.innerHTML = "DATE : " +currentEvent.date

const eventCard = document.getElementsByClassName("event-card")
eventCard[0].style.background = `url(${currentEvent.img})`;
eventCard[0].style.backgroundSize = "cover";
