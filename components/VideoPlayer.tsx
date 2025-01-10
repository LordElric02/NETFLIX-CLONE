import { Box, AspectRatio } from '@chakra-ui/react'

type VideoPlayerProps = {
  video: { VideoUrl: string; VideoName: string } | null
}

export default function VideoPlayer({ video }: VideoPlayerProps) {
  if (!video) return null

  return (
    <Box w="100%" maxH="70vh" overflow="hidden" position="relative">
      <AspectRatio ratio={16 / 9}>
        <video
          src={video.VideoUrl}
          controls
          autoPlay
          poster="/video-placeholder.jpg"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        >
          Your browser does not support the video tag.
        </video>
      </AspectRatio>
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        p={4}
        bg="rgba(0,0,0,0.7)"
        color="white"
      >
        <Box fontSize="xl" fontWeight="bold">
          {video.VideoName}
        </Box>
      </Box>
    </Box>
  )
}

