const races = {

};

const backgrounds = {

};

const gods = {
    zin: {
        color: { r: 0x7b, g: 0xa6, b: 0xa4 } // #7BA6A4
    },
    "shining one": {
        color: { r: 0xff, g: 0xb5, b: 0x00 } // #FFB500
    },
    kikubaaqudgha: {
        color: { r: 0x70, g: 0x70, b: 0x70 } // #707070
    },
    yredelemnul: {
        color: { r: 0x34, g: 0x19, b: 0x7e } // #34197E
    },
    xom: {
        color: { r: 0xea, g: 0xea, b: 0xea } // #EAEAEA
    },
    vehumet: {
        color: { r: 0x00, g: 0xff, b: 0xfd } // #00FFFD
    },
    okawaru: {
        color: { r: 0x9e, g: 0xcc, b: 0xe0 } // #9ECCE0
    },
    makhleb: {
        color: { r: 0x97, g: 0x00, b: 0x00 } // #970000
    },
    "sif muna": {
        color: { r: 0x00, g: 0x00, b: 0xff } // #0000ff
    },
    trog: {
        color: { r: 0xe2, g: 0x00, b: 0x00 } // #E20000
    },
    "nemelex xobeh": {
        color: { r: 0x96, g: 0x00, b: 0xff } // #9600FF
    },
    elyvilon: {
        color: { r: 0xd0, g: 0xd0, b: 0xd0 } // #D0D0D0
    },
    lugonu: {
        color: { r: 0x36, g: 0x0e, b: 0xbb } // #360EBB
    },
    beogh: {
        color: { r: 0xf2, g: 0xa2, b: 0x00 } // #F2A200
    },
    jiyva: {
        color: { r: 0x00, g: 0x06, b: 0x10 } // #006100
    },
    fedhas: {
        color: { r: 0x89, g: 0xb9, b: 0x00 } // #89B900
    },
    cheibriados: {
        color: { r: 0xb6, g: 0xe7, b: 0x52 } // #B6E752
    },
    ashenzari: {
        color: { r: 0xff, g: 0xb3, b: 0x70 } // #FFB370
    },
    dithmenos: {
        color: { r: 0x5c, g: 0x00, b: 0xf2 } // #5C00F2
    },
    gozag: {
        color: { r: 0xf2, g: 0xdb, b: 0x60 } // #F2DB60
    },
    qazlal: {
        color: { r: 0x9a, g: 0xb6, b: 0xe1 } // #9AB6E1
    },
    ru: {
        color: { r: 0x43, g: 0xae, b: 0xe1 } // #43AEE1
    },
    pakellas: {
        color: { r: 0xb6, g: 0xad, b: 0x2d } // #B6AD2D
    },
    uskayaw: {
        color: { r: 0xe3, g: 0xd0, b: 0x97 } // #E3D097
    },
    hepliaklqana: {
        color: { r: 0x00, g: 0xa9, b: 0x8e } // #00A98E
    },
    "wu jian": {
        color: { r: 0x79, g: 0x00, b: 0x00 } // #790000
    },
};

const resistances = {

};

