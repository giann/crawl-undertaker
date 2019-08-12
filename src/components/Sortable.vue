<template>
    <table>
        <thead v-if="thead && thead.length > 0">
            <tr>
                <th v-for="(head, index) in thead"
                    :key="index"
                    @click="sortBy(head.key)"
                    :class="{
                        'sorting': head.key == sortingKey,
                        'sorting--asc': head.key == sortingKey && side,
                        'sorting--desc': head.key == sortingKey && !side
                    }">
                    {{ head.label }}
                </th>
            </tr>
        </thead>

        <thead v-if="tbody && tbody.length > 0">
            <tr v-for="(row, index) in tbody" :key="index">
                <td v-for="(head, hindex) in thead" :key="hindex">
                    {{ row[head.key] }}
                </td>
            </tr>
        </thead>
    </table>
</template>

<script>
    export default {
        name: "Sortable",

        data() {
            return {
                sortingKey: null,
                side: true
            }
        },

        props: {
            thead: Array,
            tbody: Array,
            sort: String
        },

        methods: {
            sortBy(sortingKey) {
                if (this.sortingKey === sortingKey)
                    this.side = !this.side;
                else
                    this.side = true;

                this.sortingKey = sortingKey;

                this.tbody.sort((a, b) => {
                    if (a[sortingKey] < b[sortingKey])
                        return this.side ? -1: 1;
                    else if (a[sortingKey] > b[sortingKey])
                        return this.side ? 1: -1;

                    return 0;
                });
            }
        },

        created() {
            this.sortingKey = this.sort;
        }
    };
</script>

<style scoped>
    th {
        padding: 3px 1px;
        text-align: left;
        cursor: pointer;
    }

    th:hover, th.sorting {
        text-decoration: underline;
    }

    th.sorting--asc:after {
        content: "▼";
    }

    th.sorting--desc:after {
        content: "▲";
    }
</style>
