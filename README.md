# Crawl Undertaker

A morgue browser and scorebaord for Dungeon Crawl Stone Soup

## Getting started

```bash
yarn
yarn serve
```

Will display a test json morgue file you can find in `public/Suwur.json`.
To view that file I recommend using [fx](https://github.com/antonmedv/fx):
```bash
cat public/Suwur.json | fx
```

## Ideas

- Search field (free? or multiple fields?), criteria on:
    + role
    + background
    + god
    + runes
    + level
    + score
    + time
    + ...
- In inventory and spell list, show first most used ones
- Mini graphs for tables
- Color coded resistances and stats
- Une tiles (can be turned of for text lovers)
- Show monster symbols/tiles? (should be added in the json)
- Dungeon map in tree form (add to json alongside flat list)
- Player path order, milestones, etc shown on that tree
- Tile map
- Storyboard when screenshot PR merged
- Clickable monsters, items, spells etc which will call learndb (http://crawl.develz.org/info)
- Clickable vaults which will show basic tile (or text) map of it
