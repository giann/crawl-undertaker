<template>
    <div class="morgue">
        <template v-if="morgue !== null">
            <section v-if="morgue.hiscore" class="morgue-section hiscore">
                <div class="hiscore">
                    <span class="hiscore__score">{{ morgue.hiscore.points | formattedNumber }}</span>
                    
                    <div class="hiscore__info">
                        <div class="hiscore__fullname">
                            {{ morgue.stats.name }} {{ morgue.stats.title }}
                        </div>

                        <div class="hiscore__line">
                            Began as a <span class="keyword race" :style="`color: ${getRaceColor(morgue.stats.species)}`">{{ morgue.stats.species }} </span>
                            <span class="keyword background" :style="`color: ${getBackgroundColor(morgue.stats.job)}`">{{ morgue.stats.job }}</span>
                            on <span class="date"><b>{{ morgue.hiscore.birth }}</b></span>
                        </div>

                        <div v-if="morgue.hiscore.godRank" class="hiscore__line">
                            Was {{ morgue.hiscore.godRank }} of
                            <span
                                class="keyword god"
                                :style="`color: ${getGodColor(morgue.stats.god.god)}`">{{ morgue.religion.god }}</span>
                        </div>

                        <div class="hiscore__line">
                            {{ morgue.hiscore.deathDescription | capitalizeFirst }}
                        </div>

                        <div class="hiscore__line">
                            On level <b>{{ morgue.hiscore.location.depth }}</b> of
                            <span
                                class="keyword branch"
                                :style="`color: ${getBranchColor(morgue.hiscore.location.branch)}`">{{ morgue.hiscore.location.branchLong }}</span>
                        </div>

                        <div class="hiscore__line">
                            The game lasted <span class="date"><b>{{ morgue.hiscore.time | formattedHours }} ({{ morgue.hiscore.turns }} turns)</b></span>
                        </div>
                    </div>
                </div>
            </section>

            <section class="morgue-section stats">
                <div class="stats__data">
                    <table>
                        <tbody>
                            <tr>
                                <td class="stats__data__label">Health:</td>
                                <td class="stats__data__value">
                                    <span class="stats__data__value__actual">{{ morgue.stats.health.value }}</span>
                                    /
                                    <span class="stats__data__value__realmax" v-if="morgue.stats.health.realMax">
                                        {{ morgue.stats.health.realMax }}
                                    </span>
                                    <span v-else class="stats__data__value__realmax">
                                        {{ morgue.stats.health.max }}
                                    </span>
                                    <span class="stats__data__value__max" v-if="morgue.stats.health.realMax">
                                        ({{ morgue.stats.health.max }})
                                    </span>
                                </td>
                            <tr>
                                <td class="stats__data__label">Magic:</td>
                                <td class="stats__data__value">
                                    <span class="stats__data__value__actual">{{ morgue.stats.magic.value }}</span>
                                    /
                                    <span class="stats__data__value__realmax" v-if="morgue.stats.magic.realMax">
                                        {{ morgue.stats.magic.realMax }}
                                    </span>
                                    <span v-else class="stats__data__value__realmax">
                                        {{ morgue.stats.magic.max }}
                                    </span>
                                    <span class="stats__data__value__max" v-if="morgue.stats.magic.realMax">
                                        ({{ morgue.stats.magic.max }})
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td class="stats__data__label">Gold:</td>
                                <td class="stats__data__value">
                                    <span class="stats__data__value__actual">{{ morgue.stats.gold }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="stats__data">
                    <table>
                        <tbody>
                            <tr>
                                <td class="stats__data__label">AC:</td>
                                <td class="stats__data__value">
                                    <span class="stats__data__value__actual">{{ morgue.stats.armorClass }}</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="stats__data__label">EV:</td>
                                <td class="stats__data__value">
                                    <span class="stats__data__value__actual">{{ morgue.stats.evasion }}</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="stats__data__label">SH:</td>
                                <td class="stats__data__value">
                                    <span class="stats__data__value__actual">{{ morgue.stats.shieldClass }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="stats__data">
                    <table>
                        <tbody>
                            <tr>
                                <td class="stats__data__label">Str:</td>
                                <td class="stats__data__value">
                                    <span class="stats__data__value__actual">{{ morgue.stats.strength.value }}</span>
                                    <span class="stats__data__value__max" v-if="morgue.stats.strength.realMax">
                                        ({{ morgue.stats.strength.max }})
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td class="stats__data__label">Int:</td>
                                <td class="stats__data__value">
                                    <span class="stats__data__value__actual">{{ morgue.stats.intelligence.value }}</span>
                                    <span class="stats__data__value__max" v-if="morgue.stats.intelligence.realMax">
                                        ({{ morgue.stats.intelligence.max }})
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td class="stats__data__label">Dex:</td>
                                <td class="stats__data__value">
                                    <span class="stats__data__value__actual">{{ morgue.stats.dexterity.value }}</span>
                                    <span class="stats__data__value__max" v-if="morgue.stats.dexterity.realMax">
                                        ({{ morgue.stats.dexterity.max }})
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="stats__data">
                    <table>
                        <tbody>
                            <tr>
                                <td class="stats__data__label">XL:</td>
                                <td class="stats__data__value">
                                    <span class="stats__data__value__actual">{{ morgue.stats.experience.value }}</span>
                                </td>

                                <template v-if="morgue.stats.experience.next">
                                    <td class="stats__data__label">Next:</td>
                                    <td class="stats__data__value">
                                        <span class="stats__data__value__actual">{{ morgue.stats.experience.next }}%</span>
                                    </td>
                                </template>
                            </tr>

                            <tr>
                                <td class="stats__data__label">God:</td>
                                <td v-if="morgue.stats.god" class="stats__data__value">
                                    <span
                                        class="stats__data__value__actual"
                                        :style="`color: ${getGodColor(morgue.stats.god.god)}`">
                                        {{ morgue.stats.god.god }}
                                    </span>
                                    [{{ morgue.stats.god.rank }}]
                                </td>
                                <td v-else>
                                    <span class="stats__data__value__actual">No god</span>
                                </td>
                            </tr>

                            <tr>
                                <td class="stats__data__label">Spells:</td>
                                <td class="stats__data__value">
                                    <span class="stats__data__value__actual">{{ morgue.stats.spells.value }}</span>
                                    /
                                    <span class="stats__data__value__realmax">
                                        {{ morgue.stats.spells.max }}
                                    </span>
                                    levels left
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <h2>Milestones</h2>
            <section class="morgue-section notes">
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
                                    :cx="getBranchWidth(note.location.branch) * 8"
                                    :cy="37 + index * 69"
                                    r="3"
                                    class="note-node"
                                    :fill="getBranchColor(note.location.branch, note.location.depth)"/>
                                <image
                                    v-if="getBranchImage(index)"
                                    :key="`gateway-${index}`"
                                    :xlink:href="getBranchImage(index)"
                                    :x="getBranchWidth(note.location.branch)*8 - 8"
                                    :y="37 + index * 69 - 8"
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
        </template>
    </div>
</template>

<script>
    import { branches, gods, races, backgrounds, resistances } from "../undertaker/morgue.js";
    import { darker } from "../undertaker/colors.js";
    const numeral = require("numeral");
    const moment = require("moment");

    export default {
        name: "Morgue",

        data() {
            return {
                morgue: null,
            }
        },

        filters: {
            formattedNumber: (number) => numeral(number).format("0,0"),

            formattedHours: (seconds) =>
                moment()
                    .startOf('day')
                    .seconds(seconds)
                    .format('H:mm:ss'),

            capitalizeFirst: (string) => string[0].toUpperCase() + string.slice(1)
        },

        methods: {
            getBranch(branch) {
                return branches[branch.toLowerCase()];
            },

            getBranchWidth(branch) {
                return this.getBranch(branch).width + 1;
            },

            getBranchColor(branch, depth) {
                if (depth == undefined) {
                    depth = 1;
                }

                branch = this.getBranch(branch);
                let baseColor = branch.color;
                let factor = 1 - (0.3 * (depth / branch.depth));
                let color = darker(baseColor.r, baseColor.g, baseColor.b, factor);

                return `rgb(${color.r}, ${color.g}, ${color.b})`;
            },

            getGodColor(god) {
                let color = gods[god.toLowerCase()].color;

                return `rgb(${color.r}, ${color.g}, ${color.b})`
            },

            getRaceColor(race) {
                let color = races[race.toLowerCase()].color;

                return `rgb(${color.r}, ${color.g}, ${color.b})`
            },

            getBackgroundColor(background) {
                let color = backgrounds[background.toLowerCase()].color;

                return `rgb(${color.r}, ${color.g}, ${color.b})`
            },

            getResistanceColor(resistance) {
                let color = resistances[resistance.toLowerCase()].color;

                return `rgb(${color.r}, ${color.g}, ${color.b})`
            },

            getBranchImage(index) {
                let previous = this.$data.morgue.notes[index-1]
                    ? this.$data.morgue.notes[index-1].location.branch
                    : null;
                let current = this.$data.morgue.notes[index].location.branch;

                if (previous) {
                    if (previous !== current) {
                        return this.getBranch(current).tile;
                    }
                } else {
                    return this.getBranch("dungeon").tile;
                }

                return null;
            },

            getLine(index) {
                if (index == 0)
                    return;

                let previous = this.$data.morgue.notes[index-1]
                    ? this.$data.morgue.notes[index-1].location.branch
                    : null;
                let current = this.$data.morgue.notes[index].location.branch;
                let previousW = previous ? this.getBranchWidth(previous) : null;
                let currentW = this.getBranchWidth(current);

                index--;

                if (previous && previousW !== currentW) {
                    if (previousW > currentW) {
                        return `M${previousW * 8},${37 + (index * 69)} C${previousW * 8},${37 + (index * 69) + 69/2} ${currentW * 8},${37 + (index * 69) + 69/2} ${currentW * 8},${37 + (index + 1) * 69}`;
                    } else {
                        return `M${previousW * 8},${37 + (index * 69)} C${previousW * 8},${37 + (index * 69) + 69/2} ${currentW * 8},${37 + (index * 69) + 69/2} ${currentW * 8},${37 + (index + 1) * 69}`;
                    }
                }

                return `M${this.getBranchWidth(current)*8},${37 + (index * 69)} L${this.getBranchWidth(current)*8},${37 + ((index+1) * 69)}`;
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

    .morgue-section {
        margin-bottom: 2em;
    }

    .travel-notes {
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

    .hiscore__fullname {
        font-size: 1.8em;
        margin-bottom: 0.5em;
        text-transfrom: capitalize;
    }

    .hiscore__score {
        font-weight: bold;
        font-size: 1.8em;
        text-decoration: underline;

        vertical-align: top;
    }

    .hiscore__line {
        line-height: 1.5em;
    }

    .hiscore__info {
        margin-left: 2em;
        display: inline-block;
    }

    .stats__data {
        display: inline-block;
        margin-right: 0.7em;
    }

    .stats__data:last-child {
        margin-right: 0;
    }

    .stats__data__label {
        font-weight: bold;
    }
</style>
