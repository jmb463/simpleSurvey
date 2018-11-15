$(document).ready(function() {

    datePicker(); //Step 1

    selectables(); //Step 2

    sortable(); //Step 3

    tooltip(); //Step 4

});


function datePicker(){
    $("#date").datepicker({dateFormat:"dd/mm/yy"}); //dateFormat permits us change the format of the date when clicked
}
}

function selectables(){
    $("#selectable").selectable();
}

function sortable(){
    $("#sortable").sortable();
    $("#sortable").disableSelection();
}

function tooltip(){
    $(document).tooltip({
        /*
           An item in brackets refers to taking all elements with the attribute in brackets, while
           an item not in brackets refers to taking all elements of that type (ex: 'img', 'a')
        */
        items: "[title], [class]",
        content: function() {
           // jQuery uses "this" to refer to the element that triggered the event
           var element = $(this);
           if (element.is("[title]")){
              return element.attr("title");
           }
           if (element.is("[class]")){
              if (element.hasClass("ui-state-default")) {
                 var text = element.text(); //in this case, will be the desired color
                 return "<div class='color_swatch' style='background:" + text + "'></div>";
              }
           }
        }
     });
}
