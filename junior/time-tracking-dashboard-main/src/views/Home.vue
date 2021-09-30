<template>
  <main>
    <article class="report">
      <div class="report__header">
        <div class="user-card">
          <img
            class="user-card__img"
            src="../assets/images/image-jeremy.png"
            alt="jeremy"
          />
          <div class="user-card__info">
            <span class="user-card__info--title">Report for</span>
            <p class="user-card__info--name">Jeremy Robson</p>
          </div>
        </div>
      </div>
      <div class="report__tabs">
        <ul class="report__tabs--ul">
          <li v-for="(tab, index) in tabs" :key="index">
            <a
              :class="tab == currentTab ? 'active' : ''"
              @click="tabChange(tab)"
              >{{ tab }}</a
            >
          </li>
        </ul>
      </div>
    </article>

    <section class="stats">
      <article
        v-for="(stat, index) in stats"
        :key="index"
        class="subject"
        :class="toClass(stat.title)"
      >
        <div class="subject__info">
          <div class="subject__info--header">
            <h2>{{ stat.title }}</h2>
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="#BBC0FF"
                fill-rule="evenodd"
              />
            </svg>
          </div>
          <div class="subject__info--stat">
            <h1>{{ stat.timeframes[currentTab.toLowerCase()].current }}hrs</h1>
            <p>
              Last - {{ stat.timeframes[currentTab.toLowerCase()].previous }}hrs
            </p>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import data from "../assets/data.json";

export default {
  name: "Home",
  data: () => {
    return {
      tabs: ["Daily", "Weekly", "Monthly"],
      currentTab: "Weekly",
      stats: data,
    };
  },
  methods: {
    initializeData() {},
    tabChange(tab) {
      this.currentTab = tab;
    },
    toClass(sub) {
      return sub.split(" ").join("-").toLowerCase();
    },
    last() {
      if (this.currentTab == "Weekly") {
        return "Week";
      } else if (this.currentTab == "Daily") {
        return "Day";
      }

      return "Month";
    },
  },
};
</script>
