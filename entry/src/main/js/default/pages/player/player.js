export default {
    props: ['videoPath'],
    data() {
        return {
            title: 'World',
            videoFile: this.videoPath
        }
    },
    onInit() {
        console.info(`播放器初始化 视频文件路径: ${this.videoFile}`)
    }
}
