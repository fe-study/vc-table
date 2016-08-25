<template>
    <div class="vc-table-container">
        <form class="search-area pull-left" v-if="searchable">
            <label>筛选:</label>
            <input type="text" class="vc-table-filter" name="query" v-model="filterKey" />
        </form>
        <div class="vc-table-title" :style="{ 'text-align': titleAlign }" :class="{'title-only': !searchable && !exportable }">{{ title }}</div>
        <div class="export-area pull-right" v-if="exportable">
            <button class="btn btn-info btn-sm pull-right" @click="exportSortArgs">导出数据</button>
        </div>
        <table class="vc-table table table-striped table-hover" :class="{ 'vc-table-fixed': tableFixed, 'title-only': (!searchable && !exportable) }">
            <thead v-if="showTableHeader">
                <tr @click="handleClick">
                    <th v-for="key in columns"
                        @click="sortBy(key)"
                        :class="{ active: sortKey == key }">
                        {{ key | zhCN }}
                        <span class="arrow" v-if="sortable"
                            :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <!-- 制作表格的关键，行循环，再填每一行的列, 不可用内置index做排序!故数据源必须自带index -->
                <tr v-for="
                    (index, entry) in data
                    | filterBy filterKey 
                    | newOrderBy sortKey sortOrders[sortKey]" 
                    transition="staggered"
                    stagger="5"
                >
                    <td v-for="key in columns">
                        <span>{{ entry[key] }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="less">
/**
 * vc-table.less
 * Mail   : pengrui@iwaimai.baidu.com
 */

@table-bg: #fff;
@arrow-bg: #666;
@arrow-active-bg: #28d63d;

.vc-table-container {
    position: relative;

    .search-area,
    .export-area {
        display: inline-block;
        margin-bottom: 10px;
        z-index: 2;
        position: relative;
    }
    .vc-table-title {
        position: absolute;
        left: 50%;
        width: 100%;
        -webkit-transform: translate(-50%, 0);
        transform: translate(-50%, 0);
        height: 30px;
        line-height: 30px;
        padding: 0 250px;

        &.title-only {
            top: -@only-title-offset;
            padding: 0;
        }
        &.title-align-left {
            text-align: left;
        }
        &.title-align-center {
            text-align: center;
        }
        &.title-align-right {
            text-align: right;
        }
    }

    // input
    .vc-table-filter {
        margin-left: 5px;
        height: 30px;
        padding: 4px 8px;
        -wekit-box-shadow: none;
        box-shadow: none;
        font-size: 14px;
        line-height: 1.428571429;
        color: #555555;
        vertical-align: middle;
        background-color: #ffffff;
        background-image: none;
        border: 1px solid #cccccc;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    }
    .vc-table-filter:focus {
        border-color: #46c3c1;
        -webkit-box-shadow: inset 0 1px 1px rgba(102, 175, 233, 0.1), 0 0 5px rgba(102, 175, 233, 0.3);
        box-shadow: inset 0 1px 1px rgba(102, 175, 233, 0.1), 0 0 5px rgba(102, 175, 233, 0.3);
    }
}

@only-title-offset: 40px;
table.vc-table {
    border-radius: 3px;
    text-align: center;
    border: 1px solid #ddd;


    &.title-only {
        margin-top: @only-title-offset;
    }

    &.vc-table-fixed {
        table-layout: fixed;
    }

    th {
        &.hide {
            display: none;
        }
        cursor: pointer;
        text-align: center; /* override bootstrap */
        position: relative;
        border-bottom: none;
    }

    tr:hover {
        cursor: pointer;  
    }

    td {
        background-color: @table-bg;
        padding: 4px;
        position: relative;

        // Rank排位label
        span.top1,
        span.top2,
        span.top3 {
            background-color: #F37070;
            border-radius: 4px;
            padding: 3px 12px;
            color: #fff;
        }
        span.topN { /* 4位及以后 */
            background-color: #e6e2e2;
            border-radius: 4px;
            padding: 3px 12px;
        }
    }

    th.active {
        background-color: inherit;
    }

    th.active .arrow { /* 激活的排序标志 */
        opacity: 1;
        border-bottom-color: @arrow-active-bg;
        border-top-color: @arrow-active-bg;
    }

    .arrow {
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 0;
        margin-left: 5px;
        opacity: 0.66;
    }

    .arrow.asc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 4px solid @arrow-bg;
    }

    .arrow.dsc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid @arrow-bg;
    }
}

/* filterBy渐隐效果 */
.staggered-transition {
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
    overflow: hidden;
    margin: 0;
    height: 20px;
}
.staggered-enter, .staggered-leave {
    opacity: 0;
    height: 0;
}
/* 暂未实现 applied during enter/leave transition */
/* .staggered-enter-active, .staggered-leave-active { */
/*   transition: opacity .5s ease;  */
/* } */
/* v-for orderBy 自动动画 applied during moving transition */
.staggered-move {
  transition: transform .8s cubic-bezier(.55, 0, .1, 1); 
}

.vc-fade-transition {
    display: inline-block;
}

.vc-fade-enter {
    animation: fadeinT .5s;
}
.vc-fade-leave {
    animation: fadeoutT .5s;
}

@maxRange: 20px;

