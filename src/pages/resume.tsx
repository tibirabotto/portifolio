import Bar from "@/components/Bar";
import { languages, tools } from "../data";
import React from "react";
import {motion} from 'framer-motion'
import {fadeInUp, routeAnimation} from '../animations'
export default function resume() {

  return (
    <motion.div className="px-6 py-2" variants={routeAnimation} initial="initial" animate="animate" exit="exit">
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
            Software Engineer Technician
            </h5>
            <p className="font-semibold">Centennial College (2021-2023)</p>
  
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
            Full Stack Development
            </h5>
            <p className="font-semibold">LightHouse Labs (Oct-2023/Jan-2024)</p>
  
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          {/* <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Software Developer</h5>
            <p className="font-semibold">Naja Solucoes (2014-2016)</p>
            <p className="my-3">
              Ruby On Rails, PostgreSQL, Node.JS and Javascript
            </p>
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Software Developer</h5>
            <p className="font-semibold">Prolins IT Solution (2013-2014)</p>
            <p className="my-3">IOS, Android, Node.JS</p>
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Software Developer</h5>
            <p className="font-semibold">Fortes Tecnologia (2009-2013)</p>
            <p className="my-3">PHP, Ruby on Rails, JQuery, CodeIgniter</p>
          </div> */}
        </motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
