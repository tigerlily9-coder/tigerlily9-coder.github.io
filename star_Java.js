    // $(function() {
        // let sound = document.getElementById("music");
        // sound.currentTime = 0;
        // sound.loop = true; //if you want it to restart playing automatically when it ends
        // sound.play();
    // });
function functionAlert(msg, myYes) {
    var confirmBox = $("#confirm");
    confirmBox.find(".message").text(msg);
    confirmBox.find(".yes").unbind().click(function() {
    confirmBox.hide();
    });
    confirmBox.find(".yes").click(myYes);
    confirmBox.show();
}