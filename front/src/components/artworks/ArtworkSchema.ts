export interface ArtworkItemProps {
  img: string;
  imgAlt: string;

  artist: string;
  artistLink: string;
  price: string;

  dates: [Date, Date] /* [Begin, Finished] */;
}