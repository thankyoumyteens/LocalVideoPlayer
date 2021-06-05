export default {
    data: {
        title: 'World'
    },
    onInit() {

    },
    playVideo(e) {
        // 触发事件并传参
        this.$emit('play', {
            videoFile: '/common/videos/1.mp4'
        });
    }
}
