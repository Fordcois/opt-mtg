
export interface Card {
  id: string;
  name: string;
  loyalty: string | null;
  mana_cost: string | null;
  power: string | null;
  toughness: string | null;
  type_line: string | null;
  artist: string | null;
  flavor_text: string | null;
  rarity: string | null;
  image_uris: {
    small: string;
    normal: string;
    large: string;
  };
}
