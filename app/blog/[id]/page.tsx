'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of React Native',
    content: `
      React Native has come a long way since its inception, and its future looks brighter than ever. In this post, we'll explore some of the exciting features and improvements coming to React Native.

      ## New Architecture

      The React Native team is working on a complete overhaul of the framework's architecture. This new architecture, code-named "Fabric," aims to improve performance, increase flexibility, and simplify the framework.

      Key improvements include:
      - A new rendering system that's more efficient and flexible
      - Improved interoperability with native modules
      - Better support for concurrent rendering

      ## Improved Performance

      Performance has always been a focus for React Native, and future versions will bring even more optimizations. Some areas of improvement include:
      - Faster startup times
      - Reduced memory usage
      - Smoother animations and transitions

      ## Enhanced Developer Experience

      The React Native team is also focusing on improving the developer experience. Future updates will include:
      - Better error messages and debugging tools
      - Improved hot reloading capabilities
      - Enhanced type checking with TypeScript

      ## Cross-Platform Consistency

      While React Native has always aimed to provide a consistent experience across platforms, future versions will take this even further. Expect to see:
      - More consistent APIs between iOS and Android
      - Improved support for web applications
      - Better integration with platform-specific features

      As React Native continues to evolve, it remains an excellent choiceover the
</cut_off_point>

features

      As React Native continues to evolve, it remains an excellent choice for developers looking to build high-performance, cross-platform mobile applications. Its growing ecosystem, strong community support, and continuous improvements make it a technology worth investing in for the future of mobile app development.

    `,
    image: '/placeholder.svg?height=400&width=800',
    date: '2023-06-01',
  },
  {
    id: 2,
    title: 'Optimizing Performance in React Applications',
    content: `
      Performance is crucial for providing a smooth user experience in React applications. In this post, we'll explore some effective techniques to optimize your React apps.

      ## Use React.memo for Component Memoization

      React.memo is a higher-order component that can significantly improve performance by memoizing component renders. It prevents unnecessary re-renders when the component's props haven't changed.

      \`\`\`jsx
      const MyComponent = React.memo(function MyComponent(props) {
        /* render using props */
      });
      \`\`\`

      ## Implement Code Splitting

      Code splitting allows you to split your code into smaller chunks which can then be loaded on demand or in parallel. This can significantly improve the initial load time of your application.

      \`\`\`jsx
      const OtherComponent = React.lazy(() => import('./OtherComponent'));
      \`\`\`

      ## Optimize Images

      Large images can significantly slow down your application. Use appropriate image formats, compress images, and consider lazy loading images that are not immediately visible.

      ## Use Production Build

      Always use the production build of React when deploying your application. The production build includes several optimizations that make your app run faster.

      ## Implement Virtualization for Long Lists

      When rendering long lists, consider using a virtualization library like react-window to render only the items that are currently visible on the screen.

      By implementing these optimizations, you can significantly improve the performance of your React applications, providing a better user experience.
    `,
    image: '/placeholder.svg?height=400&width=800',
    date: '2023-05-15',
  },
  {
    id: 3,
    title: 'Building Scalable Backend Services for Mobile Apps',
    content: `
      Creating robust and scalable backend services is crucial for the success of any mobile application. In this post, we'll explore best practices for building backend services that can grow with your app.

      ## Use Microservices Architecture

      Microservices architecture allows you to break down your application into smaller, independent services. This approach improves scalability, makes maintenance easier, and allows for better resource allocation.

      ## Implement Caching

      Caching can significantly reduce the load on your database and improve response times. Consider using Redis or Memcached for caching frequently accessed data.

      ## Use a Content Delivery Network (CDN)

      A CDN can help distribute your content across multiple, geographically diverse servers. This reduces latency and improves load times for users around the world.

      ## Implement Proper Error Handling and Logging

      Robust error handling and logging are crucial for identifying and fixing issues quickly. Use tools like Sentry or ELK stack for efficient error tracking and log management.

      ## Design for Horizontal Scaling

      Design your services to scale horizontally. This means your system should be able to handle increased load by adding more machines to the resource pool, rather than by adding more power to existing machines.

      ## Use Asynchronous Processing

      For time-consuming tasks, implement asynchronous processing using message queues like RabbitMQ or Apache Kafka. This helps in maintaining responsiveness of your API even under high load.

      By following these practices, you can build backend services that are not only scalable but also maintainable and efficient, providing a solid foundation for your mobile application.
    `,
    image: '/placeholder.svg?height=400&width=800',
    date: '2023-04-30',
  },
]

export default function BlogPost() {
  const params = useParams()
  const post = blogPosts.find(p => p.id === Number(params.id))

  if (!post) {
    return <div>Blog post not found</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 text-white"
    >
      <div className="container mx-auto px-6 py-12">
        <Link href="/#blog">
          <motion.button
            className="mb-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Blog
          </motion.button>
        </Link>
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {post.title}
        </motion.h1>
        <motion.div
          className="mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          className="prose prose-invert max-w-none"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </motion.div>
  )
}

