var redis = require('redis')
  , client = redis.createClient()
  , noop = function () {}
  , rand = function () { return Math.round(Math.random()*100000000) }
  , stuff = 'aroma hops fermentation filter goblet terminal gravity! ' +
            'cask conditioned ale bottom fermenting yeast degrees plato bottle conditioning. ' +
            'krug hand pump alcohol seidel. becher bottom fermenting yeast bunghole hops ' +
            'microbrewery bottom fermenting yeast. craft beer barleywine, bitter shelf life adjunct. ' +
            'double bock/dopplebock ibu bottom fermenting yeast krug saccharification. pilsner dry hopping, ' +
            'anaerobic autolysis fermentation mash tun. acid rest enzymes top-fermenting yeast. ' +
            'alpha acid hops tulip glass. hefe lauter bitter sparge draft (draught) sour/acidic sour/acidic. ' +
            'malt cask conditioning wort chiller? dunkle bung yeast, original gravity rims crystal malt.'
  , stuffer = function () {
    console.log('stuffing redis...')
    for (var i=0; i < 100000; i++) {
      client.set('randkey'+rand(), stuff, noop);
      client.get('randkey'+rand(), noop);
    }
  }

stuffer()
setInterval(stuffer, 800)
