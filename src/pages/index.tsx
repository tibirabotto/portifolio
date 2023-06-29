import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import {services} from '../data'
import ServiceCard from '@/components/ServiceCard'
import {motion} from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '@/animations'

const Home = ({endpoint}: any) => {
  console.log(endpoint)
  return (
   <motion.div className="flex flex-col flex-grow px-6 pt-1" variants={routeAnimation} initial="initial" animate="animate" exit="exit" >  
    <h6 className="my-3 text-base font-medium">
        I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Academy of Technology. I have 3+ years of experience in
        Web Development and I have a Youtube Channel where I teach Full Stack
        Web Development
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>

        <motion.div className="grid gap-6 my-3 md:grid-cols-2" variants={stagger} initial="" animate="animate" >
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
        </div>
   </motion.div>
   
  )

}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
  // const data = await res.json()
  // console.log(data)
  return { props: { endpoint: process.env.VERCEL_URL } }
}


export default Home;


