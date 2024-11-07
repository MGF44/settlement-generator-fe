interface ISpecies {
    name: string;
    subSpecies: ISpecies[];
    distribution: number;
}

export default ISpecies;