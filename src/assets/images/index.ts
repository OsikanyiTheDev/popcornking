// Direct ES Module imports for all Popcorn King local assets
// This ensures Vite bundles and hashes them into /dist/assets/ automatically upon `npm run build`

import caramelFlyer from './caramel_popcorn_flyer_1787530953937.jpg';
import chocolateFlyer from './chocolate_popcorn_flyer_1787530983913.jpg';
import corporateRetreat from './corporate_retreat_live_1787527900231.jpg';
import festivalParty from './festival_party_crowd_1787527881079.jpg';
import liveEventStation from './live_event_station_1787527845374.jpg';
import milkywayFlyer from './milkyway_popcorn_flyer_1787530999860.jpg';
import caramelGourmet from './popcorn_caramel_gourmet_1787441086862.jpg';
import cupClassicLogo from './popcorn_cup_classic_logo_1787530651749.jpg';
import eventSetup from './popcorn_event_setup_1787441074590.jpg';
import heroCupGold from './popcorn_hero_cup_gold_1787530664895.jpg';
import popcornKingHero from './popcorn_king_hero_1787441061393.jpg';
import yellowCup from './popcorn_king_yellow_cup_1787530076838.jpg';
import vendingStand from './popcorn_vending_stand_1787441100261.jpg';
import rainbowFlyer from './rainbow_popcorn_flyer_1787531014949.jpg';
import seaSaltFlyer from './sea_salt_flyer_1787530969931.jpg';
import vipTable from './vip_table_popcorn_1787527863353.jpg';

export const PopcornImages = {
  caramelFlyer,
  chocolateFlyer,
  corporateRetreat,
  festivalParty,
  liveEventStation,
  milkywayFlyer,
  caramelGourmet,
  cupClassicLogo,
  eventSetup,
  heroCupGold,
  popcornKingHero,
  yellowCup,
  vendingStand,
  rainbowFlyer,
  seaSaltFlyer,
  vipTable,
};

// Map file name / path strings to resolved imported module URLs
export const getImageAsset = (pathOrKey: string): string => {
  if (!pathOrKey) return PopcornImages.cupClassicLogo;
  
  // If it's already an external HTTPS url, return as is
  if (pathOrKey.startsWith('http://') || pathOrKey.startsWith('https://')) {
    return pathOrKey;
  }

  // Check matching keys
  if (pathOrKey.includes('caramel_popcorn_flyer')) return PopcornImages.caramelFlyer;
  if (pathOrKey.includes('chocolate_popcorn_flyer')) return PopcornImages.chocolateFlyer;
  if (pathOrKey.includes('corporate_retreat')) return PopcornImages.corporateRetreat;
  if (pathOrKey.includes('festival_party')) return PopcornImages.festivalParty;
  if (pathOrKey.includes('live_event_station')) return PopcornImages.liveEventStation;
  if (pathOrKey.includes('milkyway_popcorn_flyer')) return PopcornImages.milkywayFlyer;
  if (pathOrKey.includes('popcorn_caramel_gourmet')) return PopcornImages.caramelGourmet;
  if (pathOrKey.includes('popcorn_cup_classic_logo')) return PopcornImages.cupClassicLogo;
  if (pathOrKey.includes('popcorn_event_setup')) return PopcornImages.eventSetup;
  if (pathOrKey.includes('popcorn_hero_cup_gold')) return PopcornImages.heroCupGold;
  if (pathOrKey.includes('popcorn_king_hero')) return PopcornImages.popcornKingHero;
  if (pathOrKey.includes('popcorn_king_yellow_cup')) return PopcornImages.yellowCup;
  if (pathOrKey.includes('popcorn_vending_stand')) return PopcornImages.vendingStand;
  if (pathOrKey.includes('rainbow_popcorn_flyer')) return PopcornImages.rainbowFlyer;
  if (pathOrKey.includes('sea_salt_flyer')) return PopcornImages.seaSaltFlyer;
  if (pathOrKey.includes('vip_table')) return PopcornImages.vipTable;

  return pathOrKey;
};
