/* eslint-disable no-unused-vars */
import React from 'react'
import Title from './Title';

import {motion} from 'motion/react';
import * as variants from '../motion/animation';

const OurStory = () => {
    return (
        <section className="section" id='about'>
            <motion.div
                variants={variants.staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className="container">
                {/* Title */}
                <Title
                    subtitle="Our Story"
                    title="Beryfy began with one goal — to create fresh, meaningful digital solutions."
                />

                {/* wrapper */}
                <div className="grid gap-12 mt-14 lg:grid-cols-2 lg:items-start lg:gap-14">

                    <div className="lg:order-1">
                        {/* Image wrapper */}
                        <div className="grid grid-cols-2 gap-6 lg:gap-10 items-center mt-18 mb-20">

                            {/* Image 1 */}
                            <div className="relative max-w-max">
                                <motion.img  variants={variants.fadeIn}
                                    src="/images/img-3.png"
                                    alt="image"
                                    width={318}
                                    height={332}
                                    className="rounded-xl"
                                />
                                <img
                                    src="/images/shape-3.svg"
                                    alt="shape"
                                    width={107}
                                    height={109}
                                    className="absolute -top-10 -right-10 -z-10"
                                />
                            </div>

                            {/* Image 2 */}
                            <div>
                                <motion.img variants={variants.fadeIn}
                                    src="/images/img-2.png"
                                    alt="image"
                                    width={160}
                                    height={167}
                                    className="rounded-xl"
                                />
                            </div>

                            {/* Image 3 */}
                            <div>
                                <motion.img variants={variants.fadeIn}
                                    src="/images/img-1.png"
                                    alt="image"
                                    width={200}
                                    height={200}
                                    className="rounded-xl"
                                />
                            </div>

                            {/* Image 4 */}
                            <div className="relative max-w-max">
                                <motion.img variants={variants.fadeIn}
                                    src="/images/img-2.png"
                                    alt="image"
                                    width={200}
                                    height={200}
                                    className="rounded-xl"
                                />
                                <img
                                    src="/images/shape-3.svg"
                                    alt="shape"
                                    width={107}
                                    height={109}
                                    className="absolute -top-10 -left-10 -z-10"
                                />
                            </div>
                        </div>

                        {/* text */}
                        <motion.p  variants={variants.fadeInUp}>
                            We believe that good design and smart technology can transform ideas into growth.
                            Inspired by the concept of a berry — symbolizing freshness and endless potential —
                            we work to bring clarity, creativity, and innovation to every project.
                        </motion.p>
                    </div>

                    {/* right banner */}
                    <div className="lg:mt-32">
                        <motion.img variants={variants.fadeIn}
                            src="/images/img-1.png"
                            alt="image"
                            width={445}
                            height={565}
                            className="rounded-4xl ml-3.5"
                        />

                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default OurStory;
