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
        // 用 e.detail 接收子组件参数
        this.$set('videoPath', e.detail.videoFile)
        this.$set('isShow', true)
    }
}
