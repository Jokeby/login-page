
$(document).ready((function () {

    $('#doLogin').click(function () {
        var user_name = $("input[name=user_name]").val();
        var user_password = $("input[name=user_password]").val();
        if (!user_name || !user_password) {
            $(".tips").text('用户名或者密码不能为空！').show()
            return;
        }else{
            $(".tips").text('').hide()
        }
        $.post('/rest/sys_user/login', {user_name: user_name, user_password: user_password}, function (data) {
            //- console.log(data);
            if(data.statusCode==300) {
                $(".tips").text(data.message).show()
                // alertMsg.info(data.message);
            } else {
                //alertMsg.info("登录成功！");
                window.location = "/index";
            }
        }).error(function (data) {
            //- console.log(data.responseJSON);
            //alertMsg.info(data.responseJSON.error);
            $(".tips").text(data.responseJSON.error).show()
            //- console.log(JSON.stringify(data));
        });
    });

    $("body").keydown(function() {
        if (event.keyCode == "13") {
            $('#doLogin').click();
        }
    });
}));