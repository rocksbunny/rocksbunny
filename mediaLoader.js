document.addEventListener('DOMContentLoaded', () => {
    const loadMedia = (mediaElements) => {
        return new Promise((resolve) => {
            let loadedCount = 0;
            const totalMedia = mediaElements.length;

            mediaElements.forEach((media) => {
                media.addEventListener('load', () => {
                    loadedCount++;
                    if (loadedCount === totalMedia) {
                        resolve();
                    }
                });

                if (media.complete) {
                    loadedCount++;
                    if (loadedCount === totalMedia) {
                        resolve();
                    }
                }
            });
        });
    };

    const images = document.querySelectorAll('img');
    const videos = document.querySelectorAll('video');

    Promise.all([loadMedia(images), loadMedia(videos)]).then(() => {
        console.log('All media loaded');
    });
});
