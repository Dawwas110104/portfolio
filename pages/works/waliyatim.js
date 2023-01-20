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
          Wali Yatim <Badge>2022</Badge>
        </Title>
        <P>
          PresensiQ carries the concept of 'Digitizing Presence' 
          so that the presence can run transparently and make it 
          easier for the data recap process.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://wali-yatim.digitindo.com/">
              https://wali-yatim.digitindo.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          {/* <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem> */}
          <ListItem>
            <Meta>Stack</Meta>
            <span>Laravel, PHP, HeidiSql</span>
          </ListItem>
          {/* <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
              How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
              $5/mo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem> */}
        </List>
  
        <WorkImage src="/images/works/Waliyatim2.png" alt="WaliYatim" />
        <WorkImage src="/images/works/Waliyatim3.png" alt="WaliYatim" />
        <WorkImage src="/images/works/Waliyatim4.png" alt="WaliYatim" />
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/FOcHsu2gUPo"
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
  