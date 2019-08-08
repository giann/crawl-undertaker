const backgrounds = {
    fighter: {
        color: { r: 0x2C, g: 0x72, b: 0xBB }, // #2C72BB
    },
    wizard: {
        color: { r: 0xAD, g: 0x56, b: 0xA5 }, // #AD56A5
    },
    priest: {
        color: { r: 0xED, g: 0xED, b: 0xED }, // #EDEDED
    },
    gladiator: {
        color: { r: 0xFF, g: 0xDC, b: 0x71 }, // #FFDC71
    },
    necromancer: {
        color: { r: 0x3E, g: 0x1F, b: 0x3B }, // #3E1F3B
    },
    assassin: {
        color: { r: 0xCE, g: 0xE5, b: 0xFF }, // #CEE5FF
    },
    berserker: {
        color: { r: 0xEC, g: 0x1F, b: 0x35 }, // #EC1F35
    },
    hunter: {
        color: { r: 0x7E, g: 0xAF, b: 0x75 }, // #7EAF75
    },
    conjurer: {
        color: { r: 0xDB, g: 0x32, b: 0x94 }, // #DB3294
    },
    enchanter: {
        color: { r: 0xDB, g: 0x32, b: 0xC7 }, // #DB32C7
    },
    "fire elementalist": {
        color: { r: 0xFF, g: 0x26, b: 0x00 }, // #FF2600
    },
    "ice elementalist": {
        color: { r: 0x6B, g: 0xA7, b: 0xC0 }, // #6BA7C0
    },
    summoner: {
        color: { r: 0xFF, g: 0xA7, b: 0x52 }, // #FFA752
    },
    "air elementalist": {
        color: { r: 0xDC, g: 0xCA, b: 0xCA }, // #DCCACA
    },
    "earth elementalist": {
        color: { r: 0x64, g: 0x41, b: 0x2C }, // #64412C
    },
    skald: {
        color: { r: 0x00, g: 0x00, b: 0x00 }, // #000000
    },
    "venom mage": {
        color: { r: 0x00, g: 0xB6, b: 0x00 }, // #00B600
    },
    "chaos knight": {
        color: { r: 0x47, g: 0x00, b: 0xBB }, // #4700BB
    },
    transmuter: {
        color: { r: 0x96, g: 0x41, b: 0x86 }, // #964186
    },
    healer: {
        color: { r: 0xF6, g: 0xDC, b: 0xDC }, // #F6DCDC
    },
    stalker: {
        color: { r: 0x24, g: 0x3F, b: 0x5E }, // #243F5E
    },
    monk: {
        color: { r: 0xC0, g: 0xDB, b: 0xAD }, // #C0DBAD
    },
    warper: {
        color: { r: 0xFF, g: 0xC1, b: 0xF9 }, // #FFC1F9
    },
    wanderer: {
        color: { r: 0xE8, g: 0xDB, b: 0x92 }, // #E8DB92
    },
    artificer: {
        color: { r: 0xA9, g: 0x73, b: 0xFF }, // #A973FF
    },
    "arcane marksman": {
        color: { r: 0x69, g: 0x48, b: 0x9F }, // #69489F
    },
    "death knight": {
        color: { r: 0x3D, g: 0x1E, b: 0x3A }, // #3D1E3A
    },
    "abyssal knight": {
        color: { r: 0x22, g: 0x00, b: 0x55 }, // #220055
    },
    jester: {
        color: { r: 0xFF, g: 0xD6, b: 0x8A }, // #FFD68A
    }
};

