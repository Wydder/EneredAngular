export class Player {
    ballsList: Array<boolean>;
    name: string;
    id: number;

    removeBall() {
        this.ballsList.pop();
    }

    pushBall() {
        this.ballsList.push(true);
    }
}


