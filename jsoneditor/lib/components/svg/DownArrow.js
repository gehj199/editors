(function() {
  var DownArrowSvg, React;

  React = require('react');

  DownArrowSvg = React.createClass({displayName: "DownArrowSvg",
    render: function() {
      return (
        React.createElement("svg", {viewBox: "0 0 128 128", width: "22pt", height: "22pt"}, 
            React.createElement("path", {d: "M109.35638,81.3533152 C107.923899,82.7869182 105.94502,83.6751442 103.759224,83.6751442 L24.5910645,83.6751442 C20.225873,83.6751442 16.6751442,80.1307318 16.6751442,75.7584775 C16.6751442,71.3951199 20.2192225,67.8418109 24.5910645,67.8418109 L95.8418109,67.8418109 L95.8418109,-3.40893546 C95.8418109,-7.77412698 99.3862233,-11.3248558 103.758478,-11.3248558 C108.121835,-11.3248558 111.675144,-7.78077754 111.675144,-3.40893546 L111.675144,75.7592239 C111.675144,77.9416955 110.789142,79.9205745 109.356651,81.3538862 Z", transform: "translate(64.175144, 36.175144) rotate(45.000000) translate(-64.175144, -36.175144) "})
        )
      );
    }
  });

  module.exports = DownArrowSvg;

}).call(this);