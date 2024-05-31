class Building {
    constructor(sqft) {
        if (new.target === Building) {
            throw new Error("Cannot construct Building instances directly");
        }

        this._sqft = sqft;

        if (this.evacuationWarningMessage === undefined) {
            throw new Error("Class extending Building must override evacuationWarningMessage");
        }
    }

    get sqft() {
        return this._sqft;
    }
}

export default Building;
