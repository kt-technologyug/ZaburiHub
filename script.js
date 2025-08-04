// YouTube API Key
const YOUTUBE_API_KEY = 'AIzaSyA_afmssCDZT-CmWZrxI0BjmQ_EojxbOBA';

// Enhanced song data with YouTube IDs
const songsData = [
    { id: 1, title: "Amazing Grace", artist: "John Newton", lyrics: "Amazing grace, how sweet the sound\nThat saved a wretch like me\nI once was lost, but now I'm found\nWas blind, but now I see", ytId: "HsCp5LG_zNE", addedDate: '2023-10-15' },
    { id: 2, title: "Blessed Assurance", artist: "Fanny Crosby", lyrics: "Blessed assurance, Jesus is mine\nOh, what a foretaste of glory divine\nHeir of salvation, purchase of God\nBorn of His Spirit, washed in His blood", addedDate: '2023-10-18' },
    { id: 3, title: "Great Is Thy Faithfulness", artist: "Thomas Chisholm", lyrics: "Great is Thy faithfulness, O God my Father\nThere is no shadow of turning with Thee\nThou changest not, Thy compassions they fail not\nAs Thou hast been, Thou forever wilt be", addedDate: '2023-10-20' },
    { id: 4, title: "How Great Thou Art", artist: "Carl Boberg", lyrics: "O Lord my God, when I in awesome wonder\nConsider all the worlds Thy hands have made\nI see the stars, I hear the rolling thunder\nThy power throughout the universe displayed", addedDate: '2023-10-22' },
    { id: 5, title: "It Is Well With My Soul", artist: "Horatio Spafford", lyrics: "When peace like a river attendeth my way\nWhen sorrows like sea billows roll\nWhatever my lot, Thou hast taught me to say\nIt is well, it is well with my soul", addedDate: '2023-10-25' },
    { id: 6, title: "Joy to the World", artist: "Isaac Watts", lyrics: "Joy to the world, the Lord is come\nLet earth receive her King\nLet every heart prepare Him room\nAnd heaven and nature sing", addedDate: '2023-10-28' },
    { id: 7, title: "10,000 Reasons", artist: "Matt Redman", lyrics: "Bless the Lord, O my soul\nO my soul\nWorship His holy name\nSing like never before\nO my soul\nI'll worship Your holy name", addedDate: '2023-11-01', isNew: true },
    { id: 8, title: "What a Beautiful Name", artist: "Hillsong Worship", lyrics: "You were the Word at the beginning\n One with God the Lord Most High\n Your hidden glory in creation\n Now revealed in You our Christ\n\n  [Chorus 1] \n What a beautiful Name it is\n What a beautiful Name it is\n The Name of Jesus Christ my King\n What a beautiful Name it is\n Nothing compares to this\n What a beautiful Name it is\n The Name of Jesus\n\n  You didn't want heaven without us\n So Jesus You brought heaven down\n My sin was great Your love was greater\n What could separate us now? \n\n  [Chorus 2] \n What a wonderful Name it is\n What a wonderful Name it is\n The Name of Jesus Christ my King\n What a wonderful Name it is\n Nothing compares to this\n What a wonderful Name it is\n The Name of Jesus\n What a wonderful Name it is\n The Name of Jesus", ytID: "nQWFzMvCfLE", addedDate: '2023-11-05', isNew: true },
    { id: 9, title: "Reckless Love", artist: "Cory Asbury", lyrics: "Before I spoke a word, You were singing over me\nYou have been so, so good to me\nBefore I took a breath, You breathed Your life in me\nYou have been so, so kind to me", addedDate: '2023-11-10', isNew: true },
    { id: 10, title: "Oceans (Where Feet May Fail)", artist: "Hillsong United", lyrics: "You call me out upon the waters\nThe great unknown where feet may fail\nAnd there I find You in the mystery\nIn oceans deep, my faith will stand", addedDate: '2023-11-15', isNew: true },
    { id: 11, title: "Reckless Love", artist: "Cory Asbury", lyrics: "Before I spoke a word, You were singing over me\nYou have been so, so good to me\nBefore I took a breath, You breathed Your life in me\nYou have been so, so kind to me", addedDate: '2023-11-10', isNew: true },
    { id: 12, title: "Way Maker", artist: "Sinach", lyrics: "You are here, moving in our midst\nI worship You, I worship You\nYou are here, working in this place\nI worship You, I worship You", addedDate: '2023-11-20', isNew: true },
    { id: 13, title: "Way Maker", artist: "Sinach", lyrics: "You are here, moving in our midst\nI worship You, I worship You\nYou are here, working in this place\nI worship You, I worship You", addedDate: '2023-11-20', isNew: true },
    { id: 14, title: "Graves into Gardens", artist: "Elevation Worship", lyrics: "I've searched the world, but it couldn't fill me\nMan's empty praise and treasures that fade\nAre never enough\nThen You came along and put me back together", addedDate: '2023-11-25', isNew: true },
    { id: 15, title: "Graves into Gardens", artist: "Elevation Worship", lyrics: "I've searched the world, but it couldn't fill me\nMan's empty praise and treasures that fade\nAre never enough\nThen You came along and put me back together", addedDate: '2023-11-25', isNew: true },
    { id: 16, title: "Build My Life", artist: "Pat Barrett", lyrics: "Worthy of every song we could ever sing\nWorthy of all the praise we could ever bring\nWorthy of every breath we could ever breathe\nWe live for You", addedDate: '2023-11-30', isNew: true },
    { id: 17, title: "King of Kings", artist: "Hillsong Worship", lyrics: "In the darkness we were waiting\nWithout hope, without light\nTill from Heaven You came running\nThere was mercy in Your eyes", addedDate: '2023-12-05', isNew: true },
    { id: 18, title: "The Blessing", artist: "Kari Jobe", lyrics: "The Lord bless you and keep you\nMake His face shine upon you\nAnd be gracious to you\nThe Lord turn His face toward you\nAnd give you peace", addedDate: '2023-12-10', isNew: true },
    { id: 19, title: "Goodness of God", artist: "Bethel Music", lyrics: "I love You, Lord\nOh, Your mercy never fails me\nAll my days I've been held in Your hands\nFrom the moment that I wake up\nUntil I lay my head", addedDate: '2023-12-15', isNew: true },
    { id: 20, title: "Living Hope", artist: "Phil Wickham", lyrics: "How great the chasm that lay between us\nHow high the mountain I could not climb\nIn desperation I turned to Heaven\nAnd spoke Your name into the night", addedDate: '2023-12-20', isNew: true },
    { id: 21, title: "Lion and the Lamb", artist: "Bethel Music", lyrics: "He's coming on the clouds\nKings and kingdoms will bow down\nAnd every chain will break\nAs broken hearts declare His praise", addedDate: '2023-12-25', isNew: true },
    { id: 22, title: "Raise a Hallelujah", artist: "Bethel Music", lyrics: "I raise a hallelujah\nIn the presence of my enemies\nI raise a hallelujah\nLouder than the unbelief", addedDate: '2023-12-30', isNew: true },
    { id: 23, title: "Gratitude", artist: "Brandon Lake", lyrics: "All my words fall short\nI've got nothing new\nHow could I express all my gratitude?\nI could sing these songs as I often do", addedDate: '2024-01-05', isNew: true },
    { id: 24, title: "House of Miracles", artist: "Brandon Lake", lyrics: "This is a house of worship\nThis is a place of praise\nWhere every demon trembles\nWhere we proclaim Your name", addedDate: '2024-01-10', isNew: true },
    { id: 25, title: "The Father's House", artist: "Cory Asbury", lyrics: "Sometimes on this journey, I get lost in my mistakes\nWhat looks to me like weakness is a canvas for Your strength\nAnd my story isn't over, my story's just begun", addedDate: '2024-01-15', isNew: true },
    { id: 26, title: "Battle Belongs", artist: "Phil Wickham", lyrics: "When all I see is the battle\nYou see my victory\nWhen all I see is a mountain\nYou see a mountain moved", addedDate: '2024-01-20', isNew: true },
    { id: 27, title: "Graves into Gardens", artist: "Elevation Worship", lyrics: "I've searched the world, but it couldn't fill me\nMan's empty praise and treasures that fade\nAre never enough\nThen You came along and put me back together", addedDate: '2024-01-25', isNew: true },
    { id: 28, title: "Way Maker", artist: "Sinach", lyrics: "You are here, moving in our midst\nI worship You, I worship You\nYou are here, working in this place\nI worship You, I worship You", addedDate: '2024-01-30', isNew: true },
    { id: 29, title: "Gratitude", artist: "Brandon Lake", lyrics: "All my words fall short\nI've got nothing new\nHow could I express all my gratitude?\nI could sing these songs as I often do", addedDate: '2024-02-05', isNew: true },
    { id: 30, title: "House of Miracles", artist: "Brandon Lake", lyrics: "This is a house of worship\nThis is a place of praise\nWhere every demon trembles\nWhere we proclaim Your name", addedDate: '2024-02-10', isNew: true },
    { id: 31, title: "The Father's House", artist: "Cory Asbury", lyrics: "Sometimes on this journey, I get lost in my mistakes\nWhat looks to me like weakness is a canvas for Your strength\nAnd my story isn't over, my story's just begun", addedDate: '2024-02-15', isNew: true },
    { id: 32, title: "Battle Belongs", artist: "Phil Wickham", lyrics: "When all I see is the battle\nYou see my victory\nWhen all I see is a mountain\nYou see a mountain moved", addedDate: '2024-02-20', isNew: true },
    { id: 33, title: "Graves into Gardens", artist: "Elevation Worship", lyrics: "I've searched the world, but it couldn't fill me\nMan's empty praise and treasures that fade\nAre never enough\nThen You came along and put me back together", addedDate: '2024-02-25', isNew: true },
    { id: 34, title: "Way Maker", artist: "Sinach", lyrics: "You are here, moving in our midst\nI worship You, I worship You\nYou are here, working in this place\nI worship You, I worship You", addedDate: '2024-03-01', isNew: true },
    { id: 35, title: "Gratitude", artist: "Brandon Lake", lyrics: "All my words fall short\nI've got nothing new\nHow could I express all my gratitude?\nI could sing these songs as I often do", addedDate: '2024-03-05', isNew: true },
    { id: 36, title: "House of Miracles", artist: "Brandon Lake", lyrics: "This is a house of worship\nThis is a place of praise\nWhere every demon trembles\nWhere we proclaim Your name", addedDate: '2024-03-10', isNew: true },
    { id: 37, title: "The Father's House", artist: "Cory Asbury", lyrics: "Sometimes on this journey, I get lost in my mistakes\nWhat looks to me like weakness is a canvas for Your strength\nAnd my story isn't over, my story's just begun", addedDate: '2024-03-15', isNew: true },
    { id: 38, title: "Battle Belongs", artist: "Phil Wickham", lyrics: "When all I see is the battle\nYou see my victory\nWhen all I see is a mountain\nYou see a mountain moved", addedDate: '2024-03-20', isNew: true },
    { id: 39, title: "Spirit Of God", artist: "Riot Worship", lyrics: "You are the Everlasting father\n You are my help in time of need\n I need you more than any other\n Come fill this place with your love\n\n  You are the Everlasting father\n You are my help in time of need\n I need you more than any other\n Come fill this place with your love\n\n  Spirit of God mov in our midst\n Take down no barriers Break Every Chain\n Power of God move in our midist\n We're in your presence\n Spirit of God\n\n  Spirit of God moving our midest\n Take down no barriers Break Every Chain\n Power of God moving our midist\n We in your presence\n Spirit of God\n\n  We're desperate for your love\n We need you to revive us\n A fire from above\n You're able to supply\n\n  We're desperate for your love Lord\n We need you to revive us \n A fire from above above\n You're able to supply\n\n  Come pour it out Lord\n We cry in desperation\n Come pour it out Lord\n Our hearts are open\n\n Come pour it out Lord\n We cry in desperation come pour it out Lord\n Our hearts are open my God\n Our hearts are open\n\n  Spirit of God move in our midst \n Take down all barriers\n Break Every Chain\n Power of God moving our midst\n As we're in your presence\n Spirit of God", ytId: "wqvv1Sh1DI0", addedDate: '2025-08-05', isNew: true }

];

