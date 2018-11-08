export interface IAnimal {
    type: AnimalType;
    makeNoise(): void;
}


export class Zoo {
    /**
     *
     */
    constructor() {
        this.animals = [];
        
    }
    private animals: IAnimal[];

    public addAnimal(animal: IAnimal) {
        this.animals.push(animal);
    }

    public alarm(): void {
        for(var i = 0; i < this.animals.length; i++) {
            this.animals[i].makeNoise();
        }
    }
}

export enum AnimalType {
    Mamal = 0,
    Bird = 1,
    Other = 2
}

export class Monkey implements IAnimal {
    makeNoise(): void {
        console.log('Ugugugug')
    }
    readonly type: AnimalType = AnimalType.Mamal
}

export class Pigeon implements IAnimal {
    makeNoise(): void {
        console.log('Cipcirip')
    }
    readonly type: AnimalType = AnimalType.Bird
}