const races = {
    barachi: {
        color: { r: 0x52, g: 0xaf, b: 0x42 }, // #52AF42
        tile: "/rltiles/payer/base/frog_m.png",
        glyph: "F"
    },
    centaur: {
        color: { r: 0xc6, g: 0x62, b: 0x25 }, // #C66225
        tile: "/rltiles/payer/base/centaur_brown_m.png",
        glyph: "c"
    },
    "deep dwarf": {
        color: { r: 0x00, g: 0xab, b: 0xf4 }, // #00ABF4
        tile: "/rltiles/payer/base/deep_dwarf_m.png",
        glyph: "g"
    },
    "deep elf": {
        color: { r: 0xdc, g: 0xdc, b: 0xdc }, // #dcdcdc
        tile: "/rltiles/payer/base/deep_elf_m.png",
        glyph: "e"
    },
    demigod: {
        color: { r: 0xff, g: 0xd4, b: 0x55 }, // #FFD455
        tile: "/rltiles/payer/base/demigod_m.png",
        glyph: "p"
    },
    demonspawn: {
        color: { r: 0xC2, g: 0x61, b: 0xb9 }, // #C261B9
        tile: "/rltiles/payer/base/demonspawn_pink.png",
        glyph: "6"
    },
    draconian: {
        color: { r: 0xff, g: 0x5a, b: 0xef }, // #FF5AEF
        tile: "/rltiles/payer/base/drcwing_brown.png",
        glyph: "d"
    },
    felid: {
        color: { r: 0xc7, g: 0x92, b: 0xea }, // #C792EA
        tile: "/rltiles/payer/base/felids/cat1.png",
        glyph: "h"
    },
    formicid: {
        color: { r: 0xbe, g: 0x2b, b: 0x2b }, // #BE2B2B
        tile: "/rltiles/payer/base/formicid.png",
        glyph: "a"
    },
    gargoyle: {
        color: { r: 0xaa, g: 0xaa, b: 0xaa }, // #AAAAAA
        tile: "/rltiles/payer/base/gargoyle_m.png",
        glyph: "9"
    },
    ghoul: {
        color: { r: 0xfb, g: 0xa9, b: 0xa9 }, // #FBA9A9
        tile: "/rltiles/payer/base/ghoul_m.png",
        glyph: "n"
    },
    gnoll: {
        color: { r: 0xff, g: 0xaf, b: 0x5f }, // #FFAF5F
        tile: "/rltiles/payer/base/gnoll_m.png",
        glyph: "g"
    },
    halfling: {
        color: { r: 0x00, g: 0x5c, b: 0xbb }, // #005CBB 
        tile: "/rltiles/payer/base/halfling_m.png",
        glyph: "p"
    },
    "hill orc": {
        color: { r: 0xdb, g: 0x32, b: 0x32 }, // #DB3232
        tile: "/rltiles/payer/base/orc_m.png",
        glyph: "o"
    },
    human: {
        color: { r: 0x7b, g: 0xa6, b: 0xa4 }, // #7BA6A4
        tile: "/rltiles/payer/base/human_m.png",
        glyph: "p"
    },
    kobold: {
        color: { r: 0xfa, g: 0x78, b: 0x83 }, // #FA7883
        tile: "/rltiles/payer/base/kobold_m.png",
        glyph: "K"
    },
    merfolk: {
        color: { r: 0x67, g: 0xbc, b: 0xe0 }, // #67BCE0
        tile: "/rltiles/payer/base/merfolk_m.png",
        glyph: "m"
    },
    minotaur: {
        color: { r: 0xdb, g: 0x30, b: 0x4b }, // #DB304B
        tile: "/rltiles/payer/base/minotaur_m.png",
        glyph: "H"
    },
    mummy: {
        color: { r: 0xaa, g: 0xaa, b: 0xc8 }, // #AAAAC8
        tile: "/rltiles/payer/base/mummy_m.png",
        glyph: "M"
    },
    naga: {
        color: { r: 0x1c, g: 0x75, b: 0x46 }, // #1C7546
        tile: "/rltiles/payer/base/naga_m.png",
        glyph: "N"
    },
    octopode: {
        color: { r: 0xbb, g: 0xdb, b: 0xff }, // #BBDBFF
        tile: "/rltiles/payer/base/octopode1.png",
        glyph: "x"
    },
    ogre: {
        color: { r: 0xe8, g: 0xd4, b: 0x63 }, // #E8D463
        tile: "/rltiles/payer/base/ogre_m.png",
        glyph: "O"
    },
    spriggan: {
        color: { r: 0xcc, g: 0xaa, b: 0xc8 }, // #C6AAC8
        tile: "/rltiles/payer/base/spriggan_m.png",
        glyph: "i"
    },
    tengu: {
        color: { r: 0x00, g: 0xb7, b: 0xe0 }, // #00B7E0
        tile: "/rltiles/payer/base/tengu_wingless_m.png",
        glyph: "Q"
    },
    troll: {
        color: { r: 0xb8, g: 0x99, b: 0x3d }, // #B8993D
        tile: "/rltiles/payer/base/troll_m.png",
        glyph: "T"
    },
    vampire: {
        color: { r: 0xbf, g: 0x00, b: 0x79 }, // #BF0079
        tile: "/rltiles/payer/base/vampire_m.png",
        glyph: "V"
    },
    "vine stalker": {
        color: { r: 0xab, g: 0xdb, b: 0x88 }, // #ABDB88
        tile: "/rltiles/payer/base/vine_stalker_m.png",
        glyph: "f"
    },
};

