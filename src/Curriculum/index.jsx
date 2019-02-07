import React from 'react';
import styles from './styles.module.css';
import ProfilePicture from './components/ProfilePicture';
import ShortLabeledInfo from './components/ShortLabeledInfo';

const Curriculum = () => (
    <div className={styles.main}>
        <div className={styles.sidebar}>
            <div className={styles.sidebarContent}>
                <ProfilePicture />
                <ShortLabeledInfo
                    title="Contact"
                    info={[
                        { label: 'Email', value: 'georgeranpe@gmail.com' },
                        { label: 'Phone', value: '722 718 6796' },
                    ]}
                />
                <ShortLabeledInfo
                    title="Programming languajes"
                    info={[
                        { label: 'JavaScript (ES2017)', value: '' },
                        { label: 'TypeScript', value: '' },
                        { label: 'Java', value: '' },
                    ]}
                />
                <ShortLabeledInfo
                    title="Platforms and frameworks"
                    info={[
                        { label: 'GIT', value: '' },
                        { label: 'Node js', value: '' },
                        { label: 'Nuxt js', value: '' },
                        { label: 'Next js', value: '' },
                        { label: 'Vue js', value: '' },
                        { label: 'React js', value: '' },
                        { label: 'Laravel', value: '' },
                    ]}
                />
                <ShortLabeledInfo
                    title="Other skills"
                    info={[
                        { label: 'SQL', value: '' },
                        { label: 'API Integrations', value: '' },
                        { label: 'Rest API', value: '' },
                        { label: 'i18n (Internacionalitation)', value: '' },
                        { label: 'Firebase', value: '' },
                        { label: 'CSS, Transitions and responsive design', value: '' },
                    ]}
                />
                <ShortLabeledInfo
                    title="Languages"
                    info={[
                        { label: 'Spanish', value: '100%' },
                        { label: 'English', value: '80%' },
                    ]}
                />
            </div>
        </div>
        <div className={styles.maininfo}>
            <div className={styles.mainInfo}>
                <h1>Rangel Peralta Jorge Luis</h1>
                <h2>FullStack Web Developer</h2>
            </div>
            <h3>About me</h3>
            <p className={styles.paragraph}>I want to acquire experience designing, building and testing computational systems, working with other people to deliver products that are reliable and scalable, always learning the most recent technologies and techniques, making the work easier for me and my teammates.</p>
            <h3>Experience</h3>
            <h5>PWM Desarrollos — Full Stack developer</h5>
            <h6>Current Job</h6>
            <p className={styles.paragraph}>In charge of design and maintain the main page of the current product, builded in Next js as a server rendered application to bust is SEO in addition to aid the development of other products and update the design and responsiveness by following the specs of the design department. More recently the refractor and application of a linter of the main product written in React and React native with backend in node through firebase cloud functions.</p>
            <h5>PROCOM servicio celular,Toluca — Software Developer</h5>
            <h6>August 2017 - December 2018</h6>
            <p className={styles.paragraph}>The functions were maintained with respect to those performed during my internship, except for the addition of new technologies in the frontend like Vue js
as well as the implementation of version control through a local git server for which I was responsible.</p>
            <h5>PROCOM servicio celular,Toluca — Software Developer (Internship)</h5>
            <h6>March 2017 - July 2017</h6>
            <p className={styles.paragraph}>Requirements analysis in different areas of the company, from
inventories and list up to production modules and analytics tools.
Design of tables and schemas in the database, both in production
as in human resources’ management.
Programming of modules and tools in HTML, CSS, JavaScript
client side and PHP server side.</p>
        </div>
    </div>
);

export default Curriculum;
