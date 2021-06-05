import prompt from '@system.prompt';

export default {
    data: {
        title: "",
        isShow: false
    },
    onInit() {
        this.title = this.$t('strings.world');
    },
    showPlayer(e) {
        prompt.showToast({
            message: '点击生效',
            duration: 2000,
        });
        this.$set('isShow', true)
    }
}
