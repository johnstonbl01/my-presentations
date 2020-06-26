# Comparison of Modern JS Frameworks

## The Process

### Ground Rules

- Latest version only (no betas, experimental features, etc)
- No CSS-in-JS
- No external libraries\* (except routing)
- Same application / functionality
- Generate app via CLI
- No unit / integration / e2e tests
- Mobile design only

### The App

- Netlify links
- App demo

### Build Order

1. React (v16.13.x)
2. Vue (v2.6.x)
3. Angular (v9.1.x)
4. Ember (3.18.x)

### Build Time

- React (~2 days -- designing the app as I went)
- Vue (~1 day)
- Angular (<1 day)
- Ember (~2 days)

## Objective Comparisons

### App Bundle Size

### Lines of Code

### Performance

### App Achitecture

- React
  - Data flows from top to bottom
- Vue
  - Data flows from top to bottom
- Angular
  - Data injected via services
  - Some data passed from top to bottom
- Ember
  - Monolithic files
  - Few components
  - Data injected via services / route models

### Framework Syntax

Common framework conventions that had to be learned from each to build the app.

- Data fetching
- Passing data around (data model / paradigm)
- Managing application / component state / sharing methods & functionality
- Binding data from template to JS component / controller
  - Data interpolation in the tempalte (i.e. exec function from component in template)
- Routing (programmatic)
- Component Lifecycles

## Subjective Comparisons

### Documentation

Chart

- React - 4 (can be hard to navigate, but easy to find right information once you get there)
- Vue - 4 (very similar to React docs)
- Angular - 3.5 (very easy to navigate, but almost too much information to sift through on each page)
- Ember - 3 (guide is good, but from there it can be really difficult to find what you need)

### General Thoughts

- React
  - Pros
    - The slogan "it's just JavaScript" feels right
    - Easy to pass data around
    - Feels very "light"; not much boilerplate
    - Amazing tooling
  - Cons
    - Some framework-specific conventions
    - JSX can be weird at first
    - Very JS heavy
- Vue
  - Pros
    - Feels very similar to just writing HTML / CSS / JS (i.e. traditional web dev)
    - Just works out of the box, with many conventions built in
    - Single file components are neat and reduce project clutter (kind of)
    - Amazing tooling
  - Cons
    - Some framework-specific conventions
    - Still pretty new and not great solutions for some common issues (i.e. Fragments)
    - Some conventions can be confusing (i.e. method vs computed prop vs class prop vs prop)
- Angular
  - Pros
    - Very defined conventions with some flexibility
    - Very detailed documentation
    - Difficult to learn (still)
    - Amazing tooling
  - Cons
    - Observables required
    - Feels heavy / lots of boilerplate (example - initial page created from CLI is 500 lines of HTML)
    - Very JS heavy
    - TypeScript required
- Ember
  - Pros
    - Everything has a place
    - Helpful community
  - Cons
    - Some current mixed conventions as they switch to native classes
    - Some docs out of date
    - Difficult paradigms to grasp -- does not feel similar to any of the other frameworks
    - Things that are very easy to do in the other frameworks can be confusing here
    - Data model is difficult to use & understand

### Overall Enjoyment

1. React
2. Vue / Angular
3. Ember
