export abstract class Employee {
    getReport() {
        if (this.canGenerate()) {
            console.log('report')
        } else {
            console.log('Would not generate')
        }
    }

    protected abastract canGenerate(): boolean;

}

export class Developer extends Employee {
    protected canGenerate(): boolean {
        return true;
    }
}

export class Manager extends Employee {
    protected canGenerate(): boolean {
        return false;
    }
}