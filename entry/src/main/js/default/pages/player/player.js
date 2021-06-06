import utils from '../../common/utils.js';

export default {
    props: ['videoPath'],
    data() {
        return {
            title: 'World',
            videoFile: this.videoPath
        }
    },
    onInit() {
        utils.log(`播放器初始化 视频文件路径: ${this.videoFile}`)
    }
}
