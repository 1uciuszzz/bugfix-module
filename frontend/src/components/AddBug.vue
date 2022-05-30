<template>
  <div>
    <label for="my-modal" class="btn modal-button">新增bug</label>
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg text-center">新增bug</h3>
        <form>
          <div class="input-group mt-1">
            <span class="w-4/12 text-center">项目名</span>
            <select class="select select-bordered w-8/12">
              <option disabled selected>请选择</option>
              <option>项目一</option>
              <option>项目二</option>
              <option>项目三</option>
            </select>
          </div>
          <div class="form-control">
            <label class="input-group mt-1">
              <span class="w-4/12 text-center">bug名</span>
              <input
                type="text"
                placeholder="请输入bug名"
                class="input input-bordered w-8/12"
              />
            </label>
            <div class="input-group mt-1">
              <span class="w-4/12 text-center">bug类型</span>
              <select class="select select-bordered w-8/12">
                <option disabled selected>请选择bug类型</option>
                <option value="1">代码错误</option>
                <option value="2">界面优化</option>
                <option value="3">性能问题</option>
                <option value="4">浏览器兼容</option>
              </select>
            </div>
            
            <div class="input-group mt-1">
              <span class="w-4/12 text-center">开发人员</span>
              <select class="select select-bordered w-8/12">
                <option disabled selected>请指派开发人员</option>
                <option>zlx</option>
                <option>xushu</option>
                <option>dalei</option>
                <option>lulu</option>
              </select>
            </div>
            <div class="input-group mt-1">
              <span class="w-4/12 text-center">bug等级</span>
              <select class="select select-bordered w-8/12">
                <option disabled selected>请选择bug严重等级</option>
                <option value="1">很严重</option>
                <option value="2">严重</option>
                <option value="3">一般</option>
              </select>
            </div>
          </div>
          <div class="flex justify-evenly">
            <div class="confirm modal-action">
              <label for="my-modal" class="btn">确认</label>
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

<script>



</script>

<style>
</style>