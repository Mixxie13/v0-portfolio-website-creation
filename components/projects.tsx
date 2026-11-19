'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowDownRight, ChevronDown, Workflow } from 'lucide-react'
import { categories } from '@/lib/portfolio-projects'

export function Projects() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const allProjects = categories.flatMap((category) => category.projects)

  const activeCategoryData = categories.find(
    (category) => category.label === activeCategory
  )

  const projects =
    activeCategory === 'All'
      ? allProjects
      : activeCategoryData?.projects ?? []

  const filters = [
    {
      label: 'All',
      count: allProjects.length,
    },
    ...categories.map((category) => ({
      label: category.label,
      count: category.projects.length,
    })),
  ]

  const activeBlurb =
    activeCategory === 'All'
      ? 'Explore my full collection of CRM implementations, business integrations, and AI automation workflows.'
      : activeCategoryData?.blurb ?? ''

  return (
    <section
      id="projects"
      className="section-space projects-section"
      aria-labelledby="projects-heading"
    >
      <div className="site-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / PROJECT LIBRARY</p>

            <h2 id="projects-heading">
              From idea to
              <br />
              <span className="gradient-text">working workflow.</span>
            </h2>
          </div>

          <p>
            A closer look at the CRM implementations, integrations, and AI
            automation systems I’ve built. Select a project to explore the
            implementation.
          </p>
        </div>

        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects by platform"
        >
          {filters.map((filter) => {
            const isActive = activeCategory === filter.label

            return (
              <button
                type="button"
                key={filter.label}
                aria-pressed={isActive}
                onClick={() => {
                  setActiveCategory(filter.label)
                  setSelectedIndex(null)
                }}
                className={`project-filter ${
                  isActive ? 'filter-active' : ''
                }`}
              >
                {filter.label}
                <span>{filter.count}</span>
              </button>
            )
          })}
        </div>

        <p
          className="project-category-description"
          aria-live="polite"
        >
          {activeBlurb}
        </p>

        <div className="project-grid">
          {projects.map((project, index) => {
            const isExpanded = selectedIndex === index
            const detailsId = `project-details-${activeCategory
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')}-${index}`

            return (
              <article
                key={`${activeCategory}-${project.title}`}
                className={`project-card ${
                  isExpanded ? 'project-active' : ''
                }`}
              >
                {project.image ? (
                  <div className="project-image">
                    <Image
                      src={project.image}
                      alt={`${project.title} workflow screenshot`}
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="object-cover"
                    />

                    <span className="project-image-label">
                      WORKFLOW / {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                ) : (
                  <div
                    className="project-placeholder"
                    aria-hidden="true"
                  >
                    <Workflow size={40} strokeWidth={1} />

                    <span>
                      {project.tags[0]} / WORKFLOW{' '}
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <ArrowDownRight size={24} />
                  </div>
                )}

                <div className="project-content">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedIndex(isExpanded ? null : index)
                    }
                    aria-expanded={isExpanded}
                    aria-controls={detailsId}
                    className="project-toggle"
                  >
                    <h3>{project.title}</h3>

                    <ChevronDown
                      size={20}
                      aria-hidden="true"
                      className={isExpanded ? 'rotate-180' : ''}
                    />
                  </button>

                  <p>{project.description}</p>

                  <div
                    id={detailsId}
                    hidden={!isExpanded}
                    className="project-details"
                  >
                    <p>{project.details}</p>
                  </div>

                  <div
                    className="project-tags"
                    aria-label={`${project.title} technologies and capabilities`}
                  >
                    {project.tags.map((tag) => (
                      <span className="project-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
