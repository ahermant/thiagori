<template>
  <div class="noLineHeight">
    <a id="topAnchor"></a>
    <video
      id="myVideo"
      playsinline
      autoplay
      controls
      muted
      type="video/mp4"
      :poster="introPoster"
      :src="introVideo"
    />
    <Header />
    <nuxt />
    <b-link href="#topAnchor">
      <b-icon icon="chevron-up" class="upBtn rounded-circle border p-1" variant="dark" />
    </b-link>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";

export default {
  components: {
    Header
  },
  async mounted() {
    await this.checkVideo();
    window.addEventListener("resize", this.checkVideo);
  },
  destroyed() {
    window.removeEventListener("resize", this.checkVideo);
  },
  data() {
    return {
      dynamicVideo: "/thiagoriIntroNoAudio.mp4",
      dynamicPoster: "/posterh.png",
      desktopVideo: "/thiagoriIntroNoAudio.mp4",
      posterh: "/posterh.png",
      mobileVideo: "/thiagoriIntroMobile.mp4",
      posterv: "/posterv.png"
    };
  },
  computed: {
    introPoster() {
      return this.dynamicPoster;
    },
    introVideo() {
      return this.dynamicVideo;
    }
  },
  methods: {
    async checkVideo() {
      await this.switchVideo();
      this.playVideo();
    },
    playVideo() {
      let promise = document.querySelector("video").play();

      if (promise !== undefined) {
        promise
          .catch(error => {
            console.error(error);
          })
          .then(() => {
            console.log("All good");
          });
      }
    },
    async switchVideo() {
      console.log({
        switch: { width: window.innerWidth, height: innerHeight }
      });
      if (window.innerWidth >= window.innerHeight) {
        this.dynamicVideo = this.desktopVideo;
        this.dynamicPoster = this.posterh;
      } else {
        this.dynamicVideo = this.mobileVideo;
        this.dynamicPoster = this.posterv;
      }
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Bad+Script&display=swap");

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

h1 {
  font-family: "CreamCandy", sans-serif;
  font-size: 4rem;
  color: darkgoldenrod;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

/* Style the video: 100% width and height to cover the entire window */
#myVideo {
  min-width: 100%;
  width: 100%;
  @media (max-width: 992px) {
    margin-top: 96px;
  }
}

#topAnchor {
  position: absolute;
  top: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.noLineHeight {
  line-height: 0;
}

.upBtn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: white;
  box-shadow: 2px 2px 6px 0px rgba(119, 119, 119, 0.75);
  -moz-box-shadow: 2px 2px 6px 0px rgba(119, 119, 119, 0.75);
  -webkit-box-shadow: 2px 2px 6px 0px rgba(119, 119, 119, 0.75);
  font-weight: bolder;
}
</style>
