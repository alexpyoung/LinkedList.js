"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinkedList = function () {

  /**
   * Instantiates LinkedList<Object>
   * @param {Array<Object>}
   * @returns {LinkedList<Object>}
   */

  function LinkedList(arr) {
    _classCallCheck(this, LinkedList);
  }

  /**
   * Getter for first elenent
   * @returns {Node<Object>}
   */


  _createClass(LinkedList, [{
    key: "head",
    value: function head() {}

    /**
     * Getter for last elenent
     * @returns {Node<Object>}
     */

  }, {
    key: "tail",
    value: function tail() {}

    /**
     * Test if the list is empty
     * @returns {Boolean}
     */

  }, {
    key: "empty",
    value: function empty() {}

    /**
     * Return size
     * @returns {Integer}
     */

  }, {
    key: "length",
    value: function length() {}

    /**
     * Insert element at beginning
     * @param {Node<Object>}
     */

  }, {
    key: "pushHead",
    value: function pushHead(obj) {}

    /**
     * Remove element from beginning
     * @returns {Object}
     */

  }, {
    key: "popHead",
    value: function popHead() {}

    /**
     * Insert element at end
     * @param {Node<Object>}
     */

  }, {
    key: "pushTail",
    value: function pushTail(obj) {}

    /**
     * Remove element from end
     * @returns {Object}
     */

  }, {
    key: "popTail",
    value: function popTail() {}

    /**
     * Removes element that contains the given Object
     * @param {Object}
     */

  }, {
    key: "remove",
    value: function remove(obj) {}

    /**
     * Returns element that contains the given Object
     * @param {Object}
     * @returns {Node<Object>}
     */

  }, {
    key: "find",
    value: function find(obj) {}

    /**
     * Sorts elements
     * @param {Function}
     */

  }, {
    key: "sort",
    value: function sort(compare) {}

    /**
     * Reverses the order of elements
     */

  }, {
    key: "reverse",
    value: function reverse() {}
  }]);

  return LinkedList;
}();