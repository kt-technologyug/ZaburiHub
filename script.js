// Enhanced sample data with timestamps
const songsData = [
    { id: 1, title: "Amazing Grace", artist: "John Newton", lyrics: "Amazing grace, how sweet the sound\nThat saved a wretch like me\nI once was lost, but now I'm found\nWas blind, but now I see", addedDate: '2023-10-15' },
    { id: 2, title: "Blessed Assurance", artist: "Fanny Crosby", lyrics: "Blessed assurance, Jesus is mine\nOh, what a foretaste of glory divine\nHeir of salvation, purchase of God\nBorn of His Spirit, washed in His blood", addedDate: '2023-10-18' },
    { id: 3, title: "Great Is Thy Faithfulness", artist: "Thomas Chisholm", lyrics: "Great is Thy faithfulness, O God my Father\nThere is no shadow of turning with Thee\nThou changest not, Thy compassions they fail not\nAs Thou hast been, Thou forever wilt be", addedDate: '2023-10-20' },
    { id: 4, title: "How Great Thou Art", artist: "Carl Boberg", lyrics: "O Lord my God, when I in awesome wonder\nConsider all the worlds Thy hands have made\nI see the stars, I hear the rolling thunder\nThy power throughout the universe displayed", addedDate: '2023-10-22' },
    { id: 5, title: "It Is Well With My Soul", artist: "Horatio Spafford", lyrics: "When peace like a river attendeth my way\nWhen sorrows like sea billows roll\nWhatever my lot, Thou hast taught me to say\nIt is well, it is well with my soul", addedDate: '2023-10-25' },
    { id: 6, title: "Joy to the World", artist: "Isaac Watts", lyrics: "Joy to the world, the Lord is come\nLet earth receive her King\nLet every heart prepare Him room\nAnd heaven and nature sing", addedDate: '2023-10-28' },
    { id: 7, title: "10,000 Reasons", artist: "Matt Redman", lyrics: "Bless the Lord, O my soul\nO my soul\nWorship His holy name\nSing like never before\nO my soul\nI'll worship Your holy name", addedDate: '2023-11-01', isNew: true },
    { id: 8, title: "What a Beautiful Name", artist: "Hillsong Worship", lyrics: "You were the Word at the beginning\nOne with God the Lord Most High\nYour hidden glory in creation\nNow revealed in You our Christ", addedDate: '2023-11-05', isNew: true },
    { id: 9, title: "Reckless Love", artist: "Cory Asbury", lyrics: "Before I spoke a word, You were singing over me\nYou have been so, so good to me\nBefore I took a breath, You breathed Your life in me\nYou have been so, so kind to me", addedDate: '2023-11-10', isNew: true },
];

// DOM Elements
const songsList = document.getElementById('songsList');
const lyricsDisplay = document.getElementById('lyricsDisplay');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const alphabetLinks = document.querySelectorAll('.alphabet-letters a');

// Current filter state
let currentFilter = 'new'; // Default to show new additions
let currentSearchTerm = '';

// Initialize the app
function init() {
    // Set 'New Additions' as active by default
    const newBtn = document.querySelector('.filter-btn[data-filter="new"]');
    if (newBtn) newBtn.classList.add('active');
    renderSongsList();
    setupEventListeners();
}

