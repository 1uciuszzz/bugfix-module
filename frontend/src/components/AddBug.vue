<template>
  <div>
    <label for="my-modal" class="btn modal-button">新增bug</label>
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg text-center">新增bug</h3>
        <form>
          <div class="input-group mt-1">
            <span class="w-4/12 text-center">功能名</span>
            <select class="select select-bordered w-8/12" v-model="featureid">
              <option disabled selected value="0">请选择功能</option>
              <option
                :value="item._id"
                v-for="item in featrueStore.featureList"
                :key="item.id"
              >
                {{ item.name }}
              </option>
            </select>
          </div>
          <div class="input-group mt-1">
            <span class="w-4/12 text-center">测试名</span>
            <select class="select select-bordered w-8/12" v-model="testid">
              <option disabled selected value="0">请选择测试名</option>
              <option
                :value="item._id"
                v-for="item in testStore.byFeatureidList"
                :key="item.id"
              >
                {{ item.testname }}
              </option>
            </select>
          </div>
          <div class="form-control">
            <label class="input-group mt-1">
              <span class="w-4/12 text-center">bug名</span>
              <input
                type="text"
                placeholder="请输入bug名"
                class="input input-bordered w-8/12"
                v-model="bugname"
              />
            </label>
            <div class="input-group mt-1">
              <span class="w-4/12 text-center">bug类型</span>
              <select class="select select-bordered w-8/12" v-model="bugtype">
                <option disabled selected value="0">请选择bug类型</option>
                <option value="1">代码错误</option>
                <option value="2">界面优化</option>
                <option value="3">性能问题</option>
                <option value="4">浏览器兼容</option>
              </select>
            </div>

            <div class="input-group mt-1">
              <span class="w-4/12 text-center">开发人员</span>
              <select class="select select-bordered w-8/12" v-model="devid">
                <option disabled selected value="0">请指派开发人员</option>
                <option
                  :value="item._id"
                  v-for="item in bugStore.devList"
                  :key="item._id"
                >
                  {{ item.username }}
                </option>
              </select>
            </div>
            <div class="input-group mt-1">
              <span class="w-4/12 text-center">bug等级</span>
              <select class="select select-bordered w-8/12" v-model="level">
                <option disabled selected value="0">请选择bug严重等级</option>
                <option value="1">很严重</option>
                <option value="2">严重</option>
                <option value="3">一般</option>
              </select>
            </div>
          </div>
          <div class="flex justify-evenly">
            <div class="confirm modal-action">
              <label for="my-modal" class="btn" @click="add">确认</label>
            </div>
            <div class="modal-action">
              <label for="my-modal" class="btn">返回</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, reactive } from "vue";
import featureListStore from "../stores/FeatureList.js";
import useTestStore from "../stores/test.js";
import useBugStore from "../stores/bugList.js";

let featrueStore = featureListStore();
let testStore = useTestStore();
let bugStore = useBugStore();

let featureid = ref("0");
let bugname = ref("");
let bugtype = ref("0");
let level = ref("0");
let devid = ref('0');
let testid = ref("0");
onMounted(async () => {
  featrueStore.initFeatureList();
  bugStore.getall();
});

watch(featureid, () => {
  testStore.gettestByfeatureid({ featureid: featureid.value });
});

let add = ()=>{
  let name = featrueStore.featureList.filter(item  => item._id == featureid.value)[0].name;
  let devname = bugStore.devList.filter(item => item._id==devid.value)[0].username;
  let testname = testStore.byFeatureidList.filter(item => item._id == testid.value)[0].testname
  bugStore.addBug({
    bugname:bugname.value,
    bugtype:bugtype.value,
    devid:devid.value,
    devname,
    level:level.value,
    featureid:featureid.value,
    testid:testid.value,
    testname
  })
   featureid = ref("0");
 bugname = ref("");
 bugtype = ref("0");
 level = ref("0");
 devid = ref('0');
 testid = ref("0");
}
</script>

<style>
</style>