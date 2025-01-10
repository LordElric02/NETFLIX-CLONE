import { Box, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

type VideoCardProps = {
  video: {
    VideoUrl: string
    VideoName: string
    Thumbnail: { url: string }
  }
  onSelect: (video: VideoCardProps['video']) => void
}

const MotionBox = motion(Box)

export default function VideoCard({ video, onSelect }: VideoCardProps) {
  return (
    <MotionBox
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      cursor="pointer"
      onClick={() => onSelect(video)}
    >
      <Box
        borderRadius="lg"
        overflow="hidden"
        boxShadow="xl"
        transition="all 0.3s"
        _hover={{ boxShadow: '2xl' }}
      >
        <Image
          src={video.Thumbnail.url}
          alt={video.VideoName}
          objectFit="cover"
          w="100%"
          h="200px"
        />
        <Box p={2} bg="gray.800">
          <Text fontSize="sm" fontWeight="bold" noOfLines={2}>
            {video.VideoName}
          </Text>
        </Box>
      </Box>
    </MotionBox>
  )
}

