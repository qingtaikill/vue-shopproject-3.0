<template>
    <div class="newsInfo-container">
        <h3 class="newsInfo-title">{{newsInfo.title}}</h3>
        <p class="newsInfo-sub">
            <span>发表时间：{{newsInfo.add_time | dateFormat}}</span>
            <span>点击：{{newsInfo.click}}次</span>
        </p>
        <hr>

        <div class="newsInfo-content" v-html="newsInfo.content"></div>


        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
import comments from '../subcomponents/comments.vue'
    import {Toast} from 'mint-ui'
   export default {
       data() {
           return {
               id:this.$route.params.id,
               newsInfo:[]
           }
       },
       created() {
           this.getNewsInfo()
       },
       methods: {
           getNewsInfo() {
               this.$http.get('api/getnew/'+this.id).then(result => {
                   if(result.body.status === 0){
                       console.log(1)
                       this.newsInfo = result.body.message[0];
                       console.log(this.newsInfo)
                   }else{
                        console.log(2)
                   }
               })
           }
       },
       components:{
           "comment-box" : comments
       }
   }
</script>


<style lang="scss">
    .newsInfo-container {
        padding: 0 4px;
        .newsInfo-title {
            font-size: 16px;
            text-align: center;
            margin-top: 15px;
            color:red;
        }
        .newsInfo-sub {
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        .newsInfo-content {
            img {
                width: 100%;//只有不加scoped才可以设置宽度百分之百
            }
        }
    }
</style>

