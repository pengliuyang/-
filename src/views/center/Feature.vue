<template>
 <div class="centeritemdetail">
        <div class="title">
          <span>中心特色</span>
          <!-- <span class="link">&lt;&emsp;返回</span> -->
          <a href="">&lt;&emsp;返回</a>
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
           <h3>标题</h3>
          <div class="content">
            哈哈哈哈哈哈哈红红火哈哈哈哈哈哈哈红红火火恍恍惚哈哈哈惚红红火火恍恍惚惚
            红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚哈哈哈哈
            哈哈哈哈哈哈哈红红火火恍恍惚哈哈哈惚红红火火恍恍惚惚红红火火恍恍惚惚红红
            火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚哈哈哈哈哈哈哈哈哈哈哈红红火
            火恍恍惚哈哈哈惚红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚红红火火
            恍恍惚惚红红火火恍恍惚惚哈哈哈哈哈哈哈哈哈哈哈红红火火恍恍惚哈哈哈惚红红
            火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍
            惚惚哈哈哈哈哈哈哈哈哈哈哈红红火火恍恍惚哈哈哈惚红红火火恍恍惚惚红红火火
            恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚哈哈哈哈哈哈哈哈
            哈哈哈红红火火恍恍惚哈哈哈惚红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍
            惚红红火火恍恍惚惚红红火火恍恍惚惚哈哈哈哈哈哈哈哈哈哈哈红红火火恍恍惚哈
            惚红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚红红火
            恍恍惚惚哈哈哈哈火恍恍惚哈哈哈惚红红火火恍恍惚哈哈哈哈哈哈哈红红火火恍恍
            哈哈哈惚红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚
            红火火恍恍惚惚哈哈哈哈哈哈哈哈哈哈哈红红火火恍恍惚哈哈哈惚红红火火恍恍惚
            红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚哈哈哈哈
            哈哈哈哈哈哈红红火火恍恍惚哈哈哈惚红红火火恍恍惚惚红红火火恍恍惚惚红红火
            恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚哈哈哈哈惚红红火火恍恍惚惚红红火
            火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚哈哈哈哈哈哈哈哈哈哈哈红红火火
            恍恍惚哈哈哈惚红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍
            恍惚惚红红火火恍恍惚惚哈哈哈哈哈哈哈哈哈哈哈红红火火恍恍惚哈哈哈惚红红火
            火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚
            惚哈哈哈哈哈哈哈哈哈哈哈红红火火恍恍惚哈哈哈惚红红火火恍恍惚惚红红火火恍
            恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚哈哈哈哈
          </div>
          <p>2020-07-20</p>
        </div>
      </div>
</template>

<script>
export default {
 data(){
   return{
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
   }
 }
}
</script>

<style lang="less">
 .centeritemdetail {
      width: 980px;
      float: right;
      .title {
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        padding-bottom: 10px;
        padding-top: 20px;
        border-bottom: 2px solid #ccc;
        font-size: 18px;
        color: #2d2d2d;
        a{
          color: #2d2d2d;
        }
      }
      .titlebottom {
        padding-top: 30px;
        h3 {
          text-align: center;
        }
          .content{
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
        p {
          text-align: right;
          margin-top: 10px;
          color: #999;
        }
        .input_video{
          width: 100%;
          height: 476px;
          background:url('../../assets/images/video_bg.jpg');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          margin-bottom: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
         .input_video .video-player{
         height:426px;
         width: 756px;
      }
      }
      .video-js .vjs-big-play-button{
        width: 80px;
        border-radius: 50%;
        outline: none;
      }
    }
</style>