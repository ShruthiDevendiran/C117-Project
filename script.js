$(document).ready(function(){

    console.log('Ready')

    //  Fetch the current date and update it in the DOM
    date = new Date()
    let display_date = "Date:" + date.toLocaleString()

    $(document).ready(function(){
        $("#date").html(display_date)
        $("#button").prop('disabled',true)
    })

    //  write an event, when Submit button is clicked
    $('#button').click(function(){

        //  get the text value from the textarea using the 'val()' method
        let text_value = $('#test').val()

        //  Convert it to JS object.
        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        let input_text = {'' : text_value}
        console.log(input_text)

        //  ajax request
        $.ajax({

            //  type of web request
            type : 'POST',

            //  Data to be sent in JSON format
            data : JSON.stringify(),

            //  type of response expected is json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  if everything is successful, run this function
            success : function(result){

                // extract prediction and emoticon url from result
                 $('#sentiment').html(result.data.predicted_emotion)
                 $("#emoji").attr('src'.result.data.predicted_emotion_img_url)
                //  update the DOM elements
                $('#sentiment').css("display","")
                $("#emoji").css("display","")
                //  show them
                predicted_emotion = result.data.predicted_emotion
                $("#button").prop('disabled',false)

            },

            //  if any error, run this function
            error : function(result){

                console.log(result)
            }
        })


        //  clearing the textbox after every button push
        $('#text').val("")
    })
        
})