// YouTube Player Management
let youtubePlayers = {};
let currentPlayingButton = null;

// Initialize YouTube API
function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Called by YouTube API when ready
function onYouTubeIframeAPIReady() {
    console.log("YouTube API ready");
}

// Create YouTube player for a song
function createYouTubePlayer(songId, ytId) {
    youtubePlayers[songId] = new YT.Player(`yt-player-${songId}`, {
        height: '0',
        width: '0',
        videoId: ytId,
        playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            modestbranding: 1,
            rel: 0,
            enablejsapi: 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    console.log("Player ready for song ID:", event.target.a.id);
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        const playerId = event.target.a.id.replace('yt-player-', '');
        const button = document.querySelector(`.play-preview[data-song-id="${playerId}"]`);
        if (button) {
            button.innerHTML = '<i class="fas fa-play"></i> Preview';
            button.classList.remove('playing');
        }
    }
}

// Search YouTube for audio
async function searchYouTubeVideo(songTitle, artist) {
    const cacheKey = `yt-${songTitle}-${artist}`.toLowerCase();
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
        console.log(`Found cached YouTube ID for ${songTitle} by ${artist}: ${cached}`);
        return cached;
    }

    const query = `${songTitle} ${artist} official audio`;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=1&key=${YOUTUBE_API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`YouTube API error: ${response.status} ${response.statusText}`);
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        console.log(`YouTube API response for "${query}":`, data);

        if (data.items && data.items.length > 0) {
            const videoId = data.items[0].id.videoId;
            localStorage.setItem(cacheKey, videoId);
            console.log(`Cached new YouTube ID ${videoId} for ${songTitle} by ${artist}`);
            return videoId;
        }
        console.warn(`No YouTube videos found for query: ${query}`);
        return null;
    } catch (error) {
        console.error('YouTube API error:', error);
        return null;
    }
}

