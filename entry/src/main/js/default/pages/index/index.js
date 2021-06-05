import prompt from '@system.prompt';

export default {
    data: {
        title: "",
        isShow: false,
        videoPath: null
    },
    onInit() {

    },
    showPlayer(e) {
        this.$set('videoPath', '/common/videos/1.mp4')
        this.$set('isShow', true)
    }
}
