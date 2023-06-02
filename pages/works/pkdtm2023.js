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
    <Layout title="PKDTM1 IPM Sepanjang 2023">
      <Container>
        <Title>
          PKDTM1 IPM Sepanjang<Badge>2023</Badge>
        </Title>
        <P>
        Information center for participants of PKDTM1 IPM Sepanjang 2023.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://pkdtm-sepanjang.netlify.app">
              https://pkdtm-sepanjang.netlify.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          {/* <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem> */}
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS</span>
          </ListItem>
          {/* <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
              How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
              $5/mo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem> */}
        </List>
        <WorkImage src="/images/works/pkdtm.png" alt="PKDTM1" />
        <WorkImage src="/images/works/pkdtm2.png" alt="PKDTM1" />
        <WorkImage src="/images/works/pkdtm3.png" alt="PKDTM1" />
        <WorkImage src="/images/works/pkdtm4.png" alt="PKDTM1" />
        <WorkImage src="/images/works/pkdtm5.png" alt="PKDTM1" />
        {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/FOcHsu2gUPo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio> */}
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  
