<template>
  <div class="w-8/12 mx-auto">
    <div class="card">
      <div class="card-body">
        <div id="c_body" ref="v_container"></div>
        <div class="card-actions flex-none justify-end">
          <div class="form-control">
            <label class="input-group input-group-md">
              <span>输入弹幕</span>
              <input
                v-model="msg"
                type="text"
                placeholder="弹幕"
                class="input input-bordered input-md"
              />
            </label>
          </div>
          <button @click="send_msg" class="btn btn-outline">发送</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import DPlayer from "dplayer";
import Hls from "hls.js";
let dp = null;
const v_container = ref();
const msg = ref("");
const ws = new WebSocket("ws://localhost:1234");
ws.onopen = () => {
  // ws.send("client connected");
};
ws.onmessage = (evt) => {
  // alert(evt.data);
  const msg = document.createElement("span");
  msg.classList.add("badge", "badge-info", "absolute", "z-50");
  msg.style.left = Math.random() * 600 + "px";
  msg.style.top = Math.random() * 400 + "px";
  msg.textContent = evt.data;
  const c_body = document.getElementById("c_body");
  c_body.appendChild(msg);
  msg.timer = setInterval(() => {
    msg.style.left = msg.style.left.slice(0, -2) - 10 + "px";
    if (msg.style.left.slice(0, -2) <= 0) {
      clearInterval(msg.timer);
      msg.remove();
    }
  }, 200);
};
onMounted(() => {
  dp = new DPlayer({
    container: v_container.value,
    video: {
      url: "https://hlstct.douyucdn2.cn/dyliveflv3a/7888428r7hgI8wMf.m3u8?txSecret=8ddfb26e76f2a7870c87f2425abee121&txTime=6297235c&token=h5-douyu-0-7888428-481b2a4b425356159a85d2c840866ad1&did=0697988899de757a0f3634ab00001631&origin=tct&vhost=play4",
      type: "customHls",
      customType: {
        customHls: function (video, player) {
          const hls = new Hls();
          hls.loadSource(video.src);
          hls.attachMedia(video);
        },
      },
    },
  });
});

const send_msg = () => {
  ws.send(msg.value);
};
</script>
