import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.lazyImg = $(".lazyload");

    this.header = $(".site-header");
    this.hlinks = $(".primary-nav a");
    this.trigger = $(".large-hero__title");
    this.createHeaderWaypoint();
    this.sections = $(".page-section");
    this.createSectionWaypoints();
    this.addSmoothScroll();
    this.refreshWaypoints();
  }

  refreshWaypoints(){
    this.lazyImg.on('load',function(){
      Waypoint.refreshAll();
    });
  }

  addSmoothScroll(){
    this.hlinks.smoothScroll();
  }

  createHeaderWaypoint() {
    var constr = this;
    new Waypoint({
      element: constr.trigger[0],
      handler: function(direction) {
        if (direction == "down") {
          constr.header.addClass("site-header--dark");
        } else {
          constr.header.removeClass("site-header--dark");
        }
      }
    });
  }

  createSectionWaypoints() {
    var constr = this;
    constr.sections.each(function(){
      var section = this;
      new Waypoint({
        element: section,
        handler: function(direction){
          if (direction === "down"){
            var headerLink = section.getAttribute("data-matching-link");
            constr.hlinks.removeClass("active");
            $(headerLink).addClass("active");
          }
        },
        offset: "20%"
      });
      new Waypoint({
        element: section,
        handler: function(direction){
          if (direction === "up"){
            var headerLink = section.getAttribute("data-matching-link");
            constr.hlinks.removeClass("active");
            $(headerLink).addClass("active");
          }
        },
        offset: "-40%"
      });
    });
  }

}

export default StickyHeader;