/* 淡入-从上 */
@-webkit-keyframes fadeinT {
    0%{opacity:0;-webkit-transform:translateY(-@maxRange);}
    100%{opacity:1;-webkit-transform:translateY(0);}
}
@-moz-keyframes fadeinT {
    0%{opacity:0;-moz-transform:translateY(-@maxRange);}
    100%{opacity:1;-moz-transform:translateY(0);}
}
@-ms-keyframes fadeinT {
    0%{opacity:0;-ms-transform:translateY(-@maxRange);}
    100%{opacity:1;-ms-transform:translateY(0);}
}
@keyframes fadeinT {
    0%{opacity:0;transform:translateY(-@maxRange);}
    100%{opacity:1;transform:translateY(0);}
}

/* 淡出-向上 */
@-webkit-keyframes fadeoutT{
    0%{opacity:1;-webkit-transform:translateY(0);}
    100%{opacity:0;-webkit-transform:translateY(-@maxRange);}
}
@-moz-keyframes fadeoutT{
    0%{opacity:1;-moz-transform:translateY(0);}
    100%{opacity:0;-moz-transform:translateY(-@maxRange);}
}
@-ms-keyframes fadeoutT{
    0%{opacity:1;-ms-transform:translateY(0);}
    100%{opacity:0;-ms-transform:translateY(-@maxRange);}
}
@keyframes fadeoutT{
    0%{opacity:1;transform:translateY(0);}
    100%{opacity:0;transform:translateY(-@maxRange);}
}
</style>

<script>
const COMPONENT_NS = 'TABLE'

export default {
    props: {
        name: {
            type: String,
            default: 'vc-table' + Date.now()
        },
        tpl: String, // 放出tpl属性，让用户定制组件template，支持一个字符串来代表字符串模板或模板dom标示
        data: {
            type: Array
        },
        dataParser: { // a callback to parse each entry[key] in template
            type: Function
        },
        dataPlus: Object, // 高级定制: 外部可提供一个数据对象供模板使用(比如传入baseUrl)
        columns: Array,
        columnsMap: Object, // key => value对照映射，用于可能的中文filter
        title: String, // 表头
        titleAlign: {
            type: String,
            default: 'center'
        },
        tableFixed: { // table-layout: fixed的使用
            type: Boolean,
            default: false
        },
        searchable: { // 是否可搜索过滤
            type: Boolean,
            default: false
        },
        sortable: {
            type: Boolean,
            default: false 
        },
        showTableHeader: {
            type: Boolean,
            default: true
        },
        exportLabel: {
            type: String,
            default: '导出'
        },
        exportable: { // 是否显示导出按钮(会dispatch排序参数等相关信息)
            type: Boolean,
            default: false
        }
    },
    created: function () {
        if (this.tpl) {
            this.$options.template = this.tpl
        }
    },
    data: function () {
        var sortOrders = {}
        this.columns.forEach(function (key) {
            sortOrders[key] = 1
        });
        return {
            filterKey: '',
            sortKey: '',
            sortOrders: sortOrders
        }
    },
    filters: { // 局部filter
        newOrderBy: function (arr, key, sign) {
            sign = parseInt(sign)
            return arr.sort(function(item, nextItem) {
                var t1, t2;
                t1 = item[key] == null ? -Infinity : item[key];
                t2 = nextItem[key] == null ? -Infinity : nextItem[key];
                if (isNaN(t1) || isNaN(t2)) {
                    if (t1 > t2) {
                        return sign
                    } else {
                        return -sign
                    }
                }
                return (Number(t1) - Number(t2)) * sign
            })
        },
        round (value, accuracy, keep) {
            if (typeof value !== 'number') value = +value;

            var fixed = value.toFixed(accuracy);

            return keep ? fixed : +fixed;
        },
        zhCN (columnKey) {
            let map = this.columnsMap
            let keys = Object.keys(map)
            if (keys.length > 0) {
                for (let i = 0, len = keys.length; i < len; i++) {
                    if (columnKey === keys[i]) {
                        return map[columnKey]
                        console.log(map[columnKey])
                    }
                }
            } else {
                return columnKey
            }
        }
    },
    methods: {
        sortBy: function(key) {
            if (!this.sortable) return
            this.sortKey = key;
            if (this.sortOrders[key] == null) {
                this.sortOrders[key] = -1
            } else {
                this.sortOrders[key] = this.sortOrders[key] * -1 // toggle order
            }
        },
        // 分发当前点击index
        handleClick: function() {
            var info = [].slice.call(arguments, 0)
            var msg = {
                action: 'click',
                data: info
            }
            this.$dispatch(COMPONENT_NS, msg, name)
        },
        // 分发当前排序参数
        exportSortArgs: function() {
            var msg = {
                action: 'exportSortInfo',
                data: {
                    sortKey: this.sortKey,
                    currentOrder: this.sortOrders[this.sortKey],
                    order: this.sortOrders
                }
            }
            this.$dispatch(COMPONENT_NS, msg, name) 
        }
    },
    events: {
        'triggerSort': function (key) {
            this.sortBy(key)
            var msg = {
                action: 'sortDone',
                data: {
                    sortKey: this.sortKey,
                    sortOrders: this.sortOrders
                }
            }
            this.$dispatch('COMPONENT_NS', msg)
        }
    }
}
</script>
