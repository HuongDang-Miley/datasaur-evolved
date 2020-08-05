/***********************
 * ITERATION FUNCTIONS *
 **********************/

const dinos = require('./dinos.js')

const makeDino = function (obj) {
  return {
    species: obj.species,
    period: obj.period,
    carnivore: obj.carnivore,
    extinct: obj.extinct,
  }
}

const singularizeDinos = function (arr) {
  return arr.map(function (dino) {
    const dinoCopy = makeDino(dino)
    if (dinoCopy.species.slice(-2) === 'us') {
      dinoCopy.species = dinoCopy.species.slice(0, -2)
    }
    return dinoCopy
  })
}

const truncateDinos = function (arr) {
  return arr.map(function (dino) {
    const dinoCopy = makeDino(dino)
    if (dinoCopy.species.length >= 10) {
      dinoCopy.species = dinoCopy.species.slice(0, 7) + '...'
    }
    return dinoCopy
  })
}

const makeAllExtinct = function (arr) {
  return arr.map(function (dino) {
    const dinoCopy = makeDino(dino)
    dinoCopy.extinct = true
    return dinoCopy
  })
}

const carnivoresOnly = function (arr) {
  return arr.filter(function (dino) {
    const dinoCopy = makeDino(dino)
    return dinoCopy.carnivore === true
  })
}

const herbivoresOnly = function (arr) {
  return arr.filter(function (dino) {
    const dinoCopy = makeDino(dino)
    return dinoCopy.carnivore === false
  })
}

const extinctOnly = function (arr) {
  return arr.filter(function (dino) {
    const dinoCopy = makeDino(dino)
    return dinoCopy.extinct === true
  })
}

const notExtinct = function (arr) {
  return arr.filter(function (dino) {
    const dinoCopy = makeDino(dino)
    return dinoCopy.extinct === false
  })
}

const triassicOnly = function (arr) {
  return arr.filter(function (dino) {
    const dinoCopy = makeDino(dino)
    return dinoCopy.period === 'Triassic'
  })
}

const notTriassic = function (arr) {
  return arr.filter(function (dino) {
    const dinoCopy = makeDino(dino)
    return dinoCopy.period !== 'Triassic'
  })
}





/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

if (typeof makeDino === 'undefined') {
  makeDino = undefined
}

if (typeof singularizeDinos === 'undefined') {
  singularizeDinos = undefined
}

if (typeof truncateDinos === 'undefined') {
  truncateDinos = undefined
}

if (typeof makeAllExtinct === 'undefined') {
  makeAllExtinct = undefined
}

if (typeof carnivoresOnly === 'undefined') {
  carnivoresOnly = undefined
}

if (typeof herbivoresOnly === 'undefined') {
  herbivoresOnly = undefined
}

if (typeof extinctOnly === 'undefined') {
  extinctOnly = undefined
}

if (typeof notExtinct === 'undefined') {
  notExtinct = undefined
}

if (typeof triassicOnly === 'undefined') {
  triassicOnly = undefined
}

if (typeof notTriassic === 'undefined') {
  notTriassic = undefined
}

if (typeof bySpecies === 'undefined') {
  bySpecies = undefined
}

if (typeof byExtinctLast === 'undefined') {
  byExtinctLast = undefined
}

if (typeof byCarnivoresFirst === 'undefined') {
  byCarnivoresFirst = undefined
}

if (typeof byPeriod === 'undefined') {
  byPeriod = undefined
}



module.exports = {
  makeDino,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
  bySpecies,
  byExtinctLast,
  byCarnivoresFirst,
  byPeriod,
}
