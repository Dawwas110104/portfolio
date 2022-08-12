import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="PresensiQ">
      <Container>
        <Title>
          PresensiQ <Badge>2022</Badge>
        </Title>
        <P>
          A Markdown note-taking app with 100+ plugins, cross-platform and
          encrypted data sync support. The life-time revenue is more than $300k.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.presensiq.digitindo.com/">
              https://www.presensiq.digitindo.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          {/* <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem> */}
          <ListItem>
            <Meta>Stack</Meta>
            <span>Laravel, HeidiSql</span>
          </ListItem>
          {/* <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
              How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
              $5/mo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem> */}
        </List>
  
        <WorkImage src="/images/works/PresensiQ_Dashboard.png" alt="PresensiQ" />
        <WorkImage src="/images/works/PresensiQ_Guru.png" alt="PresensiQ" />
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/rG2KhLP_r60"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  