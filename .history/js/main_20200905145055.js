new Vue({
    el: "#app",
    data: {
        t: ``,
        n: 0,
        template: `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: rgb(210, 234, 247);
}

h1 {
    text-align: center;
    margin-bottom: 50px;
}

.doraemon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.face {
    height: 230px;
    width: 230px;
    border: 2px solid black;
    background: rgb(53, 161, 201);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
}

.face>.head {
    height: 200px;
    width: 200px;
    border: 2px solid black;
    border-radius: 50%;
    background: white;
    z-index: 2;
}

.face>.head>.mouth {
    width: 170px;
    height: 85px;
    border-radius: 0 0 170px 170px;
    transform: translateY(100px) translateX(14px);
    background: rgb(177, 22, 53);
    position: relative;
    overflow: hidden;
}

.face>.head>.mouth>.tongueLeft {
    width: 50px;
    height: 30px;
    border-radius: 50px 50px 0px 0px;
    transform: rotate(-45deg);
    position: absolute;
    bottom: 14px;
    left: 31px;
    background: rgb(202, 37, 51);
}

.face>.head>.mouth>.tongueRight {
    width: 50px;
    height: 30px;
    border-radius: 50px 50px 0px 0px;
    transform: rotate(45deg);
    position: absolute;
    bottom: 14px;
    right: 32px;
    background: rgb(202, 37, 51);
}

.face>.head>.mouth>.tongueMid {
    position: absolute;
    width: 43px;
    height: 43px;
    bottom: -14px;
    right: 65px;
    border-radius: 0 0 50px;
    transform: rotate(45deg);
    background: rgb(202, 37, 51);
}

.face>.head>.upper {
    position: relative;
    display: flex;
    justify-content: center;
}

.face>.head>.upper>.nose {
    height: 35px;
    width: 35px;
    top: 45px;
    border: 1px solid black;
    position: absolute;
    border-radius: 50%;
    background: rgb(177, 23, 53);
}

.face>.head>.upper>.nose>.noseWhite {
    height: 10px;
    width: 10px;
    transform: translateX(6px) translateY(4px);
    border-radius: 50%;
    background: white;
}

.face>.head>.upper>.nose>.noseWhite::before {
    content: "";
    display: block;
    border-left: 2px solid black;
    height: 23px;
    transform: translateX(9px) translateY(28px);
}


.face>.head>.upper>.beardLeft {
    position: absolute;
    width: 70px;
    border-bottom: 3px solid black;
    transform: translateY(70px) translateX(-55px);
}

.face>.head>.upper>.beardLeft::before {
    content: "";
    display: block;
    width: 70px;
    border-bottom: 3px solid black;
    transform: rotate(21deg) translateY(-20px) translateX(-7px);
}

.face>.head>.upper>.beardLeft::after {
    content: "";
    display: block;
    width: 81px;
    border-bottom: 3px solid black;
    transform: rotate(-9deg) translateY(14px) translateX(-11px);
}

.face>.head>.upper>.beardRight {
    position: absolute;
    width: 70px;
    border-bottom: 3px solid black;
    transform: translateY(70px) translateX(55px);
}

.face>.head>.upper>.beardRight::before {
    content: "";
    display: block;
    width: 70px;
    border-bottom: 3px solid black;
    transform: rotate(-21deg) translateY(-20px) translateX(7px);
}

.face>.head>.upper>.beardRight::after {
    content: "";
    display: block;
    width: 81px;
    border-bottom: 3px solid black;
    transform: rotate(9deg) translateY(14px) translateX(2px);
}

.face>.head>.upper>.leftEye {
    position: absolute;
    height: 52px;
    width: 52px;
    border-radius: 50%;
    border: 1.5px solid black;
    transform: translateX(-25px) translateY(-1px);
    background: white;
}

.face>.head>.upper>.leftEye>.eye1 {
    border: 1px solid black;
    height: 20px;
    width: 20px;
    background: black;
    transform: rotate(45deg) translateX(30px) translateY(-10px);
    border-radius: 11px 28px 11px;
    position: relative;
}
.face>.head>.upper>.leftEye>.eye1::before{
    content:"";
    display: block;
    height: 5px;
    width: 5px;
    position: absolute;
    top:7px;
    left: 4px;
    border-radius: 3px 10px 3px;
    background:white;
}

.face>.head>.upper>.rightEye {
    position: absolute;
    height: 52px;
    width: 52px;
    border-radius: 50%;
    border: 1.5px solid black;
    transform: translateX(25px) translateY(-1px);
    background: white;
    display: flex;
    justify-content: center;
    align-items:center;
    overflow: hidden;
}
.face>.head>.upper>.rightEye>.eye2{
    height: 20px;
    width:20px;
    border-radius: 50%;
    border:2px solid black;
    transform: translateY(25px);
}

.body{
    height: 150px;
    width:150px;
    border-radius: 50px 50px 120px 120px;
    border:2px solid black;
    transform: translateY(-50px);
    background:rgb(53, 161, 201);
    position: relative;
    z-index:1;
}
.body>.armLeft{
    transform: translateY(-44px) translateX(-43px)  rotate(-26deg);
    height: 100px;
    width: 100px;
    border:2px solid black;
    background: rgb(53, 161, 201);
    border-radius: 0 70px 20px 70px;
}
.body>.armRight{
    transform: translateY(-142px) translateX(84px)  rotate(-58deg);
    height: 100px;
    width: 100px;
    border:2px solid black;
    background: rgb(53, 161, 201);
    border-radius: 0 70px 20px 70px;
}
.body>.armLeft::before{
    content:"";
    display: block;
    height: 60px;
    width: 60px;
    border:2px solid black;
    border-radius: 50%;
    background:white;
    transform: translateX(-15px) translateY(-20px);
}
.body>.armRight::after{
    content:"";
    display: block;
    height: 60px;
    width: 60px;
    border:2px solid black;
    border-radius: 50%;
    background:white;
    transform: translateX(63px) translateY(54px);
}
.body>.pocket{
    position: absolute;
    height: 70px;
    width: 115px;
    top: 51px;
    left: 17px;
    background:white;
    border-radius: 50%/50%;
    display: flex;
    justify-content: center;
    align-items:center;
}
.foot>.footLeft{
    width: 65px;
    height: 100px;
    border:2px solid black;
    background:white;
    border-radius: 50%/50%;
    transform: translateX(5px);
}
.foot>.footRight{
    width: 65px;
    height: 100px;
    border:2px solid black;
    background:white;
    border-radius: 50%/50%;

}
.foot{
    height: 200px;
    width: 150px;
    display: flex;
    transform: translateY(-127px) translateX(10px);
}
.body>.redScarf{
    position: absolute;
    height: 50px;
    width: 100px;
    top:6px;
    left: 23px;
    border-radius: 50%/50%;
    background:rgb(161, 23, 46);
    z-index:1;
}
.body>.pocket>.bag{
    height: 30px;
    width: 65px;
    border:2px solid black;
    border-radius: 0 0 50px 50px;
    margin-top: 5px;
}
.body>.bell{
    position: absolute;
    top:46px;
    left: 56px;
    height: 37px;
    width: 37px;
    border:2px solid black;
    border-radius: 50%;
    z-index:1;
    background:rgb(241, 150, 41);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
}
.body>.bell::before{
    content:"";
    display: block;
    height: 10px;
    width: 10px;
    border:1px solid black;
    background:black;
    border-radius: 50%;
    margin-top: 5px;
}
.body>.bell::after{
    content:"";
    display: block; 
    width: 20px;
    border:1px solid black;
    background:black;
}
.Dragonfly{
    height: 50px;
    width:50px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}
.Dragonfly>.sustain{
    height: 13px;
    width:9px;
    border:2px solid rgb(0, 0, 0);
    border-bottom:0px;
    background:rgb(252, 193, 54);
}
.Dragonfly>.platform{
    height: 15px;
    width:30px;
    border:3px solid black;
    border-radius: 30px 30px 0 0;
    background:rgb(252, 193, 54);
    transform:translateY(10px);
}
.Dragonfly>.fly{
    height: 7px;
    width: 100px;
    transform:translateY(5px) rotateY(45deg);
    background:rgba(162, 171, 176,0.8);
    border-radius: 10px;
   animation:toFly linear 3s infinite;
}
@keyframes toFly{
    0%{
        transform:translateY(5px) rotateY(0deg);
    }
    100%{
        transform:translateY(5px) rotateY(180deg);
    }
}`
    },
    methods: {
        add() {
            console.log(this.template.length);
            console.log(this.template[1]);
            setInterval(() => {
                console.log(this.template[this.n])
                this.n++;
            }, 1000)
        }
    },
    created() {
        this.add();
    }

})