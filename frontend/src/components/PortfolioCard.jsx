import React from 'react';

export default function PortfolioCard({ project = {} }) {
  const {
    title = 'Projekt-Name',
    description = 'Kurzbeschreibung des Projekts. Füge hier später Details hinzu.',
    image: imageSrc = '/projects/fn.png',
    preview: previewUrl = null,
    repo: repoUrl = null,
  } = project;

  const isExternal = (url) => typeof url === 'string' && /^(https?:)?\/\//.test(url);

  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="card reveal bg-base-200/6 border border-base-300 rounded-2xl overflow-hidden shadow-lg">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 flex items-center justify-center p-6 lg:p-8 bg-transparent">
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-full max-h-[420px] object-contain"
              />
            </div>

            <div className="card-body p-6 lg:w-1/2 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted mb-4">{description}</p>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-col sm:flex-row items-center sm:justify-between gap-3">
                <div className="flex gap-3">
                  {previewUrl ? (
                    <a
                      href={previewUrl}
                      className="inline-block px-6 py-2 rounded-lg border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-200"
                      {...(isExternal(previewUrl) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      aria-label="Live Preview"
                    >
                      Preview
                    </a>
                  ) : null}

                  {repoUrl ? (
                    <a
                      href={repoUrl}
                      className="inline-block px-6 py-2 rounded-lg border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-200"
                      {...(isExternal(repoUrl) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      aria-label="GitHub Repository"
                    >
                      GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