const gods = {
    zin: {
        color: { r: 0x7b, g: 0xa6, b: 0xa4 }, // #7BA6A4
        tile: "/rltiles/dngn/altars/zin.png"
    },
    "shining one": {
        color: { r: 0xff, g: 0xb5, b: 0x00 }, // #FFB500
        tile: "/rltiles/dngn/altars/shining_one.png"
    },
    kikubaaqudgha: {
        color: { r: 0x70, g: 0x70, b: 0x70 }, // #707070
        tile: "/rltiles/dngn/altars/kikubaaqudgha.png"
    },
    yredelemnul: {
        color: { r: 0x34, g: 0x19, b: 0x7e }, // #34197E
        tile: "/rltiles/dngn/altars/yredelemnul.png"
    },
    xom: {
        color: { r: 0xea, g: 0xea, b: 0xea }, // #EAEAEA
        // TODO: could be a gif
        tile: "/rltiles/dngn/altars/xom0.png"
    },
    vehumet: {
        color: { r: 0x00, g: 0xff, b: 0xfd }, // #00FFFD
        tile: "/rltiles/dngn/altars/vehumet1.png"
    },
    okawaru: {
        color: { r: 0x9e, g: 0xcc, b: 0xe0 }, // #9ECCE0
        tile: "/rltiles/dngn/altars/okawaru.png"
    },
    makhleb: {
        color: { r: 0x97, g: 0x00, b: 0x00 }, // #970000
        tile: "/rltiles/dngn/altars/makhleb_flame1.png"
    },
    "sif muna": {
        color: { r: 0x00, g: 0x00, b: 0xff }, // #0000ff
        tile: "/rltiles/dngn/altars/sif_muna.png"
    },
    trog: {
        color: { r: 0xe2, g: 0x00, b: 0x00 }, // #E20000
        tile: "/rltiles/dngn/altars/trog.png"
    },
    "nemelex xobeh": {
        color: { r: 0x96, g: 0x00, b: 0xff }, // #9600FF
        tile: "/rltiles/dngn/altars/nemelex1.png"
    },
    elyvilon: {
        color: { r: 0xd0, g: 0xd0, b: 0xd0 }, // #D0D0D0
        tile: "/rltiles/dngn/altars/elyvilon.png"
    },
    lugonu: {
        color: { r: 0x36, g: 0x0e, b: 0xbb }, // #360EBB
        tile: "/rltiles/dngn/altars/lugonu.png"
    },
    beogh: {
        color: { r: 0xf2, g: 0xa2, b: 0x00 }, // #F2A200
        tile: "/rltiles/dngn/altars/beogh.png"
    },
    jiyva: {
        color: { r: 0x00, g: 0x06, b: 0x10 }, // #006100
        tile: "/rltiles/dngn/altars/jiyva01.png"
    },
    fedhas: {
        color: { r: 0x89, g: 0xb9, b: 0x00 }, // #89B900
        tile: "/rltiles/dngn/altars/fedhas.png"
    },
    cheibriados: {
        color: { r: 0xb6, g: 0xe7, b: 0x52 }, // #B6E752
        tile: "/rltiles/dngn/altars/cheibriados.png"
    },
    ashenzari: {
        color: { r: 0xff, g: 0xb3, b: 0x70 }, // #FFB370
        tile: "/rltiles/dngn/altars/ashenzari.png"
    },
    dithmenos: {
        color: { r: 0x5c, g: 0x00, b: 0xf2 }, // #5C00F2
        tile: "/rltiles/dngn/altars/dithmenos.png"
    },
    gozag: {
        color: { r: 0xf2, g: 0xdb, b: 0x60 }, // #F2DB60
        tile: "/rltiles/dngn/altars/gozag0.png"
    },
    qazlal: {
        color: { r: 0x9a, g: 0xb6, b: 0xe1 }, // #9AB6E1
        tile: "/rltiles/dngn/altars/qazlal0.png"
    },
    ru: {
        color: { r: 0x43, g: 0xae, b: 0xe1 }, // #43AEE1
        tile: "/rltiles/dngn/altars/ru.png"
    },
    pakellas: {
        color: { r: 0xb6, g: 0xad, b: 0x2d }, // #B6AD2D
        tile: "/rltiles/dngn/altars/pakellas0.png"
    },
    uskayaw: {
        color: { r: 0xe3, g: 0xd0, b: 0x97 }, // #E3D097
        tile: "/rltiles/dngn/altars/uskayaw.png"
    },
    hepliaklqana: {
        color: { r: 0x00, g: 0xa9, b: 0x8e }, // #00A98E
        tile: "/rltiles/dngn/altars/hep0.png"
    },
    "wu jian": {
        color: { r: 0x79, g: 0x00, b: 0x00 }, // #790000
        tile: "/rltiles/dngn/altars/wu_jian.png"
    },
};

