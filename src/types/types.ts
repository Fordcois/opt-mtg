// TODO solidify card_faces Type
export interface Card {
  id: string;
  name: string;
  loyalty: string | null;
  card_faces: any;
  mana_cost: string | null;
  power: string | null;
  toughness: string | null;
  type_line: string | null;
  artist: string | null;
  flavor_text: string | null;
  rarity: string | null;
  oracle_text: string | null;
  image_uris: {
    small: string;
    normal: string;
    large: string;
  };
}