// Queue system to avoid rate limits
const youtubeSearchQueue = [];
let isProcessingQueue = false;

async function processQueue() {
    if (isProcessingQueue || youtubeSearchQueue.length === 0) return;

    isProcessingQueue = true;
    const { song, button, resolve } = youtubeSearchQueue.shift();

    try {
        if (button) {
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
            button.classList.add('loading');
            button.dataset.ytidStatus = 'fetching';
        }

        const videoId = await searchYouTubeVideo(song.title, song.artist);
        song.ytId = videoId;

        if (button) {
            button.dataset.ytidStatus = videoId ? 'loaded' : 'failed';
            if (videoId) {
                createYouTubePlayer(song.id, videoId);
            }
        }

        resolve(videoId);
    } catch (error) {
        if (button) button.dataset.ytidStatus = 'failed';
        resolve(null);
    } finally {
        if (button) {
            button.innerHTML = '<i class="fas fa-play"></i> Preview';
            button.classList.remove('loading');
        }
        isProcessingQueue = false;
        setTimeout(processQueue, 350);
    }
}

function queueYouTubeSearch(song, button = null) {
    return new Promise(resolve => {
        youtubeSearchQueue.push({ song, button, resolve });
        processQueue();
    });
}

// Enhance songs with YouTube IDs in the background
function enhanceSongsWithYouTubeIds() {
    songsData.forEach(song => {
        if (!song.ytId) {
            console.log(`Fetching YouTube ID for ${song.title} by ${song.artist}`);
            queueYouTubeSearch(song).then(videoId => {
                // Update button status for this song
                const button = document.querySelector(`.play-preview[data-song-id="${song.id}"]`);
                if (button) {
                    button.dataset.ytidStatus = videoId ? 'loaded' : 'failed';
                }
            });
        } else {
            console.log(`Skipping YouTube ID fetch for ${song.title} (already has ytId: ${song.ytId})`);
            const button = document.querySelector(`.play-preview[data-song-id="${song.id}"]`);
            if (button) button.dataset.ytidStatus = 'loaded';
        }
    });
}

