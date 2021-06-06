import utils from '../../common/utils.js';

export default {
    data: {
        title: 'World'
    },
    onInit() {

    },
    playVideo(e) {
        for (let k in e) {
            utils.log(`key=${k}, value=${e[k]}`)
        }
        // 触发事件并传参
        this.$emit('play', {
            videoFile: '/common/videos/1.mp4'
        });
    }
}
