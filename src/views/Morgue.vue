<template>
    <div class="morgue">
        <template v-if="morgue !== null">
            <div class="morgue-header">
                <div class="version">
                    <div><b>{{ morgue.header.type }}</b></div>
                    <div>v{{ morgue.header.version }}</div>
                    <div>({{ morgue.header.client }})</div>
                </div>

                <div>
                    <b>{{ morgue.stats.name }}</b> {{ morgue.stats.title }} (<span class="keyword race" :style="`color: ${getRaceColor(morgue.stats.species)}`">{{ morgue.stats.species }} </span> <span class="keyword background" :style="`color: ${getBackgroundColor(morgue.stats.job)}`">{{ morgue.stats.job }}</span>)
                </div>

                <div>
                    <b>Turns:</b> {{ morgue.stats.turns}}, <b>Time:</b> {{ morgue.stats.time | formattedHours }}
                </div>

                <div v-if="morgue.header.seed">
                    <b>Seed:</b> {{ morgue.header.seed }}
                </div>

                <div class="morgue-header__sections">
                    <a v-if="morgue.hiscore" href="#hiscore">Score</a>
                    <a href="#stats">Character</a>
                    <a href="#inventory">Inventory</a>
                    <a href="#skills">Skills</a>
                    <a href="#dungeon">Dungeon Overview</a>
                    <a href="#abilities">Mutations</a>
                    <a href="#history">Message History</a>
                    <a href="#kills">Kills</a>
                    <a href="#notes">Notes</a>
                    <a href="#vaults">Vaults</a>
                    <a href="#skill-gain">Skills Evolution</a>
                    <a href="#actions">Actions</a>
                    <a href="#experience">Experience</a>
                    <a href="#turns">Turns</a>
                </div>
            </div>

            <div class="morgue-sections">
                <section v-if="morgue.hiscore" class="morgue-section hiscore" id="hiscore">
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
                                The game lasted <span class="date"><b>{{ morgue.stats.time | formattedHours }} ({{ morgue.stats.turns }} turns)</b></span>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="morgue-section stats" id="stats">
                    <div class="stats__data">
                        <table>
                            <tbody>
                                <tr>
                                    <td class="stats__data__label">Health:</td>
                                    <td class="stats__data__value">
                                        <span class="stats__data__value__actual">{{ morgue.stats.health.value }}</span>
                                        /
                                        <span class="stats__data__value__realmax" v-if="morgue.stats.health.realMax && morgue.stats.health.realMax !== morgue.stats.health.real">
                                            {{ morgue.stats.health.realMax }}
                                        </span>
                                        <span v-else class="stats__data__value__realmax">
                                            {{ morgue.stats.health.max }}
                                        </span>
                                        <span class="stats__data__value__max" v-if="morgue.stats.health.realMax && morgue.stats.health.realMax !== morgue.stats.health.real">
                                            ({{ morgue.stats.health.max }})
                                        </span>
                                    </td>
                                <tr>
                                    <td class="stats__data__label">Magic:</td>
                                    <td class="stats__data__value">
                                        <span class="stats__data__value__actual">{{ morgue.stats.magic.value }}</span>
                                        /
                                        <span class="stats__data__value__realmax" v-if="morgue.stats.magic.realMax && morgue.stats.magic.realMax !== morgue.stats.magic.real">
                                            {{ morgue.stats.magic.realMax }}
                                        </span>
                                        <span v-else class="stats__data__value__realmax">
                                            {{ morgue.stats.magic.max }}
                                        </span>
                                        <span class="stats__data__value__max" v-if="morgue.stats.magic.realMax && morgue.stats.magic.realMax !== morgue.stats.magic.real">
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
                                        <span class="stats__data__value__max" v-if="morgue.stats.strength.realMax && morgue.stats.strength.realMax !== morgue.stats.strength.real"> 
                                            ({{ morgue.stats.strength.max }})
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="stats__data__label">Int:</td>
                                    <td class="stats__data__value">
                                        <span class="stats__data__value__actual">{{ morgue.stats.intelligence.value }}</span>
                                        <span class="stats__data__value__max" v-if="morgue.stats.intelligence.realMax && morgue.stats.intelligence.realMax !== morgue.stats.intelligence.real"> 
                                            ({{ morgue.stats.intelligence.max }})
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="stats__data__label">Dex:</td>
                                    <td class="stats__data__value">
                                        <span class="stats__data__value__actual">{{ morgue.stats.dexterity.value }}</span>
                                        <span class="stats__data__value__max" v-if="morgue.stats.dexterity.realMax && morgue.stats.dexterity.realMax !== morgue.stats.dexterity.real"> 
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
                                    
                                        <template v-if="morgue.stats.experience.next">
                                            <b> Next: </b>
                                            <span class="stats__data__value__actual">{{ morgue.stats.experience.next }}%</span>
                                        </template>
                                    </td>
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

                <section class="morgue-section resistances-equipment">
                    <div class="stats__data">
                        <table>
                            <tbody>
                                <tr v-for="(resistance, index) in morgue.stats.resistances" :key="index">
                                    <td class="stats__data__label">
                                        {{ resistance.name }}
                                    </td>
                                    <td class="stats__data__value">
                                        {{ resistance.symbolValue }}
                                    </td>
                                </tr>

                                <tr>
                                    <td class="stats__data__label">
                                        HPRegen
                                    </td>
                                    <td class="stats__data__value">
                                        <span class="stats__data__value__actual">{{ morgue.stats.hpRegen | formatRegen }}</span>/turn
                                    </td>
                                </tr>

                                <tr>
                                    <td class="stats__data__label">
                                        MPRegen
                                    </td>
                                    <td class="stats__data__value">
                                        <span class="stats__data__value__actual">{{ morgue.stats.mpRegen | formatRegen }}</span>/turn
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="stats__data">
                        <table>
                            <tbody>
                                <tr>
                                    <td class="stats__data__label">SeeInvis</td>
                                    <td class="stats__data__value">{{ morgue.stats.seeInvisible ? "+" : "."}}</td>
                                </tr>

                                <tr>
                                    <td class="stats__data__label">Gourm</td>
                                    <td class="stats__data__value">{{ morgue.stats.gourmand ? "+" : "."}}</td>
                                </tr>

                                <tr>
                                    <td class="stats__data__label">Faith</td>
                                    <td class="stats__data__value">{{ morgue.stats.faith ? "+" : "."}}</td>
                                </tr>

                                <tr>
                                    <td class="stats__data__label">Spirit</td>
                                    <td class="stats__data__value">{{ morgue.stats.spirit ? "+" : "."}}</td>
                                </tr>

                                <tr>
                                    <td class="stats__data__label">Reflect</td>
                                    <td class="stats__data__value">{{ morgue.stats.reflect ? "+" : "."}}</td>
                                </tr>

                                <tr>
                                    <td class="stats__data__label">Harm</td>
                                    <td class="stats__data__value">{{ morgue.stats.harm ? "+" : "."}}</td>
                                </tr>

                                <tr v-if="morgue.stats.randomRage">
                                    <td class="stats__data__label">Rnd*Rage</td>
                                    <td class="stats__data__value">+</td>
                                </tr>
                                <tr v-else>
                                    <td class="stats__data__label">Clarity</td>
                                    <td class="stats__data__value">{{ morgue.stats.clarity ? "+" : "."}}</td>
                                </tr>

                                <tr v-if="morgue.stats.noTeleportation">
                                    <td class="stats__data__label">NoTele</td>
                                    <td class="stats__data__value">+</td>
                                </tr>
                                <tr v-else-if="morgue.stats.randomTeleportation">
                                    <td class="stats__data__label">Clarity</td>
                                    <td class="stats__data__value">+</td>
                                </tr>

                                <tr v-if="morgue.stats.noCast">
                                    <td class="stats__data__label">NoCast</td>
                                    <td class="stats__data__value">+</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="stats__data equipment">
                        <table>
                            <tbody>
                                <tr v-for="(equipment, index) in morgue.stats.equipment" :key="index">
                                    <td v-if="equipment.item !== 'empty'" class="stats__data__value">
                                        {{ equipment.position ? `${equipment.position} - ` : "" }}{{ equipment.item}} {{ equipment.melded ? "(melded)" : "" }}
                                    </td>
                                    <td v-else>
                                        no {{ equipment.slot.toLowerCase() }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section class="morgue-section mutations">
                    <div class="stat__data">
                        <div>
                            <span class="stats__data__label">@:</span>
                            <span class="stats__data__value">
                                {{ morgue.stats.status.length > 0 ? morgue.stats.status.join(", ") : "no status effetcts"}}
                            </span>
                        </div>

                        <div>
                            <span class="stats__data__label">A:</span>
                            <span class="stats__data__value">
                                {{ morgue.stats.mutations.length > 0 ? morgue.stats.mutations.join(", ") : "no striking features"}}
                            </span>
                        </div>

                        <div v-if="morgue.stats.hasOrb">
                            <span class="stats__data__label">0:</span>
                            <span class="stats__data__value">
                                Orb of Zot
                            </span>
                        </div>

                        <div v-if="morgue.stats.runes.length > 0">
                            <span class="stats__data__label">}:</span>
                            <span class="stats__data__value">
                                {{ morgue.stats.runes.join(", ") }}
                            </span>
                        </div>
                    </div>
                </section>

                <section class="morgue-section visits">
                    <div v-if="morgue.hiscore && morgue.hiscore.hasEscaped">
                        You escaped
                    </div>
                    <div v-else>
                        {{ morgue.hiscore ? "You were " : "You are " }} on level <b>{{ morgue.location.depth }}</b> of <span class="keyword branch" :style="`color: ${getBranchColor(morgue.location.branch)}`">{{ morgue.location.branchLong }}</span>
                    </div>

                    <div v-if="morgue.religion">
                        You worshipped <span class="keyword god" :style="`color: ${getGodColor(morgue.religion.god)}`">{{ morgue.religion.god }}</span>
                    </div>

                    <div v-if="morgue.religion">
                        {{ morgue.religion.favour }}
                    </div>
                </section>

                <h2 id="notes">Notes</h2>
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
            </div>
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

            capitalizeFirst: (string) => string[0].toUpperCase() + string.slice(1),

            formatRegen: (number) => numeral(number / 100).format("0.00")
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

    .morgue-header {
        position: sticky;
        top: 2em;
        left: 0;
        display: inline-block;
        vertical-align: top;

        padding-right: 3em;
        margin-left: -21em;
        width: 18em;

        line-height: 1.5em;
        font-size: .9em;
    }

    .version {
        margin-bottom: 1em
    }

    .morgue-header__sections {
        margin-top: 2em;
        text-align: right;
    }

    .morgue-header__sections a {
        display: block;
        margin: .7em 0;

        text-decoration: none;
        color: #2c3e50;
        font-weight: bold;
    }

    .morgue-header__sections a:hover {
        text-decoration: underline;
    }

    .morgue-sections {
        display: inline-block;
        border-left: 1px solid #2C3E5010;
        padding: 2em 0 0 2em;
    }

    .notes {
        display: flex;
    }

    .morgue-section {
        margin-bottom: 2em;
        padding: 0 1em;
    }

    .morgue_section:first-child {
        margin-top: 2em;
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
        font-size: 1.1em;
        line-height: 1.5em;
    }

    .hiscore__info {
        margin-left: 2em;
        display: inline-block;
    }

    .stats, .resistances-equipment {
        display: flex;
    }

    .stats__data {
        display: inline-block;
        margin-right: 0.7em;
        vertical-align: top;
        flex-grow: 1;
    }

    .stats__data:last-child {
        margin-right: 0;
    }

    .stats__data__label {
        font-weight: bold;
    }

    .stats__data.equipment {
        flex-grow: 20;
    }
</style>
