(function( $ ) {
  $.fn.KKTimeline = function(data) {
    timeline = "<div class='prod-timline'><table>";
    $.each(data, function(){
      stage = '<tr class="'+this['stage']+'"><td><div class="line"></div><div class="round"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span></div>'+this['name']+'</td></tr>';
      timeline += stage;
    });
    timeline += "</table></div>"
    $(this).html(timeline);
    $(this).find("tr:last .line").hide()
  }
}( jQuery ));
