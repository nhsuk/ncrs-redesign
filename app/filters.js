const moment = require('moment');

module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  var dateFormat = "D-MMM-YYYY, h:mm a"

  filters.returnDate = function(param) {
    var today = moment().format(dateFormat);
    console.log(today)
    return today;
  }

  filters.returnDate = function(number, type) {
    var d = moment().add(number, type).format(dateFormat)
    return d;
  }

  filters.returnMonth = (input) => {
    var dateFormat = "MMMM"
    var d = moment().month(input-1).format(dateFormat)
    return d;
  }

  filters.ukMobile = (input) => {
    // remove whitespace
    input = input.replace(/\s/g,'')
    // add the space back in
    var number = input.substring(0, 5) + " " + input.substring(5)
    return number;
  }

  
  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
