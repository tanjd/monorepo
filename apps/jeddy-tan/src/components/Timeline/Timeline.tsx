import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Experiences from '../../data.json';

export function Timeline() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#192428">
        {Experiences.experiences.map((experience, id) => (
          <VerticalTimelineElement
            key={experience.order}
            className={
              experience.type === 'work'
                ? 'vertical-timeline-element--work'
                : 'vertical-timeline-element--education'
            }
            date={experience.date}
            iconStyle={{
              background: experience.isActive ? '#d8ab4e' : '#192428',
              color: experience.isActive ? '#192428' : '#fff',
            }}
            icon={experience.type === 'work' ? <WorkIcon /> : <SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">{experience.title}</h3>
            {experience.subtitle && (
              <h4 className="vertical-timeline-element-subtitle">{experience.subtitle}</h4>
            )}
            {experience.descriptions.map(desc => (
              <p key={desc}>
                <div dangerouslySetInnerHTML={{ __html: desc }} />
              </p>
            ))}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