// Render songs list based on current filter and search
function renderSongsList() {
    songsList.innerHTML = '';
    
    let filteredSongs = [...songsData];
    
    // Apply search filter
    if (currentSearchTerm) {
        const searchTerm = currentSearchTerm.toLowerCase();
        filteredSongs = filteredSongs.filter(song => 
            song.title.toLowerCase().includes(searchTerm) || 
            song.artist.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply filter
    switch(currentFilter) {
        case 'new':
            filteredSongs = filteredSongs.filter(song => song.isNew);
            filteredSongs.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
            break;
        case 'title':
            filteredSongs.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'artist':
            filteredSongs.sort((a, b) => a.artist.localeCompare(b.artist));
            break;
        case 'popular':
            // In a real app, this would sort by views or popularity
            filteredSongs.sort((a, b) => b.id - a.id); // Fake popularity sort
            break;
        default: // 'all'
            filteredSongs.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
    }
    
    if (filteredSongs.length === 0) {
        songsList.innerHTML = '<div class="no-results">No songs found matching your criteria.</div>';
        return;
    }
    
    filteredSongs.forEach(song => {
        const songItem = document.createElement('div');
        songItem.className = 'song-item';
        songItem.dataset.id = song.id;
        
        const newBadge = song.isNew ? '<span class="new-badge">NEW</span>' : '';
        
        songItem.innerHTML = `
            <div class="song-title">${song.title}${newBadge}</div>
            <div class="song-artist">${song.artist}</div>
            ${currentFilter === 'new' ? `<div class="song-date">Added: ${formatDate(song.addedDate)}</div>` : ''}
        `;
        
        songsList.appendChild(songItem);
    });
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Display lyrics for a song (mobile: below title, desktop: main panel)
function displayLyrics(songId) {
    const song = songsData.find(s => s.id === parseInt(songId));
    if (!song) return;

    // Remove active class from all song items
    document.querySelectorAll('.song-item').forEach(item => {
        item.classList.remove('active');
    });

    // Add active class to selected song
    const selectedSongItem = document.querySelector(`.song-item[data-id="${songId}"]`);
    if (selectedSongItem) selectedSongItem.classList.add('active');

    // Lyrics HTML
    const lyricsHTML = `
        <div class="lyrics-content mobile-lyrics-content">
            <h2>${song.title} ${song.isNew ? '<span class="new-badge">NEW</span>' : ''}</h2>
            <h3>by ${song.artist}</h3>
            ${song.addedDate ? `<div class="song-meta">Added on ${formatDate(song.addedDate)}</div>` : ''}
            <div class="lyrics-text">${song.lyrics}</div>
            <div class="lyrics-ad">
                <span>Advertisement</span>
                <div class="ad-content">Related Songs You Might Like</div>
            </div>
        </div>
    `;

    // Remove any existing inline lyrics display
    document.querySelectorAll('.inline-lyrics-display').forEach(el => el.remove());

    // On mobile, insert lyrics after the selected song item
    if (window.innerWidth <= 768) {
        const lyricsDiv = document.createElement('div');
        lyricsDiv.className = 'inline-lyrics-display';
        lyricsDiv.innerHTML = lyricsHTML;
        if (selectedSongItem) {
            selectedSongItem.insertAdjacentElement('afterend', lyricsDiv);
        }
        // Hide the main lyrics panel
        if (lyricsDisplay) lyricsDisplay.innerHTML = '';
    } else {
        // On desktop, show in the main lyrics panel
        if (lyricsDisplay) lyricsDisplay.innerHTML = lyricsHTML;
    }
}

// Re-render lyrics position on resize
window.addEventListener('resize', () => {
    // If a song is selected, re-display lyrics in the correct place
    const activeSong = document.querySelector('.song-item.active');
    if (activeSong) {
        displayLyrics(activeSong.dataset.id);
    }
});

// Setup event listeners
function setupEventListeners() {
    // Song item click
    songsList.addEventListener('click', (e) => {
        const songItem = e.target.closest('.song-item');
        if (songItem) {
            displayLyrics(songItem.dataset.id);
        }
    });

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderSongsList();
        });
    });

    // Alphabet links
    alphabetLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const letter = link.textContent;

            // Highlight the selected letter
            alphabetLinks.forEach(l => l.style.backgroundColor = 'white');
            alphabetLinks.forEach(l => l.style.color = 'var(--dark-color)');
            link.style.backgroundColor = 'var(--primary-color)';
            link.style.color = 'white';

            // Filter songs by first letter
            if (letter === '0-9') {
                currentSearchTerm = '^[0-9]';
            } else {
                currentSearchTerm = `^${letter}`;
            }

            currentFilter = 'title';
            document.querySelector('.filter-btn[data-filter="title"]').classList.add('active');
            document.querySelector('.filter-btn[data-filter="all"]').classList.remove('active');
            document.querySelector('.filter-btn[data-filter="artist"]').classList.remove('active');
            document.querySelector('.filter-btn[data-filter="new"]').classList.remove('active');
            document.querySelector('.filter-btn[data-filter="popular"]').classList.remove('active');

            renderSongsList();

            // Reset search input
            searchInput.value = '';
            currentSearchTerm = '';
        });
    });

    // Search functionality
    searchBtn.addEventListener('click', () => {
        currentSearchTerm = searchInput.value.trim();
        renderSongsList();
    });

    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            currentSearchTerm = searchInput.value.trim();
            renderSongsList();
        }
    });

    // Live search
    searchInput.addEventListener('input', () => {
        currentSearchTerm = searchInput.value.trim();
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
        // Optional: Close menu when a link is clicked (mobile UX)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('open');
            });
        });
    }
});