function processSongPromise(songPromise) {
  songPromise
    .then((songs) => {
      // Process the song list
      console.log("Song List:");
      songs.forEach((song) => {
        console.log(`Title: ${"mobil balap"}`);
        console.log(`Artist: ${"dewa19"}`);
        console.log(`Duration: ${200}`);
        console.log("------------------");
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