// Audio preview controls
function setupAudioControls() {
    document.addEventListener('click', function(e) {
        const previewButton = e.target.closest('.play-preview');
        if (previewButton) {
            e.preventDefault();
            handlePreviewClick(previewButton);
        }
    });
}

function handlePreviewClick(button) {
    const songId = button.dataset.songId;
    const song = songsData.find(s => s.id == songId);

    if (!song) {
        console.error(`Song with ID ${songId} not found`);
        return;
    }

    if (button.classList.contains('playing')) {
        stopAllPlayers();
        button.innerHTML = '<i class="fas fa-play"></i> Preview';
        button.classList.remove('playing');
        return;
    }

    stopAllPlayers();

    if (song.ytId && button.dataset.ytidStatus === 'loaded') {
        playYouTubePreview(songId, button);
    } else if (!button.dataset.searched && button.dataset.ytidStatus !== 'fetching') {
        button.dataset.searched = "true";
        button.dataset.ytidStatus = 'fetching';
        queueYouTubeSearch(song, button).then(ytId => {
            if (ytId) {
                button.dataset.ytidStatus = 'loaded';
                playYouTubePreview(songId, button);
            } else {
                button.dataset.ytidStatus = 'failed';
                showYouTubeError(button);
            }
        });
    } else if (button.dataset.ytidStatus === 'failed') {
        showYouTubeError(button);
    }
}

