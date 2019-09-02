<template>
  <div style="margin:5px;">  
    <hr>
    <h3>发表评论</h3> 
    
    <textarea placeholder="请输入要评论的内容（最多120字）" maxlength='120'>

    </textarea>
    <mt-button type='primary' size='large'>发表评论</mt-button>

    <div class='cmt-list'>
      <div class='cmt-item'>
        <div class="cmt-title">
          第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-08-20 12:12:12
        </div>
        <div class="cmt-body">
          你好红红火火恍恍惚惚好
        </div>

        <div class="cmt-title">
          第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-08-20 12:12:12
        </div>
        <div class="cmt-body">
          你好红红火火恍恍惚惚好
        </div>

        <div class="cmt-title">
          第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-08-20 12:12:12
        </div>
        <div class="cmt-body">
          你好红红火火恍恍惚惚好
        </div>
      </div>
    </div>
    <mt-button type='danger' size='large' plain>加载更多</mt-button>
  </div>
</template>

<script>
export default {
  
}
</script>


<style lang="scss" scoped>
  textarea{
    font-size: 14px;
    margin-bottom: 0;
  }
  .cmt-list{
    .cmt-item{
      line-height: 30px;
      .cmt-title{
        font-size: 14px;
        background-color: #ccc;
      }
      .cmt-body{
        text-indent:2em;
      }
    }
  }
</style>