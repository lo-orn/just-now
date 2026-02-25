

export type Bird = {
    name: string,
    description: string,
    imageUrl: string
}
export type Plant = {
    name: string,
    description: string,
    imageUrl?: string
}
// export type Nature = {
//     bird: Bird[],
//     plant: Plant[],
//     moodTitle: string,
//     description: string
//     imageQuery: string

// }

export type NatureData = {
    birds: { name: string; description: string }[];
    plants: { name: string; description: string; season: string }[];
    moodTitle: string;
    description: string;
    imageQuery?: string;
  };