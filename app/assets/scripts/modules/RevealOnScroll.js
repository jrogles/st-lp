import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll{
  constructor(els,offset){
    this.itemsToReveal = $(els);
    this.waypointOffset = offset;
    this.hideInit();
    this.createWaypoints();
  }

  hideInit(){
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    var constr = this;
    constr.itemsToReveal.each(function(){
      var item = this;
      new Waypoint({
        element: item,
        handler: function () {
          $(item).addClass("reveal-item--is-visible");
        },
        offset: constr.waypointOffset
      });
    });
  }

}

export default RevealOnScroll;
