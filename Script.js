gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.to("#home", {
    opacity: 1,
    duration: 1
});

tl.from(".dept-text", {
    y: 50,
    opacity: 0,
    duration: 1
}, "-=0.5");

tl.from(".main-title", {
    scale: 1.5,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
}, "-=0.7");

tl.from(".date", {
    y: -50,
    opacity: 0,
    duration: 0.8
}, "-=0.5");

tl.from(".buttons button", {
    y: 30,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8
}, "-=0.3");

gsap.utils.toArray('.about-section').forEach((section, i) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top center",
            toggleActions: "play none none reverse",
            markers: false
        },
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out"
    });
});

gsap.from(".Events .section-title", {
    scrollTrigger: {
        trigger: ".Events",
        start: "top center",
        toggleActions: "play none none reverse",
        markers: false
    },
    x: -100,
    opacity: 0,
    duration: 1
});

gsap.from(".event-card", {
    scrollTrigger: {
        trigger: ".event-card",
        start: "top center",
        toggleActions: "play none none reverse",
        markers: false
    },
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)"
});

gsap.from(".explore-btn", {
    scrollTrigger: {
        trigger: ".explore-btn",
        start: "top bottom",
        toggleActions: "play none none reverse",
        markers: false
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".Gallery .section-title", {
    scrollTrigger: {
        trigger: ".Gallery",
        start: "top center",
        toggleActions: "play none none reverse",
        markers: false
    },
    x: 100,
    opacity: 0,
    duration: 1
});

gsap.from(".Footer footer", {
    scrollTrigger: {
        trigger: ".Footer",
        start: "top bottom",
        toggleActions: "play none none reverse",
        markers: false
    },
    y: 100,
    opacity: 0,
    duration: 1
});

ScrollTrigger.config({
    ignoreMobileResize: true
});

ScrollTrigger.refresh();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


const schedule = {
    day1: [
        { time: "9:30am-10:10am", event: "Inauguration", venue: "Not specified" },
        { time: "10:00am-12:30pm", event: "Cubix", venue: "Mtech classroom" },
        { time: "10:30am-11:30am", event: "Technical Talk", venue: "Not specified" },
        { time: "11:15am-12:15pm", event: "Geothon", venue: "Library seminar hall" },
        { time: "11:30am-12:00pm", event: "Talk divya", venue: "Not specified" },
        { time: "1:00pm-2:30pm", event: "Brain Battle", venue: "Not specified" },
        { time: "2:30pm-4:30pm", event: "Idea pitching", venue: "Civil Seminar hall" },
        { time: "2:30pm-4:00pm", event: "Time Capsule", venue: "S7 CEB classroom" },
        { time: "4:30pm-6:00pm", event: "Jaming", venue: "Not specified" },
        { time: "7:00pm-8:30pm", event: "Culturals", venue: "Not specified" }
        ],
    day2: [
        { time: "9:30am-10:30am", event: "Debate", venue: "Civil Seminar hall", coordinator: "Vishn" },
        { time: "10:30am-12:30pm", event: "Disaster Zone Escape", venue: "S7 CE A classroom", coordinator: "Aque" },
        { time: "1:30pm-3:30pm", event: "Geothon", venue: "Library seminar hall" },
        { time: "2:00pm-4:30pm", event: "Caad edge", venue: "CADD lab", coordinator: "Amin" },
        { time: "4:30pm-6:00pm", event: "Spot choreo", venue: "Not specified", coordinator: "There" },
        { time: "6:30pm-8:00pm", event: "Pro show", venue: "Not specified", coordinator: "Denil" }
        ]
  };

  function showSchedule(day) {
    const container = document.getElementById('schedule-container');
    container.innerHTML = ''; // Clear previous schedule

    schedule[day].forEach(item => {
      const scheduleItem = document.createElement('div');
      scheduleItem.className = 'schedule-item';

      const date = document.createElement('p');
        date.className = 'schedule-date';
        date.textContent = item.date;

        const info = document.createElement('div');
        info.className = 'schedule-info';

        const time = document.createElement('p');
        time.className = 'schedule-time';
        time.textContent = item.time;

        const event = document.createElement('p');
        event.className = 'schedule-event';
        event.textContent = item.event;

        // const venue = document.createElement('p');
        // venue.className = 'schedule-venue';
        // venue.textContent = item.venue;

        info.appendChild(time);
        info.appendChild(event);
        // info.appendChild(venue);

        scheduleItem.appendChild(date);
        scheduleItem.appendChild(info);

        container.appendChild(scheduleItem);
    });
  }

  // Show Day 1 schedule by default
  showSchedule('day1');
