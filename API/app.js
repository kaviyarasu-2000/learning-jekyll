
$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: "https://jsonplaceholder.typicode.com/albums",
        error: function (status) {
            alert('fail')
        },
        success: function (result, status) {
            var value = result;
            var st = status;
            document.getElementById('sucess').innerHTML = st;
            console.log(value);
            for (var i in value) {
                // var user = value[i].userId;
                //  console.log(user);
                var id = value[i].id;
                var val = value[i].title;

                document.getElementById("demo").innerHTML += ( '<br>' + id + '<br>' + val + '<br>');
            }
        },
    });

});
