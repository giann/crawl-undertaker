<template>
    <div class="morgue">
        <h2>Milestones</h2>
        <section v-if="morgue !== null" class="notes">
            <div class="travel-path">
                <svg width="64" :height="morgue.notes.length * 69">
                    <g>
                        <template v-for="(note, index) in morgue.notes">
                            <path
                                :key="`line-${index}`"
                                :d="getLine(index)"
                                class="note-line"
                                :stroke="getBranchColor(note.location.branch, note.location.depth)"/>
                        </template>

                        <template v-for="(note, index) in morgue.notes">
                            <circle
                                :key="`node-${index}`"
                                :cx="getBranchWidth(note.location.branch)*8"
                                :cy="(index + 1) * 69"
                                r="3"
                                class="note-node"
                                :fill="getBranchColor(note.location.branch, note.location.depth)"/>
                            <image
                                v-if="getBranchImage(index)"
                                :key="`gateway-${index}`"
                                :xlink:href="getBranchImage(index)"
                                :x="getBranchWidth(note.location.branch)*8 - 8"
                                :y="(index + 1) * 69 - 8"
                                width="16" height="16"/>
                        </template>
                    </g>
                </svg>
            </div>

            <div class="travel-notes">
                <div class="note" v-for="(note, index) in morgue.notes" :key="index">
                    <span class="note__turn">{{ note.turn }}</span>
                    <span class="note__location" :style="`color: var(--${note.location.branch.toLowerCase()})`">{{ note.location.branch }}:{{ note.location.depth }}</span>
                    <div class="note--value">{{ note.value }}</div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import { branches } from "../undertaker/morgue.js";
    import { darker } from "../undertaker/colors.js";

    export default {
        name: "Morgue",

        data() {
            return {
                morgue: null,
            }
        },

        methods: {
            getBranch(branch) {
                return branches[branch.toLowerCase()];
            },

            getBranchWidth(branch) {
                return this.getBranch(branch).width + 1;
            },

            getBranchColor(branch, depth) {
                branch = this.getBranch(branch);
                let baseColor = branch.color;
                let factor = 1 - (0.3 * (depth / branch.depth));
                let color = darker(baseColor.r, baseColor.g, baseColor.b, factor);

                return `rgb(${color.r}, ${color.g}, ${color.b})`;
            },

            getBranchImage(index) {
                let previous = this.$data.morgue.notes[index-1]
                    ? this.$data.morgue.notes[index-1].location.branch
                    : null;
                let current = this.$data.morgue.notes[index].location.branch;

                if (previous) {
                    if (previous !== current) {
                        return this.getBranch(current).portalTile;
                    }
                } else {
                    return this.getBranch("dungeon").portalTile;
                }

                return null;
            },

            getLine(index) {
                let previous = this.$data.morgue.notes[index-1]
                    ? this.$data.morgue.notes[index-1].location.branch
                    : null;
                let current = this.$data.morgue.notes[index].location.branch;
                let previousW = previous ? this.getBranchWidth(previous) : null;
                let currentW = this.getBranchWidth(current);

                if (previous && previousW !== currentW) {
                    if (previousW > currentW) {
                        return `M${previousW * 8},${index * 69} C${previousW * 8},${index * 69 + 69/2} ${currentW * 8},${index * 69 + 69/2} ${currentW * 8},${(index + 1) * 69}`;
                    } else {
                        return `M${previousW * 8},${index * 69} C${previousW * 8},${index * 69 + 69/2} ${currentW * 8},${index * 69 + 69/2} ${currentW * 8},${(index + 1) * 69}`;
                    }
                }

                return `M${this.getBranchWidth(current)*8},${index * 69} L${this.getBranchWidth(current)*8},${(index+1) * 69}`;
            }
        },

        async created() {
            this.$data.morgue = await (await fetch("http://localhost:8080/Suwur.json")).json();

            console.log(this.$data.morgue);
        }
    };
</script>

<style lang="scss">
    .morgue {
        font-size: .8em;
    }

    .notes {
        display: flex;
    }

    .travel-notes {
        padding-top: 29px;

        .note {
            height: 59px;
            box-sizing: border-box;
            padding: 10px;
            background-color: #f0f4fa;
            border-radius: 6px;
            margin: 10px 0;
        }

        .note__turn {
            font-size: .8em;
            margin-right: 2em;
        }

        .note__turn:before {
            content: "Turns: ";
            font-weight: bold;
        }

        .note__location {
            font-size: .8em;
        }

        .note__location:before {
            content: "Level: ";
            font-weight: bold;
        }

        .note--value {
            padding-top: 10px;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .note-node {
        r: 4;
        cursor: pointer;
        stroke-width: 4px;
        stroke: transparent;
        transition: r 0.3s ease-out 0s;
    }

    .note-line {
        fill: none;
        stroke-width: 2px;
    }

    .note-turn {
        padding-left: 0;
    }

    .note-location {
    }

    .note-value {
        padding-right: 0;
    }
</style>
