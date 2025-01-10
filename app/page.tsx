'use client'

import { useEffect, useState } from 'react'
import { Box, VStack, Heading } from '@chakra-ui/react'
import VideoPlayer from '../components/VideoPlayer'
import VideoGrid from '../components/VideoGrid'

// Assume these types are defined based on the API response
type Video = {
  VideoUrl: string
  VideoName: string
  Thumbnail: { url: string }
  VideoCategory: string
}

type CategoryOrder = string[]

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([])
  const [categoryOrder, setCategoryOrder] = useState<CategoryOrder>([])
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null)

  useEffect(() => {
    // Fetch videos and category order from API
    const fetchData = async () => {
      try {
        const videosResponse = await fetch('/api/videos')
        const videosData = await videosResponse.json()
        setVideos(videosData)

        const orderResponse = await fetch('/api/category-order')
        const orderData = await orderResponse.json()
        setCategoryOrder(orderData)

        // Set the first video as current video
        if (videosData.length > 0) {
          setCurrentVideo(videosData[0])
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <Box bg="gray.900" minH="100vh" color="white">
      <VStack spacing={8} align="stretch">
        <VideoPlayer video={currentVideo} />
        <Box px={8}>
          <Heading as="h1" size="2xl" mb={6} textAlign="center">
            Flashy Video Streaming
          </Heading>
          <VideoGrid 
            videos={videos} 
            categoryOrder={categoryOrder} 
            onVideoSelect={setCurrentVideo}
          />
        </Box>
      </VStack>
    </Box>
  )
}

