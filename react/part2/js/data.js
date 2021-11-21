window.Indata = {
    allSize : (function(small, large){
        let sized = [];
        for(let i = small; i <= large; i++){
            sized.push(i);
            sized.push(i+0.5);
        }
        return sized;
    })(7, 10),
    allColor: ['red', 'blue', 'green', 'brown'],
    bySize: {
        '7': ['red', 'green'],
        '7.5':['blue', 'brown'],
        '8': ['red', 'blue'],
        '8.5': ['blue', 'green'],
        '9': ['blue', 'brown'],
        '9.5': ['green', 'brown'],
        '10': ['red', 'green', 'brown'],
        '10.5': ['blue', 'green', 'brown'],
    },
    byColor: {
        'red':['8','8.5','9','9.5'],
        'blue':['9','9.5', '10', '10.5'],
        'green':['7', '7.5', '8', '8.5'],
        'brown':['7', '7.5', '10', '10.5'],
    }
}