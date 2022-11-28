const fs = require('fs');

let iteration = 0;

for (let n = 1; n <= 24; n++) {
    for (let i = 9; i <= 15; i++) {
        let content = fs.readFileSync('./door_n_i.json', 'utf8');
        content = content.replace('{n}', n).replace('{i}', i);
        fs.writeFileSync(`./door_${n}_${i}.json`, content);

        fs.appendFileSync('./modeldata.txt', `{ "predicate": { "custom_model_data": ${iteration + 10}}, "model": "adventskalender:door_${n}_${i}" },\n`);
        iteration++;
    }
}