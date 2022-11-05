// @/mixin/index.js
export const mixins = {
    filters: {
        createddate(str) {
            let date = new Date(str * 1000)
            let year = date.getFullYear()
            let month = date.getMonth()
            if (month == 0) {
                month = 12
            }
            if (month < 10) {
                month = '0' + month
            }
            let datenow = date.getDate()
            if (datenow < 10) {
                datenow = '0' + datenow
            }

            return `${year} - ${month} - ${datenow}`
        }
    },
    methods: {
        willgototop() {
            this.$refs.scroll.scrollTo(0, 0)
        }
    },
    data() {
        return {

        }
    }
}