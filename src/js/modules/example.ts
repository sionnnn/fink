/**
 * @class ExampleClass
 * @classdesc ????? definition example module
 */
class ExampleClass {
    /**
     * @constructor
     * @param {string} str
     * @property {string} output
     */
    output:string;

    constructor(str) {
        this.output = str;
    }
    /**
    * @memberOf ExampleClass
    * @param {string} str
    * @returns {string}
    */
    echo(str) {
        //return this.output + " " + str;
        return `${this.output} ${str}`;
    }
}
export { ExampleClass };