/// <reference path="example.js">
 
describe('Example tests', function() {
 
    var eg = new ExampleClass('example');

    it('Make sure things work', function() {

        var expected = 'example test';
        var result = eg.echo('test');
 
        // Assert
        expect(result).toBe(expected);
    });
 
});
