import { Card } from "@/types/types";

export async function getCards(url: string): Promise<Card[]> {
const response = await fetch(url);
if (!response.ok) {
    throw new Error("Failed to fetch user records");
}
const data = await response.json();
if (data.has_more) {
    console.log("More Cards To Be Loaded");
}
return data.data;
}