const resistances = {
    rFire: {
        color: { r: 0xFF, g: 0x31, b: 0x00 } // #FF3100
    },
    rCold: {
        color: { r: 0x00, g: 0x99, b: 0xFF } // #0099FF
    },
    rNeg: {
        color: { r: 0x00, g: 0x24, b: 0x3D } // #00243D
    },
    rPois: {
        color: { r: 0x1B, g: 0x86, b: 0x10 } // #1B8610
    },
    rElec: {
        color: { r: 0x8F, g: 0x85, b: 0xC8 } // #8F85C8
    },
    rCorr: {
        color: { r: 0xDB, g: 0x51, b: 0x4D } // #DB514D
    },
    MR: {
        color: { r: 0x76, g: 0x3B, b: 0x71 } // #763B71
    }
};

const branches = {
    dungeon: {
        depth: 15,
        width: 0,
        color: { r: 0x82, g: 0x82, b: 0x82 }, // #828282",
        tile: "/rltiles/dngn/gateways/enter.png"
    },
    temple: {
        depth: 1,
        width: 1,
        color: { r: 0xDC, g: 0xDC, b: 0xDC }, // #DCDCDC",
        tile: "/rltiles/dngn/gateways/enter_temple.png"
    },
    "orcish mines": {
        depth: 2,
        width: 1,
        color: { r: 0xAC, g: 0x55, b: 0x20 }, // #AC5520",
        tile: "/rltiles/dngn/gateways/enter_orc.png"
    },
    elf: {
        depth: 3,
        width: 2,
        color: { r: 0xEC, g: 0xEC, b: 0xEC }, // #ECECEC",
        tile: "/rltiles/dngn/gateways/enter_elf.png"
    },
    lair: {
        depth: 6,
        width: 1,
        color: { r: 0xAB, g: 0xDB, b: 0x88 }, // #ABDB88",
        tile: "/rltiles/dngn/gateways/enter_lair.png"
    },
    swamp: {
        depth: 4,
        width: 2,
        color: { r: 0x1C, g: 0x75, b: 0x46 }, // #1C7546",
        tile: "/rltiles/dngn/gateways/enter_swamp.png"
    },
    shoals: {
        depth: 4,
        width: 2,
        color: { r: 0xFF, g: 0xE9, b: 0xA1 }, // #FFE9A1",
        tile: "/rltiles/dngn/gateways/enter_shoals.png"
    },
    snake: {
        depth: 4,
        width: 2,
        color: { r: 0x52, g: 0xAF, b: 0x42 }, // #52AF42",
        tile: "/rltiles/dngn/gateways/enter_snake.png"
    },
    "spider nest": {
        depth: 4,
        width: 2,
        color: { r: 0xFF, g: 0x5F, b: 0x5A }, // #FF5F5A",
        tile: "/rltiles/dngn/gateways/enter_spider.png"
    },
    slime: {
        depth: 4,
        width: 2,
        color: { r: 0x41, g: 0xDC, b: 0x41 }, // #41DC41",
        tile: "/rltiles/dngn/gateways/enter_slime.png"
    },
    vaults: {
        depth: 5,
        width: 1,
        color: { r: 0x76, g: 0xB6, b: 0xFF }, // #76B6FF",
        tile: "/rltiles/dngn/gateways/enter_vaults_open.png"
    },
    crypt: {
        depth: 3,
        width: 2,
        color: { r: 0x82, g: 0x82, b: 0x82 }, // #828282",
        tile: "/rltiles/dngn/gateways/enter_crypt.png"
    },
    tomb: {
        depth: 3,
        width: 3,
        color: { r: 0x64, g: 0x64, b: 0x64 }, // #646464",
        tile: "/rltiles/dngn/gateways/enter_tomb.png"
    },
    depths: {
        depth: 5,
        width: 1,
        color: { r: 0x82, g: 0x82, b: 0x82 }, // #828282",
        tile: "/rltiles/dngn/gateways/enter_depths.png"
    },
    vestibule: {
        depth: 1,
        width: 2,
        color: { r: 0x8E, g: 0x00, b: 0x00 }, // #8E0000",
        tile: "/rltiles/dngn/gateways/return_vestibule.png"
    },
    dis: {
        depth: 7,
        width: 3,
        color: { r: 0x47, g: 0xBA, b: 0xE8 }, // #47BAE8",
        tile: "/rltiles/dngn/gateways/enter_dis1.png"
    },
    gehenna: {
        depth: 7,
        width: 3,
        color: { r: 0xDE, g: 0xE6, b: 0xE7 }, // #DEE6E7",
        tile: "/rltiles/dngn/gateways/enter_gehenna1.png"
    },
    cocytus: {
        depth: 7,
        width: 3,
        color: { r: 0x2A, g: 0x33, b: 0x5A }, // #2589D0",
        tile: "/rltiles/dngn/gateways/enter_cocytus1.png"
    },
    tartarus: {
        depth: 7,
        width: 3,
        color: { r: 0x2A, b: 0x33, g: 0x5a }, // #2A335A",
        tile: "/rltiles/dngn/gateways/enter_tartarus1.png"
    },
    zot: {
        depth: 5,
        width: 2,
        color: { r: 0xFF, g: 0x5A, b: 0xEF }, // #FF5AEF",
        tile: "/rltiles/dngn/gateways/enter_zot_open.png"
    },
    abyss: {
        depth: Number.MAX_SAFE_INTEGER,
        width: 0,
        color: { r: 0xFF, g: 0x6B, b: 0xA5 }, // #FF6BA5",
        tile: "/rltiles/dngn/gateways/enter_abyss1.png"
    },
    pandemonium: {
        depth: 1,
        width: 1,
        color: { r: 0x57, g: 0xFF, b: 0xC7 }, // #57FFC7",
        tile: "/rltiles/dngn/gateways/enter_pandemonium1.png"
    },
    ziggurat: {
        depth: 27,
        width: 0,
        color: { r: 0xC7, g: 0xEA, b: 0x92 }, // #C7EA92",
        tile: "/rltiles/dngn/gateways/zig_portal.png"
    },
    bazaar: {
        depth: 1,
        width: 0,
        color: { r: 0x89, g: 0xFF, b: 0xDD }, // #89FFDD",
        tile: "/rltiles/dngn/gateways/bazaar_portal.png"
    },
    trove: {
        depth: 1,
        width: 0,
        color: { r: 0xEE, g: 0xFF, b: 0xFF }, // #EEFFFF",
        tile: "/rltiles/dngn/gateways/trove_portal.png"
    },
    sewer: {
        depth: 1,
        width: 1,
        color: { r: 0x35, g: 0x74, b: 0x42 }, // #357442",
        tile: "/rltiles/dngn/gateways/sewer_portal.png"
    },
    ossuary: {
        depth: 1,
        width: 1,
        color: { r: 0xF0, g: 0x6E, b: 0x2E }, // #F06E2E",
        tile: "/rltiles/dngn/gateways/ossuary_portal.png"
    },
    bailey: {
        depth: 1,
        width: 1,
        color: { r: 0xFF, g: 0x37, b: 0x85 }, // #FF3785",
        tile: "/rltiles/dngn/gateways/bailey_portal.png"
    },
    "ice cave": {
        depth: 1,
        width: 1,
        color: { r: 0x2C, g: 0x92, b: 0xE5 }, // #2C92E5",
        tile: "/rltiles/dngn/gateways/ice_cave_portal.png"
    },
    volcano: {
        depth: 1,
        width: 1,
        color: { r: 0xCC, g: 0x00, b: 0x00 }, // #CC0000",
        tile: "/rltiles/dngn/gateways/volcano_portal.png"
    },
    wizlab: {
        depth: 1,
        width: 0,
        color: { r: 0xA7, g: 0xEA, b: 0x42 }, // #A7EA42",
        tile: "/rltiles/dngn/gateways/wizlab_portal0.png"
    },
    desolation: {
        depth: 1,
        width: 1,
        color: { r: 0x47, g: 0xE8, b: 0xBA }, // #47E8BA",
        tile: "/rltiles/dngn/gateways/desolation_portal.png"
    }
};

export {
    branches,
    races,
    backgrounds,
    gods,
    resistances
}
