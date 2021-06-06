<script type="text/javascript">
// select your video element
var video = document.querySelector('.video');

// listen for the event that fires when your video has finished playing
video.addEventListener('ended', function() {
    // pause the video
    this.pause();
    // set play time to the last frame
    this.currentTime = this.duration;
}, false);

</script>