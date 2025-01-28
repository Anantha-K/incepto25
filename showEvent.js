const events = [
    // Technical events
    {
        name: "Geothon",
        img: "./notpublic/geothon.jpeg",
        price: "₹300",
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
      name: "Cube Casting",
      img: "./notpublic/cubix.webp",
      price: "₹400",
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
      img: "./notpublic/ideapitching.jpeg",
      price: "₹200",
      desc: `Team size: 2 members (ID card is mandatory).
      The topic should focus on a civil engineering solution to a socially relevant issue.
      Teams can utilize presentations to ensure that the content is presented in a clear and legible format.
      Submit your presentation slides by January 30, 2025 (Google form will be provided)
      Reporting time: 15 minutes before the allotted time
      Each team is allocated a maximum of 10 minutes for their presentation. 
      Exceeding this time limit will result in a deduction of marks for every extra minute.
      Evaluation criteria include topic relevance, solution feasibility, and presentation clarity.
      Certificates will be provided to all participants.
      `,
      date: "31st Jan 2025",
      type: "Technical",
      reg:"https://docs.google.com/forms/d/e/1FAIpQLSeuQ9y88s6Z8cyFmMbvM71PWEK0bWFBMs5v_8aV2tX96A84kg/viewform?usp=header"
    },
    {
      name: "Brain Battle",
      img: "./notpublic/brainbattle.webp",
      price: "₹100",
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
      name: "Cad Edge",
      img: "./notpublic/autocad.jpeg",
      price: "₹100",
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
      img: "./notpublic/disaster.jpeg",
      price: "₹200",
      desc: `1.⁠ ⁠Participation is limited to teams of two only.
2.⁠ ⁠Teams must develop the best evacuation and mitigation plan and present it using a PPT presentation.
3.⁠ ⁠The total time allotted for the competition is one hour.
4.⁠ ⁠Evaluation will focus on the practicality of the evacuation plan and the quality of the presentation.
5.⁠ ⁠The decision of the evaluation panel will be final and binding.
6.⁠ ⁠Certificates will be awarded to all participants.
      `,
      date: "1st Feb 2025",
      type: "Technical",
      reg:"https://docs.google.com/forms/d/e/1FAIpQLSfdsGXm3C4cug2a1fCOUbNIJFLS98Ud4icf4cQcRXq71OTiew/viewform?usp=header"
    },
    {
      name: "The Time Capsule Design",
      img: "./notpublic/timecapsule.webp",
      price: "₹200",
      desc: `Team size: 2 members (ID card is mandatory). 
      Participants are expected to design a futuristic building for 100 years from now. 
      Presentation must include structural feasibility,sustainability aspects,materials used and visual representations. 
     A hardcopy of presentation must be submitted on 31/01/25.
      Presentation must be completed within 10 mins and followed by a 2 min Q &A session. 
      Decision of evaluation panel will be final and binding. 
      Certificates will be provided to all participants.`,
      date: "31st Jan 2025",
      type: "Technical",
      reg:"https://docs.google.com/forms/d/e/1FAIpQLSe1eb5-wOpTb0xzwLMzhxqU-wk5edZc9nqH86-dnGC7skixNw/viewform?usp=header"
    },
    {
      name: "Debate Dual",
      img: "./notpublic/debate.webp",
      price: "₹200",
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
    {
      name: "Tournament",
      img: "./notpublic/football.webp",
      price: "₹2000",
      desc: `The registration is limited to the first 16 teams only.
      Players must wear boots, socks, jerseys and shin guards
      Total game time: 30 minutes (Two halves of 15 min each)
      A Total of 10 players (7 on -field players and 3 substitutes
      All participants in a team must be from the same year and department, Only one team from one year (eg; CE 1st year , CE 2nd year, CE 3rd year, CE 4th year team)
      The tournament follows a knockout format.
      Re-entry is not allowed for eliminated teams
      The offside rule will be applicable
      Players must report 15 minutes before their match starts
      The decisions made by the committee and referees are final and binding
      Committee have the right to change the rules, regulations and fixtures as required

10 Activity Points will be awarded to Winners according to KTU guidelines.

      `,
      date: "24,25 Jan 2025",
      type: "Other",
      reg:""
    },
    {
      name: "PES 2025",
      img: "./notpublic/pes.jpeg",
      price: "₹59",
      desc: `
      1.Game Duration
• Each match is limited to 6 minutes. If a winner is not determined within the allotted time, refer to tie-breaking rules outlined by the committee (e.g., sudden death or round differential).
2. Tournament Format
  • Knockout Format:
  • The tournament will follow a single-elimination format.
  • Once a team is eliminated, they will not be allowed to re-enter the tournament under any circumstances.
3. Decisions
  • All decisions made by the tournament committee are final and binding.
  • Participants are expected to respect and comply with the rulings made during the tournament.
4. Fixture Changes
  • The organizing committee reserves the right to modify match fixtures or the overall tournament format if deemed necessary.
  • Any changes will be communicated to the participants promptly.
5. Malpractice
  • Players have the right to file an appeal against suspected malpractice with an Appeal Fee of 25.
  • Appeals must be submitted within a reasonable timeframe for consideration.
  • If any form of malpractice (e.g., cheating, collusion, or exploiting) is confirmed, the player/team involved will be immediately disqualified from the tournament.
  • The match will be conducted in offline mode
  • Minimum Player 25

10 Activity Points will be awarded to Winners according to KTU guidelines.

      `,
      date: "28 Jan 2025",
      type: "Other",
      reg:"https://forms.gle/VRcyHXXCzbYCiJyh9"
    },
    {
      name: "BGMI",
      img: "./notpublic/bgmi.jpeg",
      price: "₹65",
      desc: `
      1.Registration
• All participants must register with accurate personal and in-game details.
2. Tournament Format
• The tournament will follow a knockout format:
• Teams or players eliminated from the tournament cannot re-enter.
• Each match will proceed based on elimination until a winner is determined.
3. Decisions
• All decisions made by the tournament committee are final and binding.
• Participants are required to respect and comply with all rulings.
4. Fixture Changes
• The organizing committee reserves the right to make adjustments to the fixtures or tournament format if necessary.
• Any changes will be promptly communicated to all participants.
5. Malpractice
• Players may file an appeal against any suspected malpractice by paying an Appeal Fee of 725.
• If any form of malpractice (e.g., cheating, exploiting, or unsportsmanlike behavior) is proven, the player/team will be immediately eliminated from the tournament.
6. Match Types
• Matches may be played in one of the following formats:
• Solo: Individual players.
• Duo: Teams of two players.
• Squad: Teams of five players.
7. Scoring
• Points will be awarded based on:
• Kills: Number of eliminations achieved during the match.
• Placement: Final position at the end of the match.
8. Custom Room Rules
• All players are requested to join the custom room at least 10 minutes prior to the scheduled start time.
• Late arrivals may result in disqualification.
• Minimum players 25 for each category

10 Activity Points will be awarded to Winners according to KTU guidelines.
      `,
      date: "29 Jan 2025",
      type: "Other",
      reg:"https://forms.gle/vE82ddz7AXSC49RaA"
    },
    {
      name: "Valorant Tournament",
      img: "./notpublic/valorant.jpeg",
      price: "₹500/team",
      desc: `
      • Map Selection:
• Map Pool: List the available maps (current active rotation in Valorant).
• Examples: Ascent, Haven, Bind, Split, Lotus, Pearl, Sunset.
• Match Settings:
• Game Mode: Standard (Spike Defuse).
• Win Condition: First to 13 rounds
• Overtime: Enabled; MR3 (win by 2 rounds).
• Code of Conduct
• Sportsmanship: All players are expected to maintain respect and professionalism.
• Cheating: Use of hacks, third-party software, or exploiting bugs will lead to disqualification.
• Internet & Hardware: Players are responsible for stable internet and functioning equipment.
• Disconnects:
• Matches will not be paused for disconnects
• Custom Room Rules
• All players are requested to join the custom room at least 10 minutes prior to the scheduled start time.
• Late arrivals may result in disqualification.
• Minimum teams 8

10 Activity Points will be awarded to Winners according to KTU guidelines.

      `,
      date: "29 Jan 2025",
      type: "Other",
      reg:"https://forms.gle/vE82ddz7AXSC49RaA"
    },
    {
      name: "CHASSE AU TRESOR 2.0",
      img: "./notpublic/Treasure.jpeg",
      price: "₹500/team",
      desc: `
   • Team Size: Maximum 4 members
• Clues: Hidden across FISAT Campus in a sequence where one clue leads to another
• Types of Questions: Both technical and nontechnical
• Objective: The winning team will be the one that reaches the Chasse Au Tresor 2.0 main desk with the treasure in the shortest time
• Winners Announcement: Winners will be announced on the final day (ist Feb, 2025)
• Registration: Spot registrations are allowed

10 Activity Points will be awarded to Winners according to KTU guidelines.

      `,
      date: "29 Jan 2025",
      type: "Other",
      reg:"https://docs.google.com/forms/d/e/1FAIpQLSfpBfprbt00--jia3ajbDe4H7J_TspERk5wBgT9kaIN7wYrgg/viewform?usp=header"
    },
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
erate.innerHTML = "REG FEES : "+currentEvent.price

const eventDate = document.getElementById("eventDate")
eventDate.innerHTML = "DATE : " +currentEvent.date



const eventCard = document.getElementsByClassName("event-card")
eventCard[0].style.background = `url(${currentEvent.img})`;
eventCard[0].style.backgroundSize = "cover";



const activityPoints = document.getElementById("activity-points");
if (currentEvent.type === "Technical") {
    activityPoints.style.display = "block";
} else {
    activityPoints.style.display = "none";
}
