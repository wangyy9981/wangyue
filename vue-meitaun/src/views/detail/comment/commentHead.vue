<template>
    <div>
        <div class="head-box">
            <div class="left">
                <p class="L-num">4.9分</p>
                <p class="score">商家评分</p>
            </div>
            <div class="center">
                <p>口味<Star class="star-box" num="4.7"></Star><span>4.7</span></p>
                <p>包装<Star class="star-box" num="4.7"></Star><span>4.8</span></p> 
            </div>
            <div class="right">
                <p class="R-num">4.9分</p>
                <p class="score">商家评分</p>
            </div>
        </div>
    </div>
</template>

<script>
import Star from "@/components/Star";

    export default {
        components:{
            Star
        }
    }
</script>

<style lang="scss" scoped>
.head-box{
    display: flex;
    justify-content: space-between;
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
        padding: .1rem;
        text-align: left;
        .star-box{
            display: inline-block;
            margin-left: .1rem;
            margin-bottom: .1rem;
        }
        span{
            color: #ffb000;
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
        color: #999;
    }
}
</style>