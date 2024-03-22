import React from 'react';
import { TiHtml5 } from "react-icons/ti";
import { PiFileCssFill } from "react-icons/pi";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoPhp } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaSymfony } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";

const Skills = () => {

    const skillsData = [
        { name: 'PHP', iconClass: <BiLogoPhp size={30}/> },
        { name: 'JAVA', iconClass: <FaJava size={30}/> },
        { name: 'HTML', iconClass: <TiHtml5 size={30}/> },
        { name: 'CSS', iconClass: <PiFileCssFill size={30}/>  },
        { name: 'MySql', iconClass: <SiMysql size={30}/>  },
        { name: 'JavaScript', iconClass: <RiJavascriptFill size={30}/> },
        { name: 'Reat JS', iconClass: <FaReact size={30}/> },
        { name: 'Git', iconClass: <FaGitAlt size={30}/> },
        { name: 'Symfony', iconClass: <FaSymfony size={30}/> },
        { name: 'Laravel', iconClass: <FaLaravel size={30}/> },
        // Add more skills as needed
        ];
  

        return (
          <div name="skill" className="py-5 bg-gray-200" style={{ minHeight: '600px' }}>
            <div className="container mx-auto h-full">
              <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
              <div className="overflow-x-auto">
                <table className="table-auto mx-auto">
                  <tbody>
                    {skillsData.reduce((rows, skill, index) => {
                      if (index % 4 === 0) rows.push([]);
                      rows[rows.length - 1].push(
                        <td key={index} className="border px-8 py-4 text-center">
                          <i>{skill.iconClass}</i>
                          <p className="mt-4">{skill.name}</p>
                        </td>
                      );
                      return rows;
                    }, []).map((row, index) => <tr key={index}>{row}</tr>)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
}

export default Skills;