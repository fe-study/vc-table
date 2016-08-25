import Vue from 'vue'
import vcTable from '../dist/build.js'
import vueAnimatedList from './vue-animated-list'

Vue.use(vueAnimatedList)

new Vue({
	el: '#app',
	data () {
		return {
            bools: {
                'true': true,
                'false': false
            },

            name: "name",
            dataPlus: {},

            columns: ['c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c7', 'c9'],
            columnsMap: {
                'c0': '中文0',
                'c1': '中文1',
                'c2': '中文2',
                'c3': '中文3',
                'c4': '中文4',
                'c5': '中文5',
                'c6': '中文6',
                'c7': '中文7',
                'c8': '中文8',
                'c9': '中文9'
            },
            data: {},
            title: "表头已转换为中文, 按钮点击后请查看控制台",
            titleAlign: "center",
            showTableHeader: true, 
            exportLabel:"导出",
            exportable: true,
            searchable: true,
            sortable: true,
            tableFixed: false
		}
	},
    created () {
        this.data = [{
            'c0': 0,
            'c1': 1,
            'c2': '2',
            'c3': 3,
            'c4': '2.234243423423424',
            'c5': 2,
            'c6': 4,
            'c7': 7,
            'c8': 5,
            'c9': 9
        }, {
            'c0': 1,
            'c1': 1,
            'c2': '7',
            'c3': 3,
            'c4': '2.32442423423423424342',
            'c5': 5,
            'c6': 2,
            'c7': 7,
            'c8': 1,
            'c9': 9
        }, {
            'c0': 2,
            'c1': 2,
            'c2': '1',
            'c3': 3,
            'c4': 2.23423423424,
            'c5': 7,
            'c6': 6,
            'c7': 8,
            'c8': 4,
            'c9': 9
        }, {
            'c0': 3,
            'c1': 1,
            'c2': '1',
            'c3': 3,
            'c4': 4,
            'c5': 2,
            'c6': 7,
            'c7': 7,
            'c8': 9,
            'c9': 9
        }, {
            'c0': 4,
            'c1': 1,
            'c2': '2',
            'c3': 3,
            'c4': 4.234234234234,
            'c5': 2,
            'c6': 1,
            'c7': 7,
            'c8': 2,
            'c9': 9
        }, {
            'c0': 5,
            'c1': 2,
            'c2': '6',
            'c3': 3,
            'c4': 1.3245342423423424234234,
            'c5': 5,
            'c6': 6,
            'c7': 7,
            'c8': 1,
            'c9': 9
        }, {
            'c0': 6,
            'c1': 1,
            'c2': '6',
            'c3': 3,
            'c4': 4.23444444444444,
            'c5': 7,
            'c6': 1,
            'c7': 7,
            'c8': 5,
            'c9': 9
        }]

    },
	components: {
        vcTable
    },
    events: {
        TABLE (msg) {
            // do your own handler with action & data in msg 
            let action = msg.action
            let data = msg.data
            console.log(action, data, msg)
        }
    }
})
