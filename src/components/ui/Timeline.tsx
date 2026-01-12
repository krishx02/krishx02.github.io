import { useState } from 'react';
import type { TimelineEntry } from '../../data/timeline';
import './Timeline.css';

interface TimelineProps {
    entries: TimelineEntry[];
}

export function Timeline({ entries }: TimelineProps) {
    const [expandedIds, setExpandedIds] = useState<Set<string>>(() => {
        // Find the current role and expand it by default
        const currentRole = entries.find(e => e.isCurrentRole);
        return new Set(currentRole ? [currentRole.id] : []);
    });

    const toggleEntry = (id: string) => {
        setExpandedIds(prev => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    return (
        <div className="timeline">
            {entries.map((entry, index) => {
                const isExpanded = expandedIds.has(entry.id);
                const isLast = index === entries.length - 1;

                return (
                    <div
                        key={entry.id}
                        className={`timeline__item ${isLast ? 'timeline__item--last' : ''}`}
                    >
                        {/* Timeline line */}
                        <div className="timeline__line">
                            <span
                                className={`timeline__marker ${entry.type === 'education' ? 'timeline__marker--education' : ''
                                    } ${entry.isCurrentRole ? 'timeline__marker--current' : ''}`}
                                aria-hidden="true"
                            />
                        </div>

                        {/* Content */}
                        <div className="timeline__content">
                            <button
                                className="timeline__header"
                                onClick={() => toggleEntry(entry.id)}
                                aria-expanded={isExpanded}
                                aria-controls={`timeline-content-${entry.id}`}
                            >
                                <span className="timeline__chevron" aria-hidden="true">
                                    {isExpanded ? '▼' : '▶'}
                                </span>
                                <div className="timeline__header-text">
                                    <span className="timeline__title">
                                        {entry.title} @ {entry.organization}
                                    </span>
                                    <span className="timeline__date">
                                        {entry.startDate}
                                        {entry.endDate ? ` – ${entry.endDate}` : ' → Present'}
                                    </span>
                                </div>
                            </button>

                            <div
                                id={`timeline-content-${entry.id}`}
                                className={`timeline__details ${isExpanded ? 'timeline__details--expanded' : ''
                                    }`}
                            >
                                <ul className="timeline__bullets">
                                    {entry.bullets.map((bullet, i) => (
                                        <li key={i} className="timeline__bullet">
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
