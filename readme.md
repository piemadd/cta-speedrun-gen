# CTA Speedrun Gen
This is a program loosely derived from gobbler, what I use to ingest shapes for
my transitstatus maps with the intention of generating time estimates for the
various route options and the most optimal start time for each (assuming)

***READ ME***: This program is a WIP and currently **does not work**.

## Variants

There are "8" variants currently used fairly often, but when you look at them,
you realize there are actually 2 with the other 6 being variants of those.

### The Standard

The standard routing is close to what the Chicago Aussie used back in 2016, and
seems to have been the standard routing back then. In code this is represented
by the `standard` tag. The routing looks like this:

1. Purple (Linden to Howard)
2. Yellow (Howard to Dempster-Skokie)
3. Yellow Back (Dempster-Skokie to Howard)
4. Red (Howard to 95th/Dan Ryan)
5. Red Back (95th/Dan Ryan to 63rd)
6. Red to Green (63rd Red Line to Ashland/63rd)
7. Green Short (Ashland/63rd to Halsted)
8. Green to Green (63rd/Halsted to Cottage Grove)
9. Green North (Cottage Grove to Roosevelt)
10. Orange (Roosevelt to Midway)
11. Orange to Pink (Midway to Cicero)
12. Pink Short (Cicero to 54th/Cermak)
13. Pink (54th/Cermak to Clinton)
14. Green West (Clinton to Harlem/Lake)
15. Green to Blue (Harlem/Lake to Forest Park)
16. Blue (Forest Park to O'Hare)
17. Blue Back (O'Hare to Jefferson Park)
18. Blue to Brown (Jefferson Park to Kimball)
19. Brown (Kimball to Clark/Lake)

### The Alternative

The alternative routing is fairly simiilar to the standard routing, but with a
priority on less transfers, where most delays on runs come from. Even though it
only reduces the number of transfers by one, this does imrpove run reliability.
One drawback is the increase of station redundancy in the loop, which adds about
10 minutes to the run time, but that could be worth the transfer reduction.

1. Purple (Linden to Howard)
2. Yellow (Howard to Dempster-Skokie)
3. Yellow Back (Dempster-Skokie to Howard)
4. Red (Howard to 95th/Dan Ryan)
5. Red Back (95th/Dan Ryan to 63rd)
6. Red to Green (63rd Red Line to Ashland/63rd)
7. Green Short (Ashland/63rd to Halsted)
8. Green to Green (63rd/Halsted to Cottage Grove)
9. Green (Cottage Grove to Harlem/Lake)
10. Green to Blue (Harlem/Lake to Forest Park)
11. Blue (Forest Park to O'Hare)
12. Blue Back (O'Hare to Jefferson Park)
13. Blue to Brown (Jefferson Park to Kimball)
14. Brown (Kimball to State/Van Buren)
15. Orange (State/Van Buren to Midway)
16. Orange to Pink (Midway to Cicero)
17. Pink Short (Cicero to 54th/Cermak)
18. Pink (54th/Cermak to Polk)

### The Standard CG and the Alternative CG

There isn't a whole lot to say about the CG variants. The only difference they
have is when getting to 63rd on the red line, one visits the east branch of the
green line (Cottage Grove/CG) before hitting Ashland/63rd, specifically based on
whether an eastbound or westbound bus comes first. In the event of doing the
Standard CG or Alternative CG, instead of things looking like this:

6. Red to Green (63rd Red Line to Ashland/63rd)
7. Green Short (Ashland/63rd to Halsted)
8. Green to Green (63rd/Halsted to Cottage Grove)
9. Green North (Cottage Grove to Roosevelt)

they'll look like this:

6. Red to Green (63rd Red Line to Cottage Grove)
7. Green Short (Cottage Grove to King Drive)
8. Green to Green (63rd/King Drive to Ashland/63rd)
9. Green North (Ashland/63rd to Roosevelt)

### The Standard Reverse and The Alternative Reverse

The reverse variants are self-descriptive: take the routing and do it in
reverse. The benefit of doing things this way is that the less reliable lines
are done first, when it is easier to scratch and restart if something goes
wrong.

#### Standard Reverse

1. Brown (Clark/Lake to Kimball)
2. Brown to Blue (Kimball to Jefferson Park)
3. Blue Short (Jefferson Park to O'Hare)
4. Blue (O'Hare to Forest Park)
5. Blue to Green (Forest Park to Harlem/Lake)
6. Green East (Harlem/Lake to Clinton)
7. Pink (Clinton to 54th/Cermak)
8. Pink Short (54th/Cermak to Cicero)
9. Pink to Orange (Cicero to Midway)
10. Orange (Midway to Roosevelt)
11. Green South (Roosevelt to Ashland/63rd)
12. Green to Green (Ashland/63rd to Cottage Grove)
13. Green Short (Cottage Grove to King Drive)
14. Green to Red (King Drive to 63rd Red Line)
15. Red Short (63rd to 95th/Dan Ryan)
16. Red (95th/Dan Ryan to Howard)
17. Yellow (Howard to Dempster-Skokie)
18. Yellow Back (Dempster-Skokie to Howard)
19. Purple (Howard to Linden)

#### The Alternative Reverse

1. Pink (Polk to 54th/Cermak)
2. Pink Short (54th/Cermak to Cicero)
3. Pink to Orange (Cicero to Midway)
4. Orange (Midway to Washington/Wells)
5. Brown (Washington/Wells to Kimball)
6. Brown to Blue (Kimball to Jefferson Park)
7. Blue Short (Jefferson Park to O'Hare)
8. Blue (O'Hare to Jefferson Park)
9. Blue to Green (Jefferson Park to Harlem/Lake)
10. Green (Harlem/Lake to Ashland/63rd)
11. Green to Green (Ashland/63rd to Cottage Grove)
12. Green Short (Cottage Grove to King Drive)
13. Green to Red (King Drive to Cottage Grove)
14. Red Short (63rd to 95th/Dan Ryan)
15. Red (95th/Dan Ryan to Howard)
16. Yellow (Howard to Dempster-Skokie)
17. Yellow Back (Dempster-Skokie to Howard)
18. Purple (Howard to Linden)

## Installation and Running

Make sure you have node installed. IDK what the min version is, but its probably
12.x, could also be 14.x.

1. Clone the repo

```bash
git clone https://github.com/piemadd/cta-speedrun-gen
```

2. Install the dependencies

```bash
npm install
```

3. Customize the runs (optional) You can edit `variants.json` to customize the
   various runs or add your own. TBH I'm too lazy to properly describe how the
   format works, though it should be mostly self explanatory (each segment goes
   `[start_station_id]_Start Station Name_[stop_station_id]_Stop Station Name`,
   the names do not have to match the GTFS, use whatever you want for those, tho
   the ids do have to match up).

4. Run the program

```bash
npm run all
```
