const obj = {a:1, b:2, c:3, soma() {return a + b + c}}
console.log(JSON.stringify(obj))  // transformei em texto


//console.log(JSON.parse("{a: 1, b: 2, c:3}"))  //formato JSON inválido
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c':3}"))  //formato SON inválido")),
console.log(JSON.parse('{"a": 1, "b": 2, "c":3}'))
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": []}'))
