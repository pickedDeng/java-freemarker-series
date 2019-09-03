var vm = new Vue({
    el:"#app",
    data () {
        return {
            showFlag:false,
            showFlag1:false,
            
        }
    },
    methods:{
        lookDetail(){
            this.showFlag1 = !this.showFlag1;
        },
        showFujian(){
            this.showFlag = !this.showFlag;
        },
        playAudio2(){
            var myaudio2 =  document.getElementById("myaudio2")
            myaudio2.play();
        },
        playAudio3(){
            var myaudio3 =  document.getElementById("myaudio3")
            myaudio3.play();
        }
    }
})