<template>
    <div>
        <div class="head-box">
            <div class="left">
                <p class="L-num">{{list.delivery}}</p>
                <p class="score">商家评分</p>
            </div>
            <div class="center">
                <p><span class="box-left">口味</span> <Star class="star-box" :num="parseFloat(list.flavor)"></Star><span class="box-right"> {{list.flavor}}分</span></p>
                <p><span class="box-left">包装</span> <Star class="star-box" :num="parseFloat(list.packing)"></Star><span class="box-right"> {{list.packing}}分</span></p> 
            </div>
            <div class="right">
                <p class="R-num">{{list.score}}</p>
                <p class="score">配送评分</p>
            </div>
        </div>
    </div>
</template>

<script>
import Star from "@/components/Star";

    export default {
        props:["list"],
        components:{
            Star
        },
    }
</script>

<style lang="scss" scoped>
.head-box{
    display: flex;
    justify-content: space-between;
    margin-top: .2rem;
    .left{
        width: 20%;
        text-align: center;
        .L-num{
            font-size: 0.28rem;
            color: #ffb000;
        }
    }
    .center{
        width: 60%;
        margin-left: .1rem;
        text-align: left;
        margin-left: .1rem;
        border-right: 1px solid #999;
        .star-box{
            display: inline-block;
            margin-left: .1rem;
            margin-bottom: .1rem;
        }
        .box-right{
            color: #ffb000;
        }
        .box-left{
           font-size: 13px; 
        }
    }
    .right{
        width: 20%;
        text-align: center;
        .R-num{
            color: #999;
            font-size: 0.28rem;
        }
    }
    .score{
        font-size: 13px;
        color: #999;
    }
}
</style>