import { ArrowUpRight } from 'lucide-react';
import Card from './Card.jsx';

export default function ProjectCard({ project }) {
  return (
    <Card className="project-card">
      <div className="project-visual" style={{ '--project-accent': project.accent }}>
        <span>{project.index}</span>
      </div>
      <div className="project-content">
        <div className="project-meta">
          <span>{project.type}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-footer">
          <div className="tag-list">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <a href="#" aria-label={`Open ${project.title}`}><ArrowUpRight size={19} /></a>
        </div>
      </div>
    </Card>
  );
}