function playYouTubePreview(songId, button) {
    if (!youtubePlayers[songId]) {
        const song = songsData.find(s => s.id == songId);
        if (song && song.ytId) {
            console.log(`Creating YouTube player for song ID ${songId} with ytId ${song.ytId}`);
            createYouTubePlayer(songId, song.ytId);
        } else {
            console.error(`No ytId for song ID ${songId}`);
            showYouTubeError(button);
            return;
        }
    }

    if (youtubePlayers[songId]) {
        try {
            youtubePlayers[songId].playVideo();
            button.innerHTML = '<i class="fas fa-pause"></i> Pause';
            button.classList.add('playing');
            currentPlayingButton = button;
            console.log(`Playing preview for song ID ${songId}`);
        } catch (error) {
            console.error(`Error playing YouTube video for song ID ${songId}:`, error);
            showYouTubeError(button);
        }
    }
}

function stopAllPlayers() {
    Object.values(youtubePlayers).forEach(player => {
        try {
            player.stopVideo();
        } catch (e) {
            console.log("Error stopping player:", e);
        }
    });

    if (currentPlayingButton) {
        currentPlayingButton.innerHTML = '<i class="fas fa-play"></i> Preview';
        currentPlayingButton.classList.remove('playing');
        currentPlayingButton = null;
    }
}

function showYouTubeError(button) {
    const errorSpan = document.createElement('span');
    errorSpan.className = 'yt-error';
    errorSpan.innerHTML = '<i class="fas fa-exclamation-circle"></i> Preview unavailable';
    button.parentNode.appendChild(errorSpan);
    setTimeout(() => errorSpan.remove(), 3000);
}

// Update song item rendering
function renderSongItem(song) {
    const songItem = document.createElement('div');
    songItem.className = 'song-item';
    songItem.dataset.id = song.id;

    const newBadge = song.isNew ? '<span class="new-badge">NEW</span>' : '';
    const dateInfo = currentFilter === 'new' ? `<div class="song-date">Added: ${formatDate(song.addedDate)}</div>` : '';

    songItem.innerHTML = `
        <div class="song-title">${song.title}${newBadge}</div>
        <div class="song-artist">${song.artist}</div>
        ${dateInfo}
        
    `;

    return songItem;
}

// Initialize the app
async function init() {
    console.log("Initializing ZaburiHub");
    loadYouTubeAPI();
    setupAudioControls();
    renderSongsList(); // Render immediately
    enhanceSongsWithYouTubeIds(); // Fetch YouTube IDs in background
    setupEventListeners();
}

// DOM Elements
const songsList = document.getElementById('songsList');
const lyricsDisplay = document.getElementById('lyricsDisplay');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const alphabetLinks = document.querySelectorAll('.alphabet-letters a');
const pagination = document.getElementById('pagination');

// Pagination state
let currentPage = 1;
const SONGS_PER_PAGE = 10;

// Current filter state
let currentFilter = 'new';
let currentSearchTerm = '';

