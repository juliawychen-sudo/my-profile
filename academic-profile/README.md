# Academic profile

A second course project: an academic introduction page, web CV, and reusable UI kit.

## Open and edit

Open `index.html` in Chrome. The site also works without a server.

- `index.html`: education, experience, research summaries, contact links.
- `ui-kit.html`: a demonstration of the reusable components.
- `css/style.css`: general styles and component imports.
- `css/components/`: container, avatar, button, banner, navigation, sections, cards, footer.
- `images/portrait.jpg`: portrait copied from the personal profile.
- `documents/wanyu-chen-cv.pdf`: web CV without home address or phone numbers.

The existing personal profile links to `academic-profile/index.html`; this page links back to `../index.html`. Explicit filenames let these links work both from Finder and on GitHub Pages.

## Publish with your existing GitHub Pages repository

Upload the complete `academic-profile` folder and updated root `index.html` to the existing `my-profile` repository, preserving this folder structure. Do not upload the source research reports or data folders.

After GitHub Pages deploys, the academic page will be at:
https://juliawychen-sudo.github.io/my-profile/academic-profile/

The UI kit will be at:
https://juliawychen-sudo.github.io/my-profile/academic-profile/ui-kit.html

These are intended paths; publication has not been performed by creating these local files.

## Course components

The UI kit provides a responsive container, circular avatar, primary button, photographic banner with gradient and a call to action, and component stylesheets imported into one main CSS file. The project cards reuse a shared class. No framework or build step is required.

The layout examples now include Flexbox cards and a responsive CSS Grid. `behavior.js` implements a greeting toggle and a copy-email click listener, including copy feedback and a fallback message when clipboard access fails.

## Typeform and final submission

The final assignment explicitly requires a Typeform embedded in the live website. The published form at https://form.typeform.com/to/VUFnk1xd is now configured and was verified to load inside the local website.

Create a short enquiry form in Typeform (name, email, topic, message), publish it, then paste its HTTPS share link into `typeformUrl` in `form-config.js`. The enquiry section is shown only when a real Typeform link is configured. Check that it loads and accepts responses before submitting the website URL.

The personal-profile submission was confirmed on the course platform. No additional completion-request form was found in the rendered lesson pages; this does not establish administrative requirements outside the course. Research source documents and licensed datasets are not included in this repository.

## Content maintenance

The education start year and expected graduation date follow the supplied CV. Research descriptions distinguish completed descriptive/data work from proposed empirical tests. No research reports or licensed datasets are bundled. Update experience dates and replace the public CV when your resume changes.
