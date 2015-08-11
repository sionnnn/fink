import {ExampleClass} from './modules/example';

describe('Example tests', function() {

    it('Make sure things work', function() {
        var result = new ExampleClass('example').echo('test');
        expect(result).toBe('example test');
    });
 
});

