import { Box, SimpleGrid, VStack, Heading } from '@chakra-ui/react'
import VideoCard from './VideoCard'

type Video = {
  VideoUrl: string
  VideoName: string
  Thumbnail: { url: string }
  VideoCategory: string
}

type VideoGridProps = {
  videos: Video[]
  categoryOrder: string[]
  onVideoSelect: (video: Video) => void
}

export default function VideoGrid({ videos, categoryOrder, onVideoSelect }: VideoGridProps) {
  const groupedVideos = videos.reduce((acc, video) => {
    if (!acc[video.VideoCategory]) {
      acc[video.VideoCategory] = []
    }
    acc[video.VideoCategory].push(video)
    return acc
  }, {} as Record<string, Video[]>)

  return (
    <VStack spacing={8} align="stretch">
      {categoryOrder.map((category) => (
        <Box key={category}>
          <Heading as="h2" size="lg" mb={4}>
            {category}
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4, xl: 5 }} spacing={4}>
            {groupedVideos[category]?.map((video) => (
              <VideoCard key={video.VideoUrl} video={video} onSelect={onVideoSelect} />
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </VStack>
  )
}

