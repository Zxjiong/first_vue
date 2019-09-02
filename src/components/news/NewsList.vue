<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="http://img5.imgtn.bdimg.com/it/u=2511708086,328696257&fm=26&gp=0.jpg"
          />
          <div class="mui-media-body">
            幸福
            <p class="mui-ellipsis">
              <span>发表时间：2019-10-10</span>
              <span>点击次数：1次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="http://img5.imgtn.bdimg.com/it/u=2511708086,328696257&fm=26&gp=0.jpg"
          />
          <div class="mui-media-body">
            木屋
            <p class="mui-ellipsis">
              <span>发表时间：2019-10-10</span>
              <span>点击次数：1次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="http://img5.imgtn.bdimg.com/it/u=2511708086,328696257&fm=26&gp=0.jpg"
          />
          <div class="mui-media-body">
            CBD
            <p class="mui-ellipsis">
              <span>发表时间：2019-10-10</span>
              <span>点击次数：1次</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
    <comment-box></comment-box>
  </div>
</template>

<script>
import comment from "../subcomponents/comment.vue";

export default {
  components: {
    //用来注册子组件
    "comment-box": comment
  }
};
</script>

<style lang="scss" scoped>
.mui-ellipsis {
  display: flex;
  justify-content: space-between;
}
</style>