/**
 * @class ExampleClass
 * @classdesc definition example module
 */
class ExampleClass {
    /**
     * @constructor
     * @param {string} str
     * @property {string} output
     */
    constructor(str) {
        this.output = str;
    }
    /**
    * @memberOf ExampleClass
    * @desc returns the same string as you pass to it :) 
    * @param {string} str
    * @returns {string}
    */
    echo(str) {
        //return this.output + " " + str;
        return `${this.output} ${str}`;
    }
}
export { ExampleClass };