// Filters that should use pagination
const paginatedFilters = ['all', 'new', 'title', 'artist', 'popular'];

// Render songs list based on current filter and search
function renderSongsList(customFilter) {
    songsList.innerHTML = '<div class="loading">Loading songs...</div>';

    let filteredSongs = [...songsData];

    if (typeof customFilter === 'function') {
        filteredSongs = filteredSongs.filter(customFilter);
    } else {
        if (currentSearchTerm) {
            const searchTerm = currentSearchTerm.toLowerCase();
            filteredSongs = filteredSongs.filter(song =>
                song.title.toLowerCase().includes(searchTerm) ||
                song.artist.toLowerCase().includes(searchTerm)
            );
        }

        switch (currentFilter) {
            case 'new':
                filteredSongs = filteredSongs.filter(song => song.isNew);
                filteredSongs.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
                break;
            case 'title':
                filteredSongs.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'artist':
                filteredSongs.sort((a, b) => a.artist.localeCompare(b.title));
                break;
            case 'popular':
                filteredSongs.sort((a, b) => b.id - a.id);
                break;
            default:
                filteredSongs.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
        }
    }

    let paginatedSongs = filteredSongs;
    let totalPages = 1;
    if (paginatedFilters.includes(currentFilter) && typeof customFilter !== 'function') {
        totalPages = Math.ceil(filteredSongs.length / SONGS_PER_PAGE);
        if (currentPage > totalPages) currentPage = totalPages;
        if (currentPage < 1) currentPage = 1;
        const start = (currentPage - 1) * SONGS_PER_PAGE;
        const end = start + SONGS_PER_PAGE;
        paginatedSongs = filteredSongs.slice(start, end);
    } else {
        currentPage = 1;
        totalPages = 1;
    }

    songsList.innerHTML = ''; // Clear loading message

    if (paginatedSongs.length === 0) {
        songsList.innerHTML = '<div class="no-results">No songs found matching your criteria.</div>';
        if (pagination) pagination.innerHTML = '';
        return;
    }

    paginatedSongs.forEach(song => {
        const songItem = renderSongItem(song);
        songsList.appendChild(songItem);
    });

    if (paginatedFilters.includes(currentFilter) && totalPages > 1 && typeof customFilter !== 'function') {
        renderPagination(currentPage, totalPages);
    } else if (pagination) {
        pagination.innerHTML = '';
    }
}

function renderPagination(current, total) {
    if (!pagination) return;
    let html = '';

    if (current > 1) {
        html += `<button class="page-btn" data-page="${current - 1}">&laquo;</button>`;
    }

    for (let i = Math.max(1, current - 2); i < current; i++) {
        html += `<button class="page-btn" data-page="${i}">${i}</button>`;
    }

    html += `<button class="page-btn active" data-page="${current}">${current}</button>`;

    for (let i = current + 1; i <= Math.min(total, current + 2); i++) {
        html += `<button class="page-btn" data-page="${i}">${i}</button>`;
    }

    if (current + 2 < total) {
        if (current + 2 < total - 1) html += `<span class="page-ellipsis">...</span>`;
        html += `<button class="page-btn" data-page="${total}">${total}</button>`;
    }

    if (current < total) {
        html += `<button class="page-btn" data-page="${current + 1}">&raquo;</button>`;
    }

    pagination.innerHTML = html;

    pagination.querySelectorAll('.page-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentPage = parseInt(btn.dataset.page, 10);
            renderSongsList();
        });
    });
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Display lyrics for a song
function displayLyrics(songId) {
    const song = songsData.find(s => s.id === parseInt(songId));
    if (!song) return;

    document.querySelectorAll('.song-item').forEach(item => {
        item.classList.remove('active');
    });

    const selectedSongItem = document.querySelector(`.song-item[data-id="${songId}"]`);
    if (selectedSongItem) selectedSongItem.classList.add('active');

    const lyricsHTML = `
        <div class="lyrics-content mobile-lyrics-content">
            <h2>${song.title} ${song.isNew ? '<span class="new-badge">NEW</span>' : ''}</h2>
            <h3>by ${song.artist}</h3>
            ${song.addedDate ? `<div class="song-meta">Added on ${formatDate(song.addedDate)}</div>` : ''}
            <div class="lyrics-text">${song.lyrics}</div>
            <div class="lyrics-ad">
                <span><br>Advertisement</span>
                <div class="ad-content">Related Songs You Might Like</div>
            </div>
        </div>
        <div class="audio-controls" style="margin-top: 20px;">
            <button class="play-preview" data-song-id="${song.id}" data-ytid-status="${song.ytId ? 'loaded' : 'pending'}">
                <i class="fas fa-play"></i> Preview
            </button>
            <div id="yt-player-${song.id}" class="yt-player"></div>
        </div>
    `;

    document.querySelectorAll('.inline-lyrics-display').forEach(el => el.remove());

    if (window.innerWidth <= 768) {
        const lyricsDiv = document.createElement('div');
        lyricsDiv.className = 'inline-lyrics-display';
        lyricsDiv.innerHTML = lyricsHTML;
        if (selectedSongItem) {
            selectedSongItem.insertAdjacentElement('afterend', lyricsDiv);
        }
        if (lyricsDisplay) lyricsDisplay.innerHTML = '';
    } else {
        if (lyricsDisplay) lyricsDisplay.innerHTML = lyricsHTML;
    }
}

