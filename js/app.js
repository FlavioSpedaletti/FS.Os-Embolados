var me = function(){
    function defaultValues() {
        //
        // Form inputs with default values
        //
        // take off the default values in the sitewide search and newsletter forms
        $('input[type="text"]').each(function(){
            var initVal = $(this).val();
        	//
        	$(this).focus(function(){
        	    $(this).val("");
        	});
            $(this).blur(function(){
        	    if ($(this).val() == "") {
        			$(this).val(initVal);
        		}
        	});
        });

    }
    $(document).ready(function(){
        defaultValues();
    });
    return {
        defaultValues: defaultValues
    }
}();