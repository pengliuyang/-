<template>
  <div>
    <div
      class="centeritemdetailtwo"
      v-if="this.$store.state.columnmessage.styleType == 1"
    >
      <div
        class="title"
        v-if="this.$store.state.columnmessage.data.length != 1"
      >
        <!-- <span>中心简介</span> -->
        <span class="link" @click="route">&lt;&emsp;返回</span>
      </div>
      <div class="titlebottom">
        <h3>{{ article.title }}</h3>
        <div v-html="article.textContent"></div>
        <p class="time">{{ article.createTime }}</p>
      </div>
    </div>
    <div
      class="centeritemdetailone"
      v-if="this.$store.state.columnmessage.styleType == 0"
    >
      <div
        class="title"
        v-if="this.$store.state.columnmessage.data.length != 1"
      >
        <!-- <span>条件保障</span> -->
        <!-- {{this.$route.params.b}} -->
        <span class="link" @click="route">&lt;&emsp;返回</span>
      </div>
      <div class="titlebottom">
        <div class="input_video">
          <video-player
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
          ></video-player>
        </div>
        <h3>{{ article.title }}</h3>
        <div class="content" v-html="article.textContent"></div>
        <p class="time">{{ article.createTime }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticlemessage } from "@/apis/request.js";
import { returnColumn } from "@/apis/request.js";
import { getColumnarticle } from "@/apis/request.js";
export default {
  data() {
    return {
      article: {},
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "",
            src: "1.mp4", //url地址
          },
        ],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, //当前时间和持续时间的分隔符
          durationDisplay: true, //显示持续时间
          remainingTimeDisplay: false, //是否显示剩余时间功能
          fullscreenToggle: true, //全屏按钮
        },
      },
    };
  },
  methods: {
    route() {
      console.log(this.$store.state.bottomcolumnid, 7);
      this.$router.push({
        path:
          `/ChuanDa/` +
          this.$store.state.columnmessage.id +
          "/leftmenu/" +
          this.$store.state.bottomcolumnid,
      });
    },
  },
  computed: {
    styleType() {
      if (
        this.$store.state.columnmessage.styleType == 0 ||
        this.$store.state.columnmessage.styleType == 1
      ) {
        return this.$store.state.columnmessage.styleType;
      } else {
        return 0;
      }
    },
  },
  created() {
    if (localStorage.getItem("styleType")) {
      this.$store.state.columnmessage.styleType = localStorage.getItem(
        "styleType"
      );
      localStorage.removeItem("styleType");
    }
    console.log(this.$store.state.columnmessage.styleType, "ply1");
    this.$store.state.columnmessage.id = this.$route.params.id;
    getArticlemessage(this.$route.params.b).then((res) => {
      console.log(res, 1);
      this.article = res[0];
      this.playerOptions.sources = res[0].videoUrl;
      returnColumn(res[0].columnId).then((res) => {
        this.$store.state.columnmessage.styleType = res[0].styleType;
        this.$store.state.columnmessage.showType = res[0].showType;
        this.$store.state.columnmessage.bgImgUrl = res[0].bgImgUrl;
        this.$store.state.columnmessage.columnName = res[0].columnName;
        this.$store.state.columnmessage.english = res[0].english;
        console.log(this.$store.state.columnmessage.styleType, 3);
      });
      getColumnarticle(res[0].columnId, 1).then((res) => {
        this.$store.state.columnmessage.data = res.list;
        this.$store.state.columnmessage.total = res.total;
      });
    });
    console.log(this.$store.state.columnmessage.styleType, "ply2");
  },
};
</script>

<style lang="less">
.centeritemdetailone {
  width: 980px;
  float: right;
  .title {
    display: flex;
    justify-content: flex-end;
    font-size: 18px;
    padding-bottom: 10px;
    padding-top: 26px;
    border-bottom: 2px solid #ccc;
    font-size: 18px;
    color: #2d2d2d;
    span {
      color: #2d2d2d;
      cursor: pointer;
    }
  }
  .titlebottom {
    padding-top: 30px;
    h3 {
      text-align: center;
    }
    .content {
      margin-top: 20px;
      display: -webkit-box;
      overflow: hidden;
      white-space: normal !important;
      text-overflow: ellipsis;
      word-wrap: break-word;
      -webkit-line-clamp: 11;
      -webkit-box-orient: vertical;
      font-size: 16px;
      color: #2d2d2d;
      line-height: 40px;
      text-indent: 2em;
    }
    .time {
      text-align: right;
      margin-top: 20px;
      color: #999;
    }
    .input_video {
      width: 100%;
      height: 476px;
      background: url("../assets/images/video_bg.jpg");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      margin-bottom: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .input_video .video-player {
      height: 426px;
      width: 756px;
    }
  }
  .video-js .vjs-big-play-button {
    width: 80px;
    border-radius: 50%;
    outline: none;
  }
  .video-js:focus {
    outline: none;
  }
  margin-bottom: 140px;
}
.centeritemdetailtwo {
  width: 980px;
  float: right;
  .title {
    display: flex;
    justify-content: flex-end;
    font-size: 18px;
    padding-bottom: 10px;
    padding-top: 26px;
    border-bottom: 2px solid #ccc;
    color: #2d2d2d;
    font-size: 18px;
    span {
      color: #2d2d2d;
      cursor: pointer;
    }
  }
  .titlebottom {
    padding-top: 30px;
    h3 {
      text-align: center;
    }
    div {
      margin-top: 20px;
      display: -webkit-box;
      overflow: hidden;
      white-space: normal !important;
      text-overflow: ellipsis;
      word-wrap: break-word;
      -webkit-line-clamp: 15;
      -webkit-box-orient: vertical;
      font-size: 16px;
      color: #2d2d2d;
      line-height: 40px;
      text-indent: 2em;
    }
    .time {
      text-align: right;
      margin-top: 50px;
      color: #999;
    }
  }
  margin-bottom: 200px;
}
</style>
