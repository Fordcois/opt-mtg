import { Card } from "@/types/types";

export async function getCards(url: string): Promise<Card[]> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch cards");
    }
    
    const data = await response.json();
    const cards = data.data;
    
    if (data.has_more && data.next_page) {
        const moreCards = await getCards(data.next_page);
        return [...cards, ...moreCards];
    }
    
    return cards;}