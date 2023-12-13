import { MediaRenderer } from "@thirdweb-dev/react";

function Home() {
  return (
    // Any URL that points to media (IPFS URI, HTTP URL, etc.)
    <MediaRenderer src="ipfs://bafybeieptmeuqwoguuw6742ctl6jda732aeezalvtd7rmym7pyfszg7jli/" />
  );
}