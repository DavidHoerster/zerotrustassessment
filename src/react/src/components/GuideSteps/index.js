import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";


const Steps = [
    {
        id: 1,
        title: 'Step 1: (Optional) Zero Trust Assessment',
        description: (
            <>
                Begin with the Zero Trust Assessment to ensure your organization is securely positioned before advancing your Zero Trust journey.
                <br />
                This assessment provides essential checks to confirm a strong security baseline, preparing you for advanced features and a more resilient security posture.
                <br />
                Click the video on the left to learn more about the assessment or click the button below for in-depth documentation.

                <br /><br />
                <div className={styles.buttons}>
                    <Link
                        className="button button--primary button--lg"
                        href="docs/app-permissions">
                        Learn about the Zero Trust Assessment
                    </Link>
                </div>

            </>
        ),
        imageUrl: require('@site/static/img/guide-step1.png').default,
        imageAltText: 'Learn about the Zero Trust Assessment video'
    },
    {
        id: 2,
        title: 'Step 2: Prepare for the workshop ',
        description: (
            <>
                <ul>
                    <li>Review the our Introduction to the Zero Trust Workshop video on the right</li>
                    <li>Identify which teams in your organization to involve.</li>
                    <li>Access the <a href='https://aka.ms/zerotrust' target='_blank' title='Microsoft Zero Trust'>Zero Trust architecture resources</a>.</li>
                    <li>Reach out to your Microsoft partner or account team, if applicable, about including them in your workshop.</li>
                    <li>Download the Zero Trust Workshop tool by clicking the button below.</li>
                </ul>

                <div className={styles.buttons}>
                    <Link
                        className="button button--primary button--lg"
                        href="https://github.com/microsoft/zerotrustassessment/raw/main/src/documentgenerator/Assets/ZeroTrustTemplate.xlsx">
                        Download strategy workshop tool ↓
                    </Link>
                </div>

            </>
        ),
        imageUrl: require('@site/static/img/guide-step1.png').default,
        imageAltText: 'Learn about the Zero Trust workshop video'
    },
    {
        id: 3,
        title: 'Step 3: Run the pillar specific workshops',
        description: (
            <>
                <p>In addition to reviewing the Workshop tool, review the below videos for the pillar workshops you will be running:</p>
                <ul>
                    <li><a href='docs/videos/IdentityPillar' title='Identity Pillar Info'>Identity Pillar</a></li>
                    <li><a href='docs/videos/DevicesPillar' title='Devices Pillar Info'>Devices Pillar</a></li>
                    <li><a href='docs/videos/DataPillar' title='Data Pillar Info'>Data Pillar</a></li>
                </ul>
            </>
        ),
        imageUrl: require('@site/static/img/learn-pillars.png').default,
        imageAltText: 'Specific pillar workshop videos'
    },
    {
        id: 4,
        title: 'Step 4: Document results & create a plan',
        description: (
            <>
                <ul>
                    <li>Upload assessment and workshop results to your project management tool (e.g., ADO, JIRA).</li>
                    <li>Establish a baseline and track your progress with regular assessments every 6 months.</li>
                    <li>Identify areas that need improvement and adjust your security plan accordingly.. ​</li>
                </ul>
            </>
        ),
        imageUrl: require('@site/static/img/guide-step4.png').default,
        imageAltText: 'Document results and create a plan'
    },
    {
        id: 5,
        title: 'Step 5: Share your feedback',
        description: (
            <>
                <ol>
                    <li>Have feedback from running the workshop? Share it with us <a href='https://aka.ms/ztworkshop/feedback' target='_blank' title='Zero Trust Workshop Feedback'>here</a>.</li>
                    <li>Found any bugs or have enhancement suggestions? Contribute to the GitHub repository <a href='https://github.com/microsoft/zerotrustassessment' target='_blank' title='Zero Trust Workshop and Assessment Repo'>here</a>. ​</li>
                </ol>
            </>
        ),
        imageUrl: require('@site/static/img/guide-step5.png').default,
        imageAltText: 'Provide feedback on the workshop'
    },
];

export default function GuideSteps() {
    return (
        <div className="content-rows">
            {Steps.map((step, index) => {
                const isEven = (index) % 2 === 0; // steps are 1-indexed
                return (
                    <section
                        key={step.id}
                        className={`row-section ${isEven ? 'even-row' : 'odd-row'}`}
                    >
                        <div
                            className={`row-content ${isEven ? 'image-first' : 'text-first'
                                }`}
                        >
                            {/* Conditionally render Image and Text based on row number */}
                            {isEven ? (
                                <>
                                    <div className="image-container">
                                        <img src={step.imageUrl} title={step.imageAltText} />
                                    </div>
                                    <div className="text-container">
                                        <h2>{step.title}</h2>
                                        <p className="text--left">{step.description}</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="text-container">
                                        <h2>{step.title}</h2>
                                        <p className="text--left">{step.description}</p>
                                    </div>
                                    <div className="image-container">
                                        <img src={step.imageUrl} title={step.imageAltText} />
                                    </div>
                                </>
                            )}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}
