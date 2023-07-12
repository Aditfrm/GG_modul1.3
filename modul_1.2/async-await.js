function fetchSongList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const songList = [
        { singer: "Artist 1", title: "Song 1", duration: "3:45" },
        { singer: "Artist 2", title: "Song 2", duration: "4:20" },
        { singer: "Artist 3", title: "Song 3", duration: "3:30" },
      ];
      resolve(songList);
    }, 2000);
  });
}

async function displaySongList() {
  try {
    console.log("Fetching song list...");
    const songList = await fetchSongList();
    return songList;
  } catch (error) {
    throw new Error(error);
  }
}

displaySongList()
  .then((songList) => {
    console.log("Song list:");
    songList.forEach((song) => {
      console.log(
        `Singer: ${song.singer}, Title: ${song.title}, Duration: ${song.duration}`
      );
    });
  })
  .catch((error) => {
    console.log("Error:", error);
  });