// Re-render lyrics position on resize
window.addEventListener('resize', () => {
    const activeSong = document.querySelector('.song-item.active');
    if (activeSong) {
        displayLyrics(activeSong.dataset.id);
    }
});

// Setup event listeners
function setupEventListeners() {
    songsList.addEventListener('click', (e) => {
        const songItem = e.target.closest('.song-item');
        if (songItem) {
            displayLyrics(songItem.dataset.id);
        }
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            currentPage = 1;
            renderSongsList();
        });
    });

    alphabetLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const letter = link.textContent;

            alphabetLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            renderSongsList(song =>
                letter === '0-9'
                    ? /^[0-9]/.test(song.title)
                    : song.title.toUpperCase().startsWith(letter)
            );
        });
    });

    searchBtn.addEventListener('click', () => {
        currentSearchTerm = searchInput.value.trim();
        currentPage = 1;
        renderSongsList();
    });

    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            currentSearchTerm = searchInput.value.trim();
            currentPage = 1;
            renderSongsList();
        }
    });

    searchInput.addEventListener('input', () => {
        currentSearchTerm = searchInput.value.trim();
        currentPage = 1;
        renderSongsList();
    });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Hamburger menu toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('open');
        });
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('open');
            });
        });
    }
});

// Artists page logic
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('artistsList')) {
        const ARTISTS_PER_PAGE = 30;
        let currentArtistPage = 1;
        let filteredArtists = getUniqueArtists();

        function getUniqueArtists() {
            const artistSet = new Set();
            songsData.forEach(song => artistSet.add(song.artist));
            return Array.from(artistSet).sort((a, b) => a.localeCompare(b));
        }

        function renderArtistsList() {
            const artistsListDiv = document.getElementById('artistsList');
            const artistPagination = document.getElementById('artistPagination');
            artistsListDiv.innerHTML = '';

            const totalPages = Math.ceil(filteredArtists.length / ARTISTS_PER_PAGE);
            if (currentArtistPage > totalPages) currentArtistPage = totalPages;
            if (currentArtistPage < 1) currentArtistPage = 1;

            const start = (currentArtistPage - 1) * ARTISTS_PER_PAGE;
            const end = start + ARTISTS_PER_PAGE;
            const artistsToShow = filteredArtists.slice(start, end);

            if (artistsToShow.length === 0) {
                artistsListDiv.innerHTML = '<div class="no-results">No artists found.</div>';
                artistPagination.innerHTML = '';
                return;
            }

            const ul = document.createElement('ul');
            ul.className = 'artist-list';
            artistsToShow.forEach(artist => {
                const li = document.createElement('li');
                li.className = 'artist-item';
                li.innerHTML = `<a href="#" data-artist="${artist}">${artist}</a>`;
                ul.appendChild(li);
            });
            artistsListDiv.appendChild(ul);

            let html = '';
            if (totalPages > 1) {
                if (currentArtistPage > 1) {
                    html += `<button class="page-btn" data-page="${currentArtistPage - 1}">&laquo;</button>`;
                }
                for (let i = Math.max(1, currentArtistPage - 2); i < currentArtistPage; i++) {
                    html += `<button class="page-btn" data-page="${i}">${i}</button>`;
                }
                html += `<button class="page-btn active" data-page="${currentArtistPage}">${currentArtistPage}</button>`;
                for (let i = currentArtistPage + 1; i <= Math.min(totalPages, currentArtistPage + 2); i++) {
                    html += `<button class="page-btn" data-page="${i}">${i}</button>`;
                }
                if (currentArtistPage + 2 < totalPages) {
                    if (currentArtistPage + 2 < totalPages - 1) html += `<span class="page-ellipsis">...</span>`;
                    html += `<button class="page-btn" data-page="${totalPages}">${totalPages}</button>`;
                }
                if (currentArtistPage < totalPages) {
                    html += `<button class="page-btn" data-page="${currentArtistPage + 1}">&raquo;</button>`;
                }
            }
            artistPagination.innerHTML = html;

            artistPagination.querySelectorAll('.page-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    currentArtistPage = parseInt(btn.dataset.page, 10);
                    renderArtistsList();
                    document.getElementById('artistSongs').innerHTML = '';
                });
            });

            document.querySelectorAll('.artist-item a').forEach(link => {
                link.addEventListener('click', e => {
                    e.preventDefault();
                    showArtistSongs(link.dataset.artist);
                });
            });
        }

        function showArtistSongs(artist) {
            const artistSongsDiv = document.getElementById('artistSongs');
            const songs = songsData.filter(song => song.artist === artist);
            if (songs.length === 0) {
                artistSongsDiv.innerHTML = '<div class="no-results">No songs found for this artist.</div>';
                return;
            }
            let html = `<h3>Songs by ${artist}</h3><ul class="artist-songs-list">`;
            songs.forEach(song => {
                html += `<li>
                    <a href="#" class="artist-song-link" data-song-id="${song.id}">
                        <strong>${song.title}</strong>${song.isNew ? ' <span class="new-badge">NEW</span>' : ''}
                    </a>
                </li>`;
            });
            html += '</ul>';
            artistSongsDiv.innerHTML = html;

            document.querySelectorAll('.artist-song-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    displayLyricsFromArtistPage(this.dataset.songId);
                });
            });
        }

        function displayLyricsFromArtistPage(songId) {
            const song = songsData.find(s => s.id == songId);
            if (!song) return;
            const artistSongsDiv = document.getElementById('artistSongs');
            artistSongsDiv.innerHTML = `
                <div class="lyrics-content">
                    <h2>${song.title} ${song.isNew ? '<span class="new-badge">NEW</span>' : ''}</h2>
                    <h3>by ${song.artist}</h3>
                    ${song.addedDate ? `<div class="song-meta">Added on ${formatDate(song.addedDate)}</div>` : ''}
                    <div class="lyrics-text">${song.lyrics.replace(/\n/g, '<br>')}</div>
                    <div class="audio-controls" style="margin-top: 20px;">
                        <button class="play-preview" data-song-id="${song.id}" data-ytid-status="${song.ytId ? 'loaded' : 'pending'}">
                            <i class="fas fa-play"></i> Preview
                        </button>
                        <div id="yt-player-${song.id}" class="yt-player"></div>
                    </div>
                    <button id="backToSongs" style="margin-top:20px;">
                        <i class="fa-solid fa-arrow-left"></i>
                    </button>
                </div>
            `;
            document.getElementById('backToSongs').onclick = () => showArtistSongs(song.artist);
        }

        function doArtistSearch() {
            const term = searchInput.value.trim().toLowerCase();
            filteredArtists = getUniqueArtists().filter(artist => artist.toLowerCase().includes(term));
            currentArtistPage = 1;
            renderArtistsList();
            document.getElementById('artistSongs').innerHTML = '';
        }

        searchInput.addEventListener('input', doArtistSearch);
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            doArtistSearch();
        });
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') doArtistSearch();
        });

        renderArtistsList();
    }
});

