export interface Receipe {
    id: string;
    name: string;
    date: string;
    image: string;
    instructions: string;
    ingredients: Array<String>;
    dishes: number;
    country: string;
    veg: boolean;
}
