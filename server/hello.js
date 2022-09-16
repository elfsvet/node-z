// node runtime process.argv returns 
const mission = process.argv[2]
if (mission === 'learn') {
    console.log('Time to write some node code')
} else {
    // console.log('Is '+ mission + ' really more fun?')
    console.log(`Is ${mission} really more fun?`)
}

// How is node different than javascript?
// js send to js engine (v8 spydermonkey...) instructionn i