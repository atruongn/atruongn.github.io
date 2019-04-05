jQuery(document).ready(function($) {
var videoWrappers = document.getElementsByClassName('video-wrapper'),
  i,
  ln = videoWrappers ? videoWrappers.length : 0,
  video,
  videoPlayButton,
  videoMethods = {
    renderVideoPlayButton: function() {
      for (i = 0; i < ln; i++) {
        this.formatVideoPlayButton(videoWrappers[i]);
        video = videoWrappers[i].querySelector('video');
        if (video && videoWrappers[i]) {
          video.classList.add('has-media-controls-hidden');
          videoPlayButton = videoWrappers[i].getElementsByClassName('video-overlay-play-button')[0];
          videoPlayButton.addEventListener('click', this.hideVideoPlayButton);
        }
      }
    },

    formatVideoPlayButton: function(videoWrapper) {
      videoWrapper.insertAdjacentHTML('beforeend',  '\
                <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
                    <polygon points="70, 55 70, 145 145, 100" fill="#000"/>\
                </svg>\
            ');
    },

    hideVideoPlayButton: function(e) {
      console.log(e.target);
      video = e.target.parentNode.querySelector('video');
      video.play();
      e.target.style.display = 'none';
      video.classList.remove('has-media-controls-hidden');
      video.setAttribute('controls', 'controls');
    }
  }

videoMethods.renderVideoPlayButton();
    });