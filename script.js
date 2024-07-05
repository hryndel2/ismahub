// Simulate video feed data
const videoFeedData = [
    {
        id: 1,
        videoUrl: 'https://example.com/video1.mp4',
        username: 'user1',
        caption: 'Video 1 caption'
    },
    {
        id: 2,
        videoUrl: 'https://example.com/video2.mp4',
        username: 'user2',
        caption: 'Video 2 caption'
    },
    // ...
];

// Render video feed
const videoFeedContainer = document.querySelector('.video-feed');
videoFeedData.forEach((video) => {
    const videoElement = document.createElement('video');
    videoElement.src = video.videoUrl;
    videoElement.controls = true;
    videoElement.width = '100%';
    videoElement.height = '200px';
    videoElement.objectFit = 'cover';
    videoElement.borderRadius = '10px';
    videoElement.marginBottom = '20px';

    const videoCaption = document.createElement('p');
    videoCaption.textContent = video.caption;

    const videoUsername = document.createElement('p');
    videoUsername.textContent = video.username;

    videoFeedContainer.appendChild(videoElement);
    videoFeedContainer.appendChild(videoCaption);
    videoFeedContainer.appendChild(videoUsername);
});