const branches = {
    dungeon: {
        depth: 15,
        width: 0,
        color: { r: 0x82, g: 0x82, b: 0x82 }, // #828282",
        portalTile: "/rltiles/dngn/gateways/enter.png"
    },
    temple: {
        depth: 1,
        width: 1,
        color: { r: 0xDC, g: 0xDC, b: 0xDC }, // #DCDCDC",
        portalTile: "/rltiles/dngn/gateways/enter_temple.png"
    },
    "orcish mines": {
        depth: 2,
        width: 1,
        color: { r: 0xAC, g: 0x55, b: 0x20 }, // #AC5520",
        portalTile: "/rltiles/dngn/gateways/enter_orc.png"
    },
    elf: {
        depth: 3,
        width: 2,
        color: { r: 0xEC, g: 0xEC, b: 0xEC }, // #ECECEC",
        portalTile: "/rltiles/dngn/gateways/enter_elf.png"
    },
    lair: {
        depth: 6,
        width: 1,
        color: { r: 0xAB, g: 0xDB, b: 0x88 }, // #ABDB88",
        portalTile: "/rltiles/dngn/gateways/enter_lair.png"
    },
    swamp: {
        depth: 4,
        width: 2,
        color: { r: 0x1C, g: 0x75, b: 0x46 }, // #1C7546",
        portalTile: "/rltiles/dngn/gateways/enter_swamp.png"
    },
    shoals: {
        depth: 4,
        width: 2,
        color: { r: 0xFF, g: 0xE9, b: 0xA1 }, // #FFE9A1",
        portalTile: "/rltiles/dngn/gateways/enter_shoals.png"
    },
    snake: {
        depth: 4,
        width: 2,
        color: { r: 0x52, g: 0xAF, b: 0x42 }, // #52AF42",
        portalTile: "/rltiles/dngn/gateways/enter_snake.png"
    },
    "spider nest": {
        depth: 4,
        width: 2,
        color: { r: 0xFF, g: 0x5F, b: 0x5A }, // #FF5F5A",
        portalTile: "/rltiles/dngn/gateways/enter_spider.png"
    },
    slime: {
        depth: 4,
        width: 2,
        color: { r: 0x41, g: 0xDC, b: 0x41 }, // #41DC41",
        portalTile: "/rltiles/dngn/gateways/enter_slime.png"
    },
    vaults: {
        depth: 5,
        width: 1,
        color: { r: 0x76, g: 0xB6, b: 0xFF }, // #76B6FF",
        portalTile: "/rltiles/dngn/gateways/enter_vaults_open.png"
    },
    crypt: {
        depth: 3,
        width: 2,
        color: { r: 0x82, g: 0x82, b: 0x82 }, // #828282",
        portalTile: "/rltiles/dngn/gateways/enter_crypt.png"
    },
    tomb: {
        depth: 3,
        width: 3,
        color: { r: 0x64, g: 0x64, b: 0x64 }, // #646464",
        portalTile: "/rltiles/dngn/gateways/enter_tomb.png"
    },
    depths: {
        depth: 5,
        width: 1,
        color: { r: 0x82, g: 0x82, b: 0x82 }, // #828282",
        portalTile: "/rltiles/dngn/gateways/enter_depths.png"
    },
    vestibule: {
        depth: 1,
        width: 2,
        color: { r: 0x8E, g: 0x00, b: 0x00 }, // #8E0000",
        portalTile: "/rltiles/dngn/gateways/return_vestibule.png"
    },
    dis: {
        depth: 7,
        width: 3,
        color: { r: 0x47, g: 0xBA, b: 0xE8 }, // #47BAE8",
        portalTile: "/rltiles/dngn/gateways/enter_dis1.png"
    },
    gehenna: {
        depth: 7,
        width: 3,
        color: { r: 0xDE, g: 0xE6, b: 0xE7 }, // #DEE6E7",
        portalTile: "/rltiles/dngn/gateways/enter_gehenna1.png"
    },
    cocytus: {
        depth: 7,
        width: 3,
        color: { r: 0x2A, g: 0x33, b: 0x5A }, // #2589D0",
        portalTile: "/rltiles/dngn/gateways/enter_cocytus1.png"
    },
    tartarus: {
        depth: 7,
        width: 3,
        color: { r: 0x2A, b: 0x33, g: 0x5a }, // #2A335A",
        portalTile: "/rltiles/dngn/gateways/enter_tartarus1.png"
    },
    zot: {
        depth: 5,
        width: 2,
        color: { r: 0xFF, g: 0x5A, b: 0xEF }, // #FF5AEF",
        portalTile: "/rltiles/dngn/gateways/enter_zot_open.png"
    },
    abyss: {
        depth: Number.MAX_SAFE_INTEGER,
        width: 0,
        color: { r: 0xFF, g: 0x6B, b: 0xA5 }, // #FF6BA5",
        portalTile: "/rltiles/dngn/gateways/enter_abyss1.png"
    },
    pandemonium: {
        depth: 1,
        width: 1,
        color: { r: 0x57, g: 0xFF, b: 0xC7 }, // #57FFC7",
        portalTile: "/rltiles/dngn/gateways/enter_pandemonium1.png"
    },
    ziggurat: {
        depth: 27,
        width: 0,
        color: { r: 0xC7, g: 0xEA, b: 0x92 }, // #C7EA92",
        portalTile: "/rltiles/dngn/gateways/zig_portal.png"
    },
    bazaar: {
        depth: 1,
        width: 0,
        color: { r: 0x89, g: 0xFF, b: 0xDD }, // #89FFDD",
        portalTile: "/rltiles/dngn/gateways/bazaar_portal.png"
    },
    trove: {
        depth: 1,
        width: 0,
        color: { r: 0xEE, g: 0xFF, b: 0xFF }, // #EEFFFF",
        portalTile: "/rltiles/dngn/gateways/trove_portal.png"
    },
    sewer: {
        depth: 1,
        width: 1,
        color: { r: 0x35, g: 0x74, b: 0x42 }, // #357442",
        portalTile: "/rltiles/dngn/gateways/sewer_portal.png"
    },
    ossuary: {
        depth: 1,
        width: 1,
        color: { r: 0xF0, g: 0x6E, b: 0x2E }, // #F06E2E",
        portalTile: "/rltiles/dngn/gateways/ossuary_portal.png"
    },
    bailey: {
        depth: 1,
        width: 1,
        color: { r: 0xFF, g: 0x37, b: 0x85 }, // #FF3785",
        portalTile: "/rltiles/dngn/gateways/bailey_portal.png"
    },
    "ice cave": {
        depth: 1,
        width: 1,
        color: { r: 0x2C, g: 0x92, b: 0xE5 }, // #2C92E5",
        portalTile: "/rltiles/dngn/gateways/ice_cave_portal.png"
    },
    volcano: {
        depth: 1,
        width: 1,
        color: { r: 0xCC, g: 0x00, b: 0x00 }, // #CC0000",
        portalTile: "/rltiles/dngn/gateways/volcano_portal.png"
    },
    wizlab: {
        depth: 1,
        width: 0,
        color: { r: 0xA7, g: 0xEA, b: 0x42 }, // #A7EA42",
        portalTile: "/rltiles/dngn/gateways/wizlab_portal0.png"
    },
    desolation: {
        depth: 1,
        width: 1,
        color: { r: 0x47, g: 0xE8, b: 0xBA }, // #47E8BA",
        portalTile: "/rltiles/dngn/gateways/desolation_portal.png"
    }
};

export {
    branches,
    races,
    backgrounds,
    gods,
    resistances
}