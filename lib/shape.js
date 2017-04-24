/**
 * Created by chinegua on 24/4/17.
 */
const Shapes = {};

class Figura {

    constructor(shapes,options) {
        this.shapes = shapes;
        this.options = options;
    }

    getArea() {

        try {

            let shape = new Shapes[this.shapes](this.options);
            return shape.getArea();
        }

        catch(e) {
            console.error(`Figura geometrica: '${this.shapes}', no es valida `);
            return null;
        }
    }

    static get Shapes() {
        return Shapes;
    }

}

module.exports = Figura;