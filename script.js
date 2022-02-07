const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
const work = document.getElementById("work");
const play = document.getElementById("play");
const study = document.getElementById("study");
const exercise = document.getElementById("exercise");
const social = document.getElementById("social");
const selfCare = document.getElementById("self-care");

const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");
const dailyBtn = document.getElementById("daily-btn");

[dailyBtn, weeklyBtn, monthlyBtn].forEach((btn, i) =>
  btn.addEventListener("click", () => {
    [dailyBtn, weeklyBtn, monthlyBtn].forEach((b) =>
      b.classList.remove("text-white")
    );
    btn.classList.add("text-white");
    [work, play, study, exercise, social, selfCare].forEach(
      ({ children }, index) => {
        if (i === 0) {
          children[0].innerHTML = data[index].timeframes.daily.current + "hrs";
          children[1].innerHTML =
            "yesterday  - " + data[index].timeframes.daily.previous + "hrs";
        } else if (i === 1) {
          children[0].innerHTML = data[index].timeframes.weekly.current + "hrs";
          children[1].innerHTML =
            "last week  - " + data[index].timeframes.weekly.previous + "hrs";
        } else if (i === 2) {
          children[0].innerHTML =
            data[index].timeframes.monthly.current + "hrs";
          children[1].innerHTML =
            "last month  - " + data[index].timeframes.monthly.previous + "hrs";
        }
      }
    );
  })
);
