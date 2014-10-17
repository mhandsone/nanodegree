$(document).ready(function(){
    // info: http://stackoverflow.com/questions/10660495/multiple-color-pickers-on-one-page-with-links-to-input-boxes
    $('.clr-tile').each(function(o) {
        var clrPicker = $(this);
        $(this).ColorPicker({
                livePreview: true,
                color: '#0000ff',
                onShow: function (colpkr) {
                    $(colpkr).fadeIn(500);
                    return false;
                },
                onHide: function (colpkr) {
                    $(colpkr).fadeOut(500);
                    return false;
                },
                onChange: function (hsb, hex, rgb) {
                	hex = '#' + hex;
                    clrPicker.css('backgroundColor', hex);
                    var cName = '.' + clrPicker.data('clr');
                    if(cName == '.clr3')
                    	$(cName).css('backgroundColor', hex);
                    else
                    	$(cName).css('color', hex);
                }
            });
    });
});