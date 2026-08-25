import CommentForm from "@/components/CommentForm/CommentForm";
import CommentSection from "@/components/CommentSection/CommentSection";
import { FavoriteButton } from "@/components/FavoriteButton/FavoriteButton";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function ArtPieceDetail({
  favoriteArts,
  onToggle,
  art,
  comments,
  onAddComment,
}) {
  const router = useRouter();
  const { slug } = router.query;
  const piece = art.find((p) => p.slug === slug);
  const isFavorite = favoriteArts.some((fav) => fav.slug === piece.slug);
  if (!piece) return <p>Loading ...</p>;
  return (
    <DetailWrapper>
      <ImageWrapper>
        <Image
          src={piece.imageSource}
          width={piece.dimensions.width}
          height={piece.dimensions.height}
          style={{ width: "100%", height: "auto" }}
        />
      </ImageWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "5px",
          alignItems: "center",
        }}
      >
        <Title>{piece.name}</Title>
        <FavoriteButton
          onToggle={onToggle}
          slug={slug}
          isFavorite={isFavorite}
        />
      </div>

      <Artist>by {piece.artist}</Artist>

      <ArtistDetails>
        <MetaItem>{piece.year}</MetaItem>
        <span>·</span>
        <MetaItem>{piece.genre}</MetaItem>
      </ArtistDetails>

      <CommentSection comments={comments} slug={slug} />
      <CommentForm slug={slug} onAddComment={onAddComment} />

      <BackButton onClick={() => router.push("/art-pieces")}>← Back</BackButton>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  max-width: 700px;
  margin: 40px auto;
  text-align: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  margin: 80px auto;
  border-radius: 5px;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #e8e6e3;
  margin: 0 0 4px;
`;

const Artist = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  color: #e8e6e3;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin: 0 0 16px;
`;

const ArtistDetails = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  color: #e8e6e3;
  font-size: 0.9rem;
  margin-bottom: 32px;
`;

const MetaItem = styled.h3`
  font-weight: 400;
  font-size: inherit;
  margin: 0;
`;

const BackButton = styled.button`
  background: none;
  border: 1px solid #e8e6e3;
  color: #e8e6e3;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: #15669d;
  }
